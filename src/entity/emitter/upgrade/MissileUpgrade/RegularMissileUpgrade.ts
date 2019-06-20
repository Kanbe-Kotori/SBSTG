class RegularMissileUpgrade extends MissileUpgradeBase {

    private _ang = 0;
    private _step = 45;
    private _num = 5;

    public constructor(conf:MissileConfig) {
        super(conf);
    }

    public setStartAngle(ang:number) {
        this._ang = ang;
        return this;
    }

    public setStep(step:number) {
        this._step = step;
        return this;
    }
    
    public setNumber(num:number) {
        this._num = num;
        return this;
    }

    public getStartAngle() {
        return this._ang;
    }

    public getStep() {
        return this._step;
    }

    public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
        let theta = this._ang;
        let i = 0;
        while (i++ < this._num) {
            let theta1 = MyUtils.ang2rad(theta);
            let point = this.localToGlobal(0,0);
            let v = this._conf.getVelocity();
            let missile = this._conf.createMissile().setPos(point).setVelocity(v * Math.cos(theta1), v * Math.sin(theta1));
            missile.addToStage(SelfMachine.INSTANCE.currentStage);
            theta += this._step;
        }
    }

}