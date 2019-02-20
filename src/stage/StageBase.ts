abstract class StageBase extends PageBase {
    public array:Array<MissileBase> = new Array<MissileBase>();

    protected readonly _time:number;

    protected textfield:egret.TextField;
    protected timer:egret.Timer;

    protected isBegin = false;

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
        this.addChild(SelfMachine.INSTANCE);
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
        this.textfield.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild( this.textfield );
    }

    protected onTimerUpdate(event: egret.TimerEvent) {
        let num =  parseInt(this.textfield.text);
        let str = "";
        if (num > 1 || this.isBegin)
            str = (num - 1) + "";
        else
            str = "Begin!"
        this.textfield.text = str;
        //console.log(this.array.length);
    }

    protected onTimerEnd(event: egret.TimerEvent) {
        if (!this.isBegin) {
            this.textfield.text = "";
            this.start();
            this.isBegin = true;
            this.textfield.text = this._time + "";
            this.timer.reset();
            this.timer.repeatCount = this._time;
            this.timer.start();
        } else {
            this.win();
        }
        
    }

    protected win() {
        //TODO
        this.end();
        this.textfield.text = "niyingle";
    }

    public abstract start();

    public abstract pause();

    public abstract restart();

    public abstract end();

}