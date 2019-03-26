class Sniper extends ControllerVisible {

    private _size:number;
    private _velocity:number;
    private _freq:number;
    private _color1:number;

    private shape:egret.Shape;

    /** 
     * 新建一个标准自机狙发射器
     * @param size 发射器在屏幕上的大小
     * @param velocity 弹幕速度
     * @param freq 多少毫秒一发
     * @param color1 自身颜色
     * @param color2 弹幕颜色
    */
    public constructor(point:egret.Point, size:number, velocity:number, freq:number, color1:number) {
        super();
        this.x = point.x;
        this.y = point.y;
        this._size = size;
        this._velocity = velocity;
        this._freq = freq;
        this._color1 = color1;

        this.shape = new egret.Shape();
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.timer = new egret.Timer(this._freq, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
    }

    protected doRender() {
        this.shape.graphics.beginFill(this._color1, 0.5);
        this.shape.graphics.drawCircle(0, 0, this._size);
        this.shape.graphics.endFill();
        this.addChild(this.shape);
    }

    protected onUpdate(event: egret.TimerEvent) {
        let missile = MissileGenerator.createSniperMissile(this.localToGlobal(0,0), this._velocity, 8);
        this.parent.addChild(missile);
    }

    public setDead() {
        this.removeChild(this.shape);
        super.setDead();
    }

}