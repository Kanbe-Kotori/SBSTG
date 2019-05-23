abstract class EmitterUpgradeBase extends EmitterBase {

	protected _parent_emitter:EmitterBase;

    /** 设置上级发射器，也就是想升级的对象。 */
	public setParentEmitter(emitter:EmitterBase) {
        this._parent_emitter = emitter;
	}

    public onUpdate(event: egret.TimerEvent) {
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING || this._parent_emitter == null) {
            return;
        }
		this.x = this._parent_emitter.x;
		this.y = this._parent_emitter.y;
    }
	
}