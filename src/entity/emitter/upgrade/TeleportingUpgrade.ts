class TeleportingUpgrade extends EmitterUpgradeBase {

	private _xmin:number;
    private _xmax:number;
	private _ymin:number;
    private _ymax:number;
    private _num = 24;

    public constructor(xmin:number, xmax:number, ymin:number, ymax:number) {
        super();
		this._xmin = xmin;
        this._xmax = xmax;
		this._ymin = ymin;
        this._ymax = ymax;
    }

    public setNumber(num:number) {
        this._num = num;
        return this;
    }

    public onUpdate(event: egret.TimerEvent) {
        if (!this.shouldUpdate()) {
			return;
		}
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING || this._parent_emitter == null) {
            return;
        }
        let point = new egret.Point(this._xmin + Math.random() * (this._xmax - this._xmin), this._ymin + Math.random() * (this._ymax - this._ymin));
        this._parent_emitter.setPos(point);
        this.setPos(point);
    }

}