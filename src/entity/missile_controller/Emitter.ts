class Emitter extends ControllerVisible {

    private _ang1 = 0;
    private _ang2 = 1;
    private _num = 5;

    /** 
     * 新建一个标准弹幕发射器
     * @param size 发射器在屏幕上的大小
     * @param texture 发射器材质
    */
    public constructor(point:egret.Point, size:number, texture:string) {
        super();
        this.x = point.x;
        this.y = point.y;
        this._size = size;
        this._texture = texture;
    }

    public setStartAngle(ang:number) {
        this._ang1 = ang;
    }

    public setEndAngle(ang:number) {
        this._ang2 = ang;
    }

    public setNumber(num:number) {
        this._num = num;
    }

    protected doRender() {
        this._img = MyUtils.createBitmapByName(this._texture);
        this._img.width = this._size;
        this._img.height = this._size;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this.addChild(this._img);
    }

    protected onUpdate(event: egret.TimerEvent) {
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING) {
            return;
        }
        for (var theta = Math.PI * this._ang1; theta <= Math.PI * this._ang2; theta += Math.PI * (this._ang2 - this._ang1) / (this._num - 1) ) {
            var point: egret.Point = this.localToGlobal(0,0);
            let missile = new StandardMissile(point, this._missile_velocity * Math.cos(theta), this._missile_velocity * Math.sin(theta), this._missile_size, this._missile_texture);
            this.parent.addChild(missile);
        }
    }

}