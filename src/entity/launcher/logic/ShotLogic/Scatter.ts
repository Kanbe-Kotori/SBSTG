class Scatter extends ShotLogicBase {

    protected _ang = 0;
    protected _step = 45;
    protected _num = 5;

    public constructor(launcher:Launcher, prototype:MissileBase) {
        super(launcher, prototype);
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

    public onUpdate(event: egret.TimerEvent) {
        let theta = this._ang;
        let i = 0;
        while (i++ < this._num) {
            let missile = this.createMissile();
            let theta1 = MyUtils.ang2rad(theta);
            let v = missile.getVelocity();
            missile.setVelocity(v * Math.cos(theta1), v * Math.sin(theta1));
            missile.addToStage(SelfMachine.INSTANCE.currentStage);
            theta += this._step;
        }
    }

}