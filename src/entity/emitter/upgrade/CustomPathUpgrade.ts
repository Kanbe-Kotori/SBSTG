class CustomPathUpgrade extends EmitterUpgradeBase {

	private _path:Function;

    public constructor(path:Function) {
        super();
		this.setFreq(50);
		this._path = path;
    }

    public onUpdate(event: egret.TimerEvent) {
        if (!this.shouldUpdate()) {
			return;
		}
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING || this._parent_emitter == null) {
            return;
        }
		let time = SelfMachine.INSTANCE.currentStage.getCurrentTick();
		this._parent_emitter.setPos(this._path(time));
    }

    public stop() {
		super.stop();
        this._parent_emitter.setPos(this._path(0));
    }

}