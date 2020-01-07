class AroundPoint extends LauncherLogicBase {
	protected _centre:egret.Point;
	protected _period:number;
	protected _radius:number;
	protected _theta = 0;
	protected _init_theta = 0;

	protected clockwise = true;
	protected shouldRanTheta = false;

	public constructor(launcher:Launcher, centre:egret.Point, period:number, radius:number) {
		super(launcher);
		this._centre = centre;
		this._period = period;
		this._radius = radius;
		this._launcher.setInitialPos(centre);
	}

	public onUpdate() {
		let dtheta = 2 * Math.PI * this._freq / this._period;
		this._theta += this.clockwise? dtheta : -dtheta;
		if (this._theta >= 2 * Math.PI) {
			this._theta -= 2 * Math.PI;
		} else if (this._theta <= 0) {
			this._theta += 2 * Math.PI;
		}
		let x = this._centre.x + this._radius * Math.sin(this._theta);
		let y = this._centre.y - this._radius * Math.cos(this._theta);
		this._launcher.setPos(new egret.Point(x, y));
	}

	public setTheta(theta:number) {
		this._theta = theta;
		this._init_theta = theta;
		let x = this._centre.x + this._radius * Math.sin(this._theta);
		let y = this._centre.y - this._radius * Math.cos(this._theta);
		this._launcher.setPos(new egret.Point(x, y));
	}

	public randomTheta() {
		this.shouldRanTheta = true;
		this._theta = Math.random() * 2 * Math.PI;
		return this;
	}

	public setClockwise(cw:boolean) {
		this.clockwise = cw;
		return this;
	}

	public reset() {
		super.reset();
		//TODO
	}
}