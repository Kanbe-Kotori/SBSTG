class SideEmitterUpgrade extends MissileUpgradeBase {

    private _ang1 = 0;
    private _ang2 = 1;
    private _num = 1;
    private side:Side = Side.TOP;

    public constructor(conf:MissileConfig) {
        super(conf);
    }

    public setStartAngle(ang:number) {
        this._ang1 = ang;
        return this;
    }

    public setEndAngle(ang:number) {
        this._ang2 = ang;
        return this;
    }

    public setNumber(num:number) {
        this._num = num;
        return this;
    }

    public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
        let i = 0;
        do {
            var point: egret.Point = new egret.Point(SelfMachine.INSTANCE.currentStage.width * Math.random(), Main.UPPER_Y);
            let theta = (this._ang1 + Math.random() * (this._ang2 - this._ang1)) * Math.PI;
            let v = this._conf.getVelocity();
            let missile = this._conf.createMissile()
                            .setPos(point)
                            .setVelocity(v * Math.cos(theta), v * Math.sin(theta));
            SelfMachine.INSTANCE.currentStage.addMissile(missile);
        } while(++i < this._num);
    }

}
