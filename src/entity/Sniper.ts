class Sniper extends egret.Sprite {

    private _size:number;
    private _velocity:number;
    private _freq:number;
    private _color1:number;
    private _color2:number;

    private shape:egret.Shape;
    private timer:egret.Timer;

    /** 
     * 新建一个标准自机狙发射器
     * @param size 发射器在屏幕上的大小
     * @param velocity 弹幕速度
     * @param freq 多少毫秒一发
     * @param color1 自身颜色
     * @param color2 弹幕颜色
    */
    public constructor(point:egret.Point, size:number, velocity:number, freq:number, color1:number, color2:number) {
        super();
        this.x = point.x;
        this.y = point.y;
        this._size = size;
        this._velocity = velocity;
        this._freq = freq;
        this._color1 = color1;
        this._color2 = color2;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event) {
        this.shape = new egret.Shape();
        this.timer = new egret.Timer(this._freq, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
        //this.timer.start();
        this.doRender();
    }

    private doRender() {
        this.shape.graphics.beginFill(this._color1, 0.5);
        this.shape.graphics.drawCircle(0, 0, this._size);
        this.shape.graphics.endFill();
        this.addChild(this.shape);
    }

    private onUpdate(event: egret.TimerEvent) {
        //console.info("tick");
        var targetPoint: egret.Point = this.localToGlobal(0,0);
        let playerPoint: egret.Point = this.globalToLocal(SelfMachine.INSTANCE.getX(),SelfMachine.INSTANCE.getY());
        let dx = playerPoint.x / Math.sqrt(playerPoint.x * playerPoint.x + playerPoint.y * playerPoint.y);
        let dy = playerPoint.y / Math.sqrt(playerPoint.x * playerPoint.x + playerPoint.y * playerPoint.y);
        let missile = new StandardMissile(targetPoint, this._velocity * dx, this._velocity * dy, 8, this._color2);
        this.stage.addChild(missile);
    }

    public start() {
        this.timer.start();
    }

    public stop() {
        this.timer.stop();
    }

    public startWithDelay(delay:number) {
        let timer1 = new egret.Timer(delay, 1);
        timer1.addEventListener(egret.TimerEvent.TIMER, this.start, this);
        timer1.start();
    }

}