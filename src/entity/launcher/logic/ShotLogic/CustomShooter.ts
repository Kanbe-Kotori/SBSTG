class CustomShooter extends ShotLogicBase {

    protected _func:Function;

    /** 这里的func是一个传入launcher参数，无返回值的方法，用于发射子弹。其中的launcher用于获取发射位置。 */
    public constructor(launcher:Launcher, func:Function) {
        super(launcher, null);
        this._func = func;
    }

    public onUpdate(event: egret.TimerEvent) {
        this._func(this._launcher);
    }

	public createMissile() {
        return null;
	}

}