abstract class MissileEventHandler {
	protected readonly _func:Function;

	public constructor(func:Function) {
		this._func = func;
	}

	protected abstract shouldTrigger(missile:MissileBase):boolean;
	
	public trigger(missile:MissileBase) {
		if (this.shouldTrigger(missile))
			this._func(missile);
	}

}