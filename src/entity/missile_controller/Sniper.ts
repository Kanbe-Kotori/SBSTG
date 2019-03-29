class Sniper extends ControllerVisible {

    private _size:number;
    private _velocity:number;
    private _freq:number;
    private _texture:string;
    private _missile_texture:string;

    /** 
     * 新建一个标准自机狙发射器
     * @param point 发射器位置
     * @param size 发射器在屏幕上的大小
     * @param velocity 弹幕速度
     * @param freq 多少毫秒一发
     * @param color1 自身颜色
    */
    public constructor(point:egret.Point, size:number, velocity:number, freq:number, texture:string, missile_texture:string) {
        super();
        this.x = point.x;
        this.y = point.y;
        this._size = size;
        this._velocity = velocity;
        this._freq = freq;
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
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING) {
            return;
        }
        let missile = MissileGenerator.createSniperMissile(this.localToGlobal(0,0), this._velocity, 8, TextureNames.MISSILE_STANDARD);
        this.parent.addChild(missile);
    }

}