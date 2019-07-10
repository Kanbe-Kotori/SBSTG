class CustomMissileUpgrade extends EmitterUpgradeBase {

	protected _func:Function;

	public constructor(func:Function) {
		super();
		this._func = func;
    }

	public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
		if (!this.shouldUpdate()) {
			return;
		}
		this._func(this);
    }

}