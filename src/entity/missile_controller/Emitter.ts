class Emitter extends ControllerVisible {

    private _size:number;
    private _velocity:number;
    private _freq:number;
    private _ang1:number;
    private _ang2:number;
    private _num:number;
    private _color1:number;

    private shape:egret.Shape;

    /** 
     * 新建一个标准弹幕发射器
     * @param size 发射器在屏幕上的大小
     * @param velocity 弹幕速度
     * @param freq 多少毫秒一发
     * @param ang1 起始角度
     * @param ang2 终止角度
     * @param num 总共发射几条弹幕
     * @param color1 自身颜色
    */
    public constructor(point:egret.Point, size:number, velocity:number, freq:number, ang1:number, ang2:number, num:number, color1:number) {
        super();
        this.x = point.x;
        this.y = point.y;
        this._size = size;
        this._velocity = velocity;
        this._freq = freq;
        this._ang1 = ang1;
        this._ang2 = ang2;
        this._num = num;
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
        //console.info("tick");
        for (var theta = Math.PI * this._ang1; theta <= Math.PI * this._ang2; theta += Math.PI * (this._ang2 - this._ang1) / (this._num - 1) ) {
            var point: egret.Point = this.localToGlobal(0,0);
            let missile = new StandardMissile(point, this._velocity * Math.cos(theta), this._velocity * Math.sin(theta), 8, Names.MISSILE_NAME_1);
            this.parent.addChild(missile);
        }
    }

    public setDead() {
        this.removeChild(this.shape);
        super.setDead();
    }

}