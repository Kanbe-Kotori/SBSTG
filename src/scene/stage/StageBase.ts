abstract class StageBase extends PageBase {
    public arrayMissile:Array<MissileBase>;
    public arrayController:Array<EmitterBase>;

    protected readonly _uniqueStageID:string;
    protected readonly _time:number;

    protected titleText:egret.TextField;
    protected timeText:egret.TextField;

    protected timer:egret.Timer;
    protected missile_timer:egret.Timer;

    public state:StageState;

    protected constructor(id:string, time:number) {
        super("stage" + id);
        this._uniqueStageID = id;
        this._time = time;
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);

        this.arrayMissile = new Array<MissileBase>();
        this.arrayController = new Array<EmitterBase>();

        this.timer = new egret.Timer(1000, 3);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerUpdate, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerEnd,this);
        //this.timer.start();

        this.missile_timer = new egret.Timer(50, 0);
        this.missile_timer.addEventListener(egret.TimerEvent.TIMER, this.onMissileUpdate, this);
        this.addChild(SelfMachine.INSTANCE);

        this.state = StageState.BEFORE_RUNNING;
        SelfMachine.INSTANCE.currentStage = this;

        Main.getMain().addChild(Info.INSTANCE);
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName(TextureNames.GAME_SKY);
        this.addChild(sky);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;

        this.titleText = new egret.TextField();
        this.titleText.width = 1080;
        this.titleText.height = 120;
        this.titleText.x = 0;
        this.titleText.y = 0;
        this.titleText.size = 72;
        this.titleText.text = this._uniqueStageID + " " + TextHelper.getStageNameFromID(this._uniqueStageID);
        this.titleText.textColor = 0x000000;
        this.titleText.fontFamily = "KaiTi";
        this.titleText.textAlign = egret.HorizontalAlign.CENTER;
        this.titleText.verticalAlign = egret.VerticalAlign.BOTTOM;
        this.addChild(this.titleText);

        this.timeText = new egret.TextField();
        this.timeText.width = 360;
        this.timeText.height = 120;
        this.timeText.x = 360;
        this.timeText.y = 120;
        this.timeText.size = 48;
        this.timeText.text = "3";
        this.timeText.textColor = 0x000000;
        this.timeText.textAlign = egret.HorizontalAlign.CENTER;
        this.timeText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.timeText);

        let btnPause = new Button(180, 180, new egret.Point(180, 1800), TextureNames.BUTTON_PAUSE);
        btnPause.setAction(StageBase.click_pause);
        this.addChild(btnPause);

        let btnRestart = new Button(180, 180, new egret.Point(420, 1800), TextureNames.BUTTON_RESTART);
        btnRestart.setAction(StageBase.click_restart);
        this.addChild(btnRestart);

        let btnReturn = new Button(180, 180, new egret.Point(660, 1800), TextureNames.BUTTON_RETURN);
        btnReturn.setAction(StageBase.click_return);
        this.addChild(btnReturn);

        let btnInfo = new Button(180, 180, new egret.Point(900, 1800), TextureNames.BUTTON_INFO);
        btnInfo.setAction(StageBase.click_info);
        this.addChild(btnInfo);
    }

    protected onTimerUpdate(event: egret.TimerEvent) {
        let num =  parseInt(this.timeText.text);
        let str = "";
        if (num > 1 || this.state == StageState.RUNNING)
            str = (num - 1) + "";
        else
            str = "Begin!"
        this.timeText.text = str;
    }

    protected onTimerEnd(event: egret.TimerEvent) {
        if (this.state == StageState.BEFORE_RUNNING) {
            this.timeText.text = "";
            this.start();
            this.timeText.text = this._time + "";
            this.timer.reset();
            this.timer.repeatCount = this._time;
            this.timer.start();
        } else {
            this.win();
        }  
    }

    protected onMissileUpdate(event: egret.TimerEvent) {
        for(let i of this.arrayMissile) {
            i.onUpdate(event);
        }
        for (let i of SelfMachine.INSTANCE.currentStage.arrayMissile) {
            if (i.isCollide()) {
                console.log("nisile");
                this.dead();
                break;
            }
        }
        event.updateAfterEvent();
    }

    protected win() {
        //TODO:LocalStorage
        this.state = StageState.END;
        for (let i of this.arrayController) {
            i.stop();
        }
        this.timer.stop();
        this.missile_timer.stop();
        Main.getMain().addChild(Win.INSTANCE)
    }

    public start() {
        this.state = StageState.RUNNING;
        for (let i of this.arrayController) {
            i.start();
        }
        this.missile_timer.start();
    }

    public pause() {
        this.state = StageState.PAUSING;
        for (let i of this.arrayController) {
            i.stop();
        }
        this.timer.stop();
        this.missile_timer.stop();
    }

    public resume() {
        this.state = StageState.RUNNING;
        for (let i of this.arrayController) {
            i.resume();
        }
        this.timer.start();
        this.missile_timer.start();
    }

    /**
     * 重开时直接用
     */
    public restart() {
        this.state = StageState.BEFORE_RUNNING;
        for (let i of this.arrayController) {
            i.stop();
        }
        MyUtils.cleanMissile(this);
        this.missile_timer.stop();
        this.timeText.text = "3";
        this.timer.reset();
        this.timer.repeatCount = 3;
        this.timer.start();
    }

    /**
     * 清除一切，退出关卡前用
     */
    public end() {
        this.state = StageState.END;
        this.timer.stop();
        this.missile_timer.stop();
        MyUtils.cleanMissile(this);
        MyUtils.cleanController(this);
        this.removeChildren();
        SelfMachine.INSTANCE.leaveStage();
    }

    public dead() {
        this.state = StageState.END;
        for (let i of this.arrayController) {
            i.stop();
        }
        this.timer.stop();
        this.missile_timer.stop();
        Main.getMain().addChild(Dead.INSTANCE);
    }

    public static click_pause(evt:egret.TouchEvent) {
		let current = SelfMachine.INSTANCE.currentStage;
        if (current.state != StageState.RUNNING) {
            return;
        }
        current.pause();
        Main.getMain().addChild(Pause.INSTANCE);
	}
    	
    public static click_return(evt:egret.TouchEvent) {
        let current = SelfMachine.INSTANCE.currentStage;
        current.end();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }

	public static click_restart(evt:egret.TouchEvent) {
		let current = SelfMachine.INSTANCE.currentStage;
		current.restart();
	}

    public static click_info(evt:egret.TouchEvent) {
		let current = SelfMachine.INSTANCE.currentStage;
        if (current.state != StageState.RUNNING) {
            return;
        }
        current.pause();
        Main.getMain().addChild(Info.INSTANCE);
	}

}

enum StageState {
	BEFORE_RUNNING,
	RUNNING,
	PAUSING,
	END
}