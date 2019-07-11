abstract class StageBase extends PageBase {
    public arrayMissile:Array<MissileBase>;
    public arrayController:Array<EmitterBase>;

    protected readonly _uniqueStageID:string;
    protected readonly _total_time:number;
    protected _current_tick;

    protected titleText:egret.TextField;
    protected timeText:egret.TextField;

    protected tick_timer:egret.Timer;
    protected missile_timer:egret.Timer;

    public state:StageState;

    public containers = new Array<egret.DisplayObjectContainer>();

    public _front_stage = null;
    public _next_stage = null;

    public constructor(id:string, time:number) {
        super();
        this._uniqueStageID = id;
        this._total_time = time;
        Chapters.registerStage(this._uniqueStageID, this);

        this.addEventListener(MissileEvent.TICK, MissileBase.TickLogic, this);
        this.addEventListener(MissileEvent.EDGE, MissileBase.EdgeLogic, this);
    }

    public addChildAtLayer(container, layer) {
        this.containers[layer].addChild(container);
    }

    public getUniqueID() {
        return this._uniqueStageID;
    }

    public getCurrentTick() {
        return Math.max(this._current_tick, 0);
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);

        this._current_tick = -60;
        this.state = StageState.BEFORE_RUNNING;

        this.arrayMissile = new Array<MissileBase>();
        this.arrayController = new Array<EmitterBase>();

        this.tick_timer = new egret.Timer(50);
        this.tick_timer.addEventListener(egret.TimerEvent.TIMER, this.onTickUpdate, this);
        this.tick_timer.start();

        this.missile_timer = new egret.Timer(50, 0);
        this.missile_timer.addEventListener(egret.TimerEvent.TIMER, this.onMissileUpdate, this);

        SelfMachine.INSTANCE.currentStage = this;
        this.addChildAtLayer(SelfMachine.INSTANCE, DrawingLayer.SELF_MACHINE);
        SelfMachine.INSTANCE.UNDEAD = true;

        this.initEmitters();
    }

    protected abstract initEmitters();

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

        let btnPause = new Button(180, 180, new egret.Point(180, 1800)).setTexture(TextureNames.BUTTON_PAUSE);
        btnPause.setAction(StageBase.click_pause);
        this.addChildAtLayer(btnPause, DrawingLayer.CONTROL);

        let btnRestart = new Button(180, 180, new egret.Point(420, 1800)).setTexture(TextureNames.BUTTON_RESTART);
        btnRestart.setAction(StageBase.click_restart);
        this.addChildAtLayer(btnRestart, DrawingLayer.CONTROL);

        let btnReturn = new Button(180, 180, new egret.Point(660, 1800)).setTexture(TextureNames.BUTTON_RETURN);
        btnReturn.setAction(StageBase.click_return);
        this.addChildAtLayer(btnReturn, DrawingLayer.CONTROL);

        let btnInfo = new Button(180, 180, new egret.Point(900, 1800)).setTexture(TextureNames.BUTTON_INFO);
        btnInfo.setAction(StageBase.click_info);
        this.addChildAtLayer(btnInfo, DrawingLayer.CONTROL);
    }

    protected onTickUpdate(event: egret.TimerEvent) {
        this._current_tick++;
        if (this._current_tick < 0){
            this.timeText.text = Math.floor(- this._current_tick / 20 + 0.95) + "";
        } else if(this._current_tick == 0) {
            this.timeText.text = this._total_time + "";
            this.start();
        } else {
            this.timeText.text = Math.floor(30 - this._current_tick / 20 + 0.95) + "";
            if (this._current_tick >= this._total_time * 20) {
                this.win();
            }
        }      
    }

    protected onMissileUpdate(event: egret.TimerEvent) {
        for(let i of this.arrayMissile.slice(0)) {
            i.onUpdate(event);
            if (i.hasSpecialLogic(TickEventHandler)) {
                let event = new MissileTickEvent(i);
                this.dispatchEvent(event);
            }
        }
        if (SelfMachine.INSTANCE.UNDEAD) {
            return;
        }
        for (let i of SelfMachine.INSTANCE.currentStage.arrayMissile) {
            if (i.isCollide()) {
                this.dead();
                break;
            }
        }
        event.updateAfterEvent();
    }

    protected win() {
        LocalData.setStage(this._uniqueStageID, STAGE_DATA.PASSED);
        this.state = StageState.END;
        for (let i of this.arrayController) {
            i.stop();
        }
        this.tick_timer.stop();
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
        this.tick_timer.stop();
        this.missile_timer.stop();
    }

    public resume() {
        this.state = StageState.RUNNING;
        for (let i of this.arrayController) {
            i.resume();
        }
        this.tick_timer.start();
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
        this.tick_timer.stop();
        this._current_tick = -60;
        this.timeText.text = "3";
        this.tick_timer.start();
    }

    /**
     * 清除一切，退出关卡前用
     */
    public end() {
        this.state = StageState.END;
        this.tick_timer.stop();
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
        this.tick_timer.stop();
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