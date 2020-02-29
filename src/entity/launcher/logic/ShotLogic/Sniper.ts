class Sniper extends ShotLogicBase {

    private _step = 15;
    private _num = 1;
    private _div = 0;

    public setStep(step:number) {
        this._step = step;
        return this;
    }
    
    public setNumber(num:number) {
        this._num = num;
        return this;
    }

    public setDiv(div:number) {
        this._div = div;
        return this;
    }

    public onUpdate(event: egret.TimerEvent) {
        let theta = MissileUtils.getSniperAngle(this._launcher.getPos()) + MyUtils.ang2rad(this._div) * (2 * Math.random() - 1);
        let i = 0;
        theta -= (this._num - 1) / 2 * MyUtils.ang2rad(this._step);
        while(i++ < this._num) {
            let missile = this.createMissile();
            let v = missile.getVelocity();
            missile.setVelocity(v * Math.cos(theta), v * Math.sin(theta));
            missile.addToStage();
            theta += MyUtils.ang2rad(this._step);
        }       
    }

}