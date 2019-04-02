abstract class StageBase extends PageBase {
    public arrayMissile:Array<MissileBase> = new Array<MissileBase>();
    public arrayController:Array<ControllerBase> = new Array<ControllerBase>();

    protected readonly _time:number;

    protected textfield:egret.TextField;
    private btnPause:Button;
    private btnReturn:Button;
    private btnRestart:Button;
    private btnInfo:Button;

    protected timer:egret.Timer;
    protected missile_timer:egret.Timer;

    public state:StageState;

    protected constructor(name:string, time:number) {
        super(name);
        this._time = time;
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.timer = new egret.Timer(1000, 3);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerUpdate, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerEnd,this);
        this.timer.start();

        this.missile_timer = new egret.Timer(50, 0);
        this.missile_timer.addEventListener(egret.TimerEvent.TIMER, this.onMissileUpdate, this);
        this.addChild(SelfMachine.INSTANCE);

        this.state = StageState.BEFORE_RUNNING;
        SelfMachine.INSTANCE.currentStage = this;
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName(TextureNames.GAME_SKY);
        this.addChild(sky);
        sky.width = this.stage.stageWidth;
        sky.height = this.stage.stageHeight;
        sky.alpha = 1;

        this.textfield = new egret.TextField();
        this.textfield.width = 600;
        this.textfield.height = 120;
        this.textfield.x = 540;
        this.textfield.y = 120;
        this.textfield.size = 50;
        this.textfield.text = "3";
        this.textfield.textColor = 0x000000;
        this.textfield.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.textfield);

        this.btnPause = new Button(180, 180, new egret.Point(180, 1800), TextureNames.BUTTON_PAUSE);
        this.btnPause.setAction(StageBase.click_pause);
        this.addChild(this.btnPause);

        this.btnRestart = new Button(180, 180, new egret.Point(420, 1800), TextureNames.BUTTON_RESTART);
        this.btnRestart.setAction(StageBase.click_restart);
        this.addChild(this.btnRestart);

        this.btnReturn = new Button(180, 180, new egret.Point(660, 1800), TextureNames.BUTTON_RETURN);
        this.btnReturn.setAction(StageBase.click_return);
        this.addChild(this.btnReturn);

        this.btnInfo = new Button(180, 180, new egret.Point(900, 1800), TextureNames.BUTTON_INFO);
        this.btnInfo.setAction(StageBase.click_info);
        this.addChild(this.btnInfo);
    }

    protected onTimerUpdate(event: egret.TimerEvent) {
        let num =  parseInt(this.textfield.text);
        let str = "";
        if (num > 1 || this.state == StageState.RUNNING)
            str = (num - 1) + "";
        else
            str = "Begin!"
        this.textfield.text = str;
    }

    protected onTimerEnd(event: egret.TimerEvent) {
        if (this.state == StageState.BEFORE_RUNNING) {
            this.textfield.text = "";
            this.start();
            this.textfield.text = this._time + "";
            this.timer.reset();
            this.timer.repeatCount = this._time;
            this.timer.start();
        } else {
            this.win();
        }  
    }

    protected onMissileUpdate(event: egret.TimerEvent) {
        for(let i of this.arrayMissile) {
            i.onUpdate();
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
        //TODO
        this.textfield.text = "niyingle";
        this.end();
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
            i.start();
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
        this.textfield.text = "3";
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
        //SelfMachine.INSTANCE.setDead();
        //this.removeChild(SelfMachine.INSTANCE);
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

    public static click_pause() {
		let current = SelfMachine.INSTANCE.currentStage;
        if (current.state != StageState.RUNNING) {
            return;
        }
        current.pause();
        Main.getMain().addChild(Pause.INSTANCE)
	}
    	
    public static click_return() {
        let current = SelfMachine.INSTANCE.currentStage;
        current.end();
		SelfMachine.INSTANCE.leaveStage();
        Main.getMain().removeChild(current);
        Main.getMain().addChild(PageMain.INSTANCE);
    }

	public static click_restart() {
		let current = SelfMachine.INSTANCE.currentStage;
		current.restart();
	}

    public static click_info() {
		//TODO
	}

}

enum StageState {
	BEFORE_RUNNING,
	RUNNING,
	PAUSING,
	END
}