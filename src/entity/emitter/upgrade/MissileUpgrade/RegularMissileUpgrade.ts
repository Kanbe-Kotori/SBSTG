class RegularMissileUpgrade extends MissileUpgradeBase {

    private _ang1 = 0;
    private _ang2 = 1;
    private _num = 5;

    public constructor(conf:MissileConfig) {
        super(conf);
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
        for (var theta = Math.PI * this._ang1; theta <= Math.PI * this._ang2; theta += Math.PI * (this._ang2 - this._ang1) / (this._num - 1) ) {
            let point = this.localToGlobal(0,0);
            let v = this._conf.getVelocity();
            let missile = this._conf.createMissile()
                            .setPos(point)
                            .setVelocity(v * Math.cos(theta), v * Math.sin(theta));
            SelfMachine.INSTANCE.currentStage.addChild(missile);
        }
    }

}