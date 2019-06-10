class TickEventHandler extends MissileEventHandler {

	protected _startTicks:number = 0;

	public setStartTicks(tick:number) {
		this._startTicks = tick;
		return this;
	}

	protected shouldTrigger(missile:MissileBase) {
		let tick = missile.getLife();
		return tick >= this._startTicks && this.triggerTimes != 0;
	}

	public clone() {
		return new TickEventHandler(this._func).setStartTicks(this._startTicks).setTriggerTimes(this.triggerTimes);
	}
	
}