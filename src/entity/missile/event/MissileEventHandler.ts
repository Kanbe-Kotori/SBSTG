abstract class MissileEventHandler {
	protected triggerTimes = -99;

	protected readonly _func:Function;

	public constructor(func:Function) {
		this._func = func;
	}

	protected abstract shouldTrigger(missile:MissileBase):boolean;

	public abstract clone():MissileEventHandler;
	
	public trigger(missile:MissileBase) {
		if (this.shouldTrigger(missile)) {
			this._func(missile);
			if (this.triggerTimes > 0) {
				this.triggerTimes--;
			}
		}
	}

	public setTriggerTimes(times:number) {
		this.triggerTimes = times;
		return this;
	}

}