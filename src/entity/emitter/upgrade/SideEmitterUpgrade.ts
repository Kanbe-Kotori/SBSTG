class SideEmitterUpgrade extends EmitterUpgradeBase {

    private _vmin:number;
    private _vmax:number;
    private _ang1 = 0;
    private _ang2 = 1;
    private _num = 1;
    private side:Side = Side.TOP;

    public constructor(vmin:number, vmax:number) {
        super();
        this._vmin = vmin;
        this._vmax = vmax;
        this._missile_texture = TextureNames.MISSILE_WATER;
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

    public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
        let i = 0;
        do {
            var point: egret.Point = new egret.Point(SelfMachine.INSTANCE.currentStage.width * Math.random(), Main.UPPER_Y);
            let theta = (this._ang1 + Math.random() * (this._ang2 - this._ang1)) * Math.PI;
            let v = this._vmin + Math.random() * (this._vmax - this._vmin);
            let missile = new RainMissile(point, v * Math.cos(theta), v * Math.sin(theta), this._missile_size, this._missile_texture);
            SelfMachine.INSTANCE.currentStage.addChild(missile);
        } while(++i < this._num);
    }

}

enum Side {
    TOP, BOTTOM, LEFT, RIGHT
}