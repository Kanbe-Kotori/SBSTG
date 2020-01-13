class EdgeEventHandler extends MissileEventHandler {
	protected shouldTrigger(missile:MissileBase) {
		return this.triggerTimes != 0;
	}
	
	public clone() {
		return new EdgeEventHandler(this._func).setTriggerTimes(this.triggerTimes);
	}
}