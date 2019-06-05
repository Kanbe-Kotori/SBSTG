class EmitterRotateUpgrade extends EmitterUpgradeBase {
	private _rad:number = 2 / 10 / 20;

	public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
        if (this._parent_emitter instanceof RegularMissileUpgrade) {
			let r = <RegularMissileUpgrade>(this._parent_emitter);
			r.setStartAngle(r.getStartAngle() + this._rad);
			r.setEndAngle(r.getEndAngle() + this._rad);
		}
    }

	public setRad(rad:number) {
        this._rad = rad;
        return this;
    }
}