class TeleportingUpgrade extends LauncherLogicBase {

	private _xmin:number;
    private _xmax:number;
	private _ymin:number;
    private _ymax:number;

    public constructor(launcher:Launcher, xmin:number, xmax:number, ymin:number, ymax:number) {
        super(launcher);
		this._xmin = xmin;
        this._xmax = xmax;
		this._ymin = ymin;
        this._ymax = ymax;
    }

    public onUpdate(event: egret.TimerEvent) {
        let point = new egret.Point(this._xmin + Math.random() * (this._xmax - this._xmin), this._ymin + Math.random() * (this._ymax - this._ymin));
        this._launcher.setPos(point);
    }

}