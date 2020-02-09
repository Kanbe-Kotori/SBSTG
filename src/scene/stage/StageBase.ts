abstract class StageBase extends PageBase {
    public arrayMissile:Array<MissileBase>;
    public arrayLauncher:Array<Launcher>;

    protected readonly _uniqueStageID:string;
    protected readonly _total_time:number;
    protected _current_tick;

    protected _titleText:egret.TextField;
    protected _timeText:egret.TextField;

    protected _tick_timer:egret.Timer;
    protected _missile_timer:egret.Timer;

    public state:StageState;

    public containers = new Array<egret.Sprite>();

    public title:string = "标题还没初始化";
    public help_text:string = "帮助文本还没初始化";
    public front_stage:StageBase = null;
    public next_stage:StageBase = null;

    private _isTouching:boolean = false;
    private _touch_distance:egret.Point = new egret.Point();

    public constructor(id:string, time:number) {
        super();
        this._uniqueStageID = id;
        this._total_time = time;
        StageData.registerStage(this);

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
        this.arrayLauncher = new Array<Launcher>();

        this._tick_timer = new egret.Timer(50);
        this._tick_timer.addEventListener(egret.TimerEvent.TIMER, this.onTickUpdate, this);
        this._tick_timer.start();

        this._missile_timer = new egret.Timer(50, 0);
        this._missile_timer.addEventListener(egret.TimerEvent.TIMER, this.onMissileUpdate, this);

        SelfMachine.INSTANCE.currentStage = this;
        this.addChildAtLayer(SelfMachine.INSTANCE, DrawingLayer.SELF_MACHINE);

        this.initEmitters();
    }

    protected abstract initEmitters();

    protected doRender() {
        for (let i = 0; i <= 6; i++) {
            this.containers[i] = new egret.Sprite();
            this.addChildAt(this.containers[i], i);
        }

        let sky = MyUtils.createBitmapByName(TextureNames.GAME_SKY);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChildAtLayer(sky, DrawingLayer.BACKGROUND);
        sky.touchEnabled = true;
        sky.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        sky.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);

        this._titleText = new egret.TextField();
        this._titleText.width = 1080;
        this._titleText.height = 120;
        this._titleText.x = 0;
        this._titleText.y = 0;
        this._titleText.size = 72;
        this._titleText.text = this.title;
        this._titleText.textColor = 0x000000;
        this._titleText.fontFamily = "KaiTi";
        this._titleText.textAlign = egret.HorizontalAlign.CENTER;
        this._titleText.verticalAlign = egret.VerticalAlign.BOTTOM;
        this.addChildAtLayer(this._titleText, DrawingLayer.CONTROL);

        this._timeText = new egret.TextField();
        this._timeText.width = 360;
        this._timeText.height = 120;
        this._timeText.x = 360;
        this._timeText.y = 120;
        this._timeText.size = 48;
        this._timeText.text = "3";
        this._timeText.textColor = 0x000000;
        this._timeText.textAlign = egret.HorizontalAlign.CENTER;
        this._timeText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChildAtLayer(this._timeText, DrawingLayer.CONTROL);

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

    private mouseDown(evt:egret.TouchEvent) {
        this._isTouching = true;
        this._touch_distance.x = evt.stageX - SelfMachine.INSTANCE.getX();
        this._touch_distance.y = evt.stageY - SelfMachine.INSTANCE.getY();
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseMove(evt:egret.TouchEvent) {
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage == undefined) {
            return;
        }
        if (!(SelfMachine.INSTANCE.currentStage.state == StageState.BEFORE_RUNNING || SelfMachine.INSTANCE.currentStage.state == StageState.RUNNING)) {
            return;
        }
        if(this._isTouching) {
            let ax = evt.stageX - this._touch_distance.x; ax = Math.max(ax, SelfMachine.SIZE); ax = Math.min(ax, Main.X - SelfMachine.SIZE);
            let ay = evt.stageY - this._touch_distance.y; ay = Math.max(ay, Main.UPPER_Y + SelfMachine.SIZE); ay = Math.min(ay, Main.BELOW_Y - SelfMachine.SIZE);
            SelfMachine.INSTANCE.setPos(new egret.Point(ax, ay));
        }
    }

    private mouseUp(evt:egret.TouchEvent) {
        this._isTouching = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    protected onTickUpdate(event: egret.TimerEvent) {
        this._current_tick++;
        if (this._current_tick < 0){
            this._timeText.text = Math.floor(- this._current_tick / 20 + 0.95) + "";
        } else if(this._current_tick == 0) {
            this._timeText.text = this._total_time + "";
            this.start();
        } else {
            this._timeText.text = Math.floor(this._total_time - this._current_tick / 20 + 0.95) + "";
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
        LocalData.setStageData(this, STAGE_DATA.FINISHED);
        this.state = StageState.END;
        for (let i of this.arrayLauncher) {
            i.pause();
        }
        this._tick_timer.stop();
        this._missile_timer.stop();
        this.addChildAtLayer(Win.INSTANCE, DrawingLayer.POPUP)
    }

    public start() {
        this.state = StageState.RUNNING;
        for (let i of this.arrayLauncher) {
            i.start();
        }
        this._missile_timer.start();
    }

    public pause() {
        this.state = StageState.PAUSING;
        for (let i of this.arrayLauncher) {
            i.pause();
        }
        this._tick_timer.stop();
        this._missile_timer.stop();
    }

    public resume() {
        this.state = StageState.RUNNING;
        for (let i of this.arrayLauncher) {
            i.resume();
        }
        this._tick_timer.start();
        this._missile_timer.start();
    }

    /**
     * 重开时直接用
     */
    public restart() {
        this.state = StageState.BEFORE_RUNNING;
        for (let i of this.arrayLauncher) {
            i.reset();
        }
        MyUtils.cleanMissile(this);
        this._tick_timer.stop();
        this._current_tick = -60;
        this._timeText.text = "3";
        this._tick_timer.start();
    }

    /**
     * 清除一切，退出关卡前用
     */
    public end() {
        this.state = StageState.END;
        this._tick_timer.stop();
        this._missile_timer.stop();
        MyUtils.cleanMissile(this);
        MyUtils.cleanController(this);
        this.removeChildren();
    }

    public dead() {
        this.state = StageState.END;
        for (let i of this.arrayLauncher) {
            i.pause();
        }
        this._tick_timer.stop();
        this._missile_timer.stop();
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
        Main.getMain().addChild(SelfMachine.INSTANCE.currentChapter);
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