class SniperUpgrade extends MissileUpgradeBase {

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
        super.onUpdate(event);
        let point = this.localToGlobal(0,0);
        let theta = MissileUtils.getSniperAngle(point) + MyUtils.ang2rad(this._div) * (2 * Math.random() - 1);
        let v = this._conf.getVelocity();
        let i = 0;
        theta -= (this._num - 1) / 2 * MyUtils.ang2rad(this._step);
        while(i++ < this._num) {
            let missile = this._conf.createMissile().setPos(point).setVelocity(v * Math.cos(theta), v * Math.sin(theta));
            missile.addToStage(SelfMachine.INSTANCE.currentStage);
            theta += MyUtils.ang2rad(this._step);
        }       
    }

}