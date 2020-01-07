class ScatterRotate extends Scatter {
	/** 转一圈所需秒数 */
	private _tpr:number = 10;

	private _init_angle:number;

	public constructor(launcher:Launcher, conf:MissileConfig) {
        super(launcher, conf);
    }

	public onUpdate(event: egret.TimerEvent) {
		this._ang += 360 / this._tpr / 20;
        super.onUpdate(event);
    }

	/** 转一圈所需秒数 */
	public setTPR(tpr:number) {
        this._tpr = tpr;
        return this;
    }

	public start() {
		this._init_angle = this._ang;
		super.start();
	}

	public reset() {
		super.reset();
		this._ang = this._init_angle;
	}

}