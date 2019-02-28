abstract class StageBase extends PageBase {
    public array:Array<MissileBase> = new Array<MissileBase>();

    protected readonly _time:number;

    protected textfield:egret.TextField;
    private btnReturn:Button;

    protected timer:egret.Timer;
    protected missile_timer:egret.Timer;

    public state:StageState = StageState.BEFORE_RUNNING;

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
        //this.missile_timer.start()

        SelfMachine.INSTANCE.currentStage = this;
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName("game_sky_png");
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

        this.btnReturn = new Button(160, 160, new egret.Point(480, 1800), "btn_return");
        this.btnReturn.setAction(this.return);
        this.addChild(this.btnReturn);
    }

    protected onTimerUpdate(event: egret.TimerEvent) {
        let num =  parseInt(this.textfield.text);
        let str = "";
        if (num > 1 || this.state == StageState.RUNNING)
            str = (num - 1) + "";
        else
            str = "Begin!"
        this.textfield.text = str;
        //console.log(this.array.length);
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
        for(let i of this.array) {
            i.onUpdate();
        }
        event.updateAfterEvent();
    }

    protected win() {
        //TODO
        this.end();
        this.textfield.text = "niyingle";
    }

    protected return() {
        this.end();
        this.parent.addChild(PageMain.INSTANCE);
        this.parent.removeChild(this);
    }

    public abstract start();

    public abstract pause();

    public abstract resume();

    public abstract restart();

    public abstract end();

}

enum StageState {
	BEFORE_RUNNING,
	RUNNING,
	PAUSING,
	END
}