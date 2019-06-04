class TickEventHandler extends MissileEventHandler {

	protected _startTicks:number = 0;

	protected _durationTicks:number = 0;

	public setStartTicks(tick:number) {
		this._startTicks = tick;
		return this;
	}

	public setDurationTicks(tick:number) {
		this._durationTicks = tick;
		return this;
	}

	protected shouldTrigger(missile:MissileBase) {
		let tick = missile.getLife();
		return tick >= this._startTicks && tick < this._startTicks + this._durationTicks;
	}
	
}