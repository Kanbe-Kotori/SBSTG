class Emitter extends ControllerVisible {

    private _size:number;
    private _velocity:number;
    private _freq:number;
    private _ang1:number;
    private _ang2:number;
    private _num:number;
    private _texture:string;
    private _missile_texture:string;

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
    public constructor(point:egret.Point, size:number, velocity:number, freq:number, ang1:number, ang2:number, num:number, texture:string, missile_texture:string) {
        super();
        this.x = point.x;
        this.y = point.y;
        this._size = size;
        this._velocity = velocity;
        this._freq = freq;
        this._ang1 = ang1;
        this._ang2 = ang2;
        this._num = num;
        this._texture = texture;
        this._missile_texture = missile_texture;
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.timer = new egret.Timer(this._freq, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
    }

    protected doRender() {
        this._img = MyUtils.createBitmapByName(this._texture);
        this._img.width = 2 * this._size;
        this._img.height = 2 * this._size;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this.addChild(this._img);
    }

    protected onUpdate(event: egret.TimerEvent) {
        //console.info("tick");
        for (var theta = Math.PI * this._ang1; theta <= Math.PI * this._ang2; theta += Math.PI * (this._ang2 - this._ang1) / (this._num - 1) ) {
            var point: egret.Point = this.localToGlobal(0,0);
            let missile = new StandardMissile(point, this._velocity * Math.cos(theta), this._velocity * Math.sin(theta), 8, this._missile_texture);
            this.parent.addChild(missile);
        }
    }

}