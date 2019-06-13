class RegularMissileUpgrade extends MissileUpgradeBase {

    private _ang1 = 0;
    private _ang2 = 1;
    private _num = 5;

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

    public getStartAngle() {
        return this._ang1;
    }

    public getEndAngle() {
        return this._ang2;
    }

    public setNumber(num:number) {
        this._num = num;
        return this;
    }

    public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
        if (this._ang2 - this._ang1 >= 1.9) {
            for (var theta = this._ang1 * Math.PI; theta < this._ang2 * Math.PI; theta += 2 * Math.PI / this._num) {
                let point = this.localToGlobal(0,0);
                let v = this._conf.getVelocity();
                let missile = this._conf.createMissile()
                                .setPos(point)
                                .setVelocity(v * Math.cos(theta), v * Math.sin(theta));
                SelfMachine.INSTANCE.currentStage.addMissile(missile);
            }
            return;
        }
        for (var theta = Math.PI * this._ang1; theta <= Math.PI * this._ang2; theta += Math.PI * (this._ang2 - this._ang1) / (this._num - 1) ) {
            let point = this.localToGlobal(0,0);
            let v = this._conf.getVelocity();
            let missile = this._conf.createMissile()
                            .setPos(point)
                            .setVelocity(v * Math.cos(theta), v * Math.sin(theta));
            SelfMachine.INSTANCE.currentStage.addMissile(missile);
        }
    }

}