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

    public containers = new Array<egret.DisplayObjectContainer>();

    protected constructor(id:string, time:number) {
        super("stage" + id);
        this._uniqueStageID = id;
        this._time = time;
    }

    public addChildAtLayer(container, layer) {
        this.containers[layer].addChild(container);
    }

    public getUniqueID() {
        return this._uniqueStageID;
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);

        this.state = StageState.BEFORE_RUNNING;

        this.arrayMissile = new Array<MissileBase>();
        this.arrayController = new Array<EmitterBase>();

        this.timer = new egret.Timer(1000, 3);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerUpdate, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerEnd,this);
        this.timer.start();

        this.missile_timer = new egret.Timer(50, 0);
        this.missile_timer.addEventListener(egret.TimerEvent.TIMER, this.onMissileUpdate, this);

        SelfMachine.INSTANCE.currentStage = this;
        this.addChildAtLayer(SelfMachine.INSTANCE, DrawingLayer.SELF_MACHINE);
        //SelfMachine.INSTANCE.UNDEAD = true;

        this.initEmitters();
    }

    protected abstract initEmitters();

    public addMissile(missile:MissileBase) {
        let layer = missile.isBottomLayer? DrawingLayer.BOTTOM_MISSILE : DrawingLayer.UPPER_MISSILE;
        this.addChildAtLayer(missile, layer);
        this.arrayMissile.push(missile);
    }

    protected doRender() {
        for (let i = 0; i <= 6; i++) {
            this.containers[i] = new egret.DisplayObjectContainer();
            this.addChildAt(this.containers[i], i);
        }

        let sky = MyUtils.createBitmapByName(TextureNames.GAME_SKY);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChildAtLayer(sky, DrawingLayer.BACKGROUND);

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
        this.addChildAtLayer(this.titleText, DrawingLayer.CONTROL);

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
        this.addChildAtLayer(this.timeText, DrawingLayer.CONTROL);

        let btnPause = new Button(180, 180, new egret.Point(180, 1800), TextureNames.BUTTON_PAUSE);
        btnPause.setAction(StageBase.click_pause);
        this.addChildAtLayer(btnPause, DrawingLayer.CONTROL);

        let btnRestart = new Button(180, 180, new egret.Point(420, 1800), TextureNames.BUTTON_RESTART);
        btnRestart.setAction(StageBase.click_restart);
        this.addChildAtLayer(btnRestart, DrawingLayer.CONTROL);

        let btnReturn = new Button(180, 180, new egret.Point(660, 1800), TextureNames.BUTTON_RETURN);
        btnReturn.setAction(StageBase.click_return);
        this.addChildAtLayer(btnReturn, DrawingLayer.CONTROL);

        let btnInfo = new Button(180, 180, new egret.Point(900, 1800), TextureNames.BUTTON_INFO);
        btnInfo.setAction(StageBase.click_info);
        this.addChildAtLayer(btnInfo, DrawingLayer.CONTROL);
    }

    protected onTimerUpdate(event: egret.TimerEvent) {
        let num =  parseInt(this.timeText.text);
        this.timeText.text = (num - 1) + "";
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
        if (SelfMachine.INSTANCE.UNDEAD) {
            return;
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
        this.addChildAtLayer(Win.INSTANCE, DrawingLayer.POPUP)
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
        this.addChildAtLayer(Dead.INSTANCE, DrawingLayer.POPUP);
    }

    public static click_pause(evt:egret.TouchEvent) {
		let current = SelfMachine.INSTANCE.currentStage;
        if (current.state != StageState.RUNNING) {
            return;
        }
        current.pause();
        current.addChildAtLayer(Pause.INSTANCE, DrawingLayer.POPUP);
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
        current.addChildAtLayer(Info.INSTANCE, DrawingLayer.POPUP);
	}

}

enum StageState {
	BEFORE_RUNNING,
	RUNNING,
	PAUSING,
	END
}

enum DrawingLayer {
	BACKGROUND = 0,
	CONTROL = 1,
	EMITTER = 2,
    BOTTOM_MISSILE = 3,
	SELF_MACHINE = 4,
    UPPER_MISSILE = 5,
    POPUP = 6
}