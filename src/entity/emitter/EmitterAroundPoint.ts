class EmitterAroundPoint extends EmitterBase {
	protected _centre:egret.Point;
	protected _period:number;
	protected _radius:number;
	protected _theta = 0;
	protected _init_theta = 0;

	protected shouldRanTheta = false;

	public constructor(centre:egret.Point, period:number, radius:number) {
		super();
		this._centre = centre;
		this._period = period;
		this._radius = radius;
		this.setFreq(100);
		this.x = this._centre.x;
		this.y = this._centre.y;
	}

	public stop() {
		super.stop();
		this.x = this._centre.x;
		this.y = this._centre.y;
		if (this.shouldRanTheta)
			this.randomTheta();
		else
			this._theta = this._init_theta;
	}

	public onUpdate() {
		this._theta += 2 * Math.PI * this._freq / this._period;
		if (this._theta >= 2 * Math.PI) {
			this._theta -= 2 * Math.PI;
		}
		this.x = this._centre.x + this._radius * Math.sin(this._theta);
		this.y = this._centre.y - this._radius * Math.cos(this._theta);
	}

	public setTheta(theta:number) {
		this._theta = theta;
		this._init_theta = theta;
	}

	public randomTheta() {
		this.shouldRanTheta = true;
		this._theta = Math.random() * 2 * Math.PI;
	}
}