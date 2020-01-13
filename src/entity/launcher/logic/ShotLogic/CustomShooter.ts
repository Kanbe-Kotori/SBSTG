class CustomShooter extends ShotLogicBase {

    protected _func:Function;

    public constructor(launcher:Launcher, func:Function) {
        super(launcher, null);
        this._func = func;
    }

    public onUpdate(event: egret.TimerEvent) {
        this._func(this);
    }

		public createMissile() {
        return null;
		}

}