class Sniper extends ControllerVisible {

    /** 
     * 新建一个标准自机狙发射器
     * @param point 发射器位置
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
        let missile = MissileGenerator.createSniperMissile(this.localToGlobal(0,0), this._missile_velocity, this._missile_size, TextureNames.MISSILE_STANDARD);
        SelfMachine.INSTANCE.currentStage.addChild(missile);
    }

}