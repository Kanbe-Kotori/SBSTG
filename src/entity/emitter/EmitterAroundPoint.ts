class EmitterAroundPoint extends EmitterBase {
	protected _centre:egret.Point;
	protected _period:number;
	protected _radius:number;
	protected _theta = 0;
	protected _init_theta = 0;

	protected clockwise = true;
	protected shouldRanTheta = false;

	public constructor(centre:egret.Point, period:number, radius:number) {
		super();
		this._centre = centre;
		this._period = period;
		this._radius = radius;
		this.setFreq(50);
		this._posX = this._centre.x;
		this._posY = this._centre.y;
	}

	public stop() {
		super.stop();
		if (this.shouldRanTheta) {
			this.randomTheta();
			this._posX = this._centre.x;
			this._posY = this._centre.y;
		} else {
			this._theta = this._init_theta;
			this._posX = this._centre.x + this._radius * Math.sin(this._theta);
			this._posY = this._centre.y - this._radius * Math.cos(this._theta);
		}
	}

	public onUpdate() {
		if (!this.shouldUpdate()) {
			return;
		}
		let dtheta = 2 * Math.PI * this._freq / this._period;
		this._theta += this.clockwise? dtheta : -dtheta;
		if (this._theta >= 2 * Math.PI) {
			this._theta -= 2 * Math.PI;
		} else if (this._theta <= 0) {
			this._theta += 2 * Math.PI;
		}
		this._posX = this._centre.x + this._radius * Math.sin(this._theta);
		this._posY = this._centre.y - this._radius * Math.cos(this._theta);
	}

	public setTheta(theta:number) {
		this._theta = theta;
		this._init_theta = theta;
		this._posX = this._centre.x + this._radius * Math.sin(this._theta);
		this._posY = this._centre.y - this._radius * Math.cos(this._theta);
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
}