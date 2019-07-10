class EmitterRotateUpgrade extends EmitterUpgradeBase {
	/** 转一圈所需秒数 */
	private _tpr:number = 10;

	private _init_ang:number;

	public constructor() {
		super();
	}

	public setParentEmitter(emitter:EmitterBase) {
        this._parent_emitter = emitter;
		if (this._parent_emitter instanceof RegularMissileUpgrade) {
			let r = <RegularMissileUpgrade>(this._parent_emitter);
			this._init_ang = r.getStartAngle();
		}
        return this;
	}

	public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
        if (this._parent_emitter instanceof RegularMissileUpgrade) {
			let r = <RegularMissileUpgrade>(this._parent_emitter);
			r.setStartAngle(r.getStartAngle() + 360 / this._tpr / 20);
		}
    }

	/** 转一圈所需秒数 */
	public setTPR(tpr:number) {
        this._tpr = tpr;
        return this;
    }

	public start() {
		if (this._parent_emitter instanceof RegularMissileUpgrade) {
			let r = <RegularMissileUpgrade>(this._parent_emitter);
			r.setStartAngle(this._init_ang);
		}
		super.start();
	}
}