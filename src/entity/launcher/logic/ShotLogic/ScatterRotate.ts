class ScatterRotate extends Scatter {
	/** 转一圈所需秒数 */
	private _period:number = 10;

	private _init_angle:number;

	public onUpdate(event: egret.TimerEvent) {
		this._ang += 360 / this._period / 20;
        super.onUpdate(event);
    }

	public setPeriod(period:number) {
        this._period = period;
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