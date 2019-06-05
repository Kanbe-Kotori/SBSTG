class EdgeEventHandler extends MissileEventHandler {
	protected shouldTrigger(missile:MissileBase) {
		return this.triggerTimes != 0;
	}
}