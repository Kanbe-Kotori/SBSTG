class TeleportingEmitter extends EmitterUnit {

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
    }

    public onUpdate(event: egret.TimerEvent) {
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING) {
            return;
        }
        this._parent_emitter.x = this._xmin + Math.random() * (this._xmax - this._xmin);
		this._parent_emitter.y = this._ymin + Math.random() * (this._ymax - this._ymin);
    }

}