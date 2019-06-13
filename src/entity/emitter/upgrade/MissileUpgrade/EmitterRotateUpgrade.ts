class EmitterRotateUpgrade extends EmitterUpgradeBase {
	private _rad:number = 2 / 10 / 20;

	private _init_ang1:number;
	private _init_ang2:number;

	public constructor() {
		super();
		this.timer.delay = 50;
	}

	public setParentEmitter(emitter:EmitterBase) {
        this._parent_emitter = emitter;
		if (this._parent_emitter instanceof RegularMissileUpgrade) {
			let r = <RegularMissileUpgrade>(this._parent_emitter);
			this._init_ang1 = r.getStartAngle();
			this._init_ang2 = r.getEndAngle();
		}
        return this;
	}

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

	public start() {
		if (this._parent_emitter instanceof RegularMissileUpgrade) {
			let r = <RegularMissileUpgrade>(this._parent_emitter);
			r.setStartAngle(this._init_ang1);
			r.setEndAngle(this._init_ang2);
		}
		super.start();
	}
}