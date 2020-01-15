class AroundLauncher extends LauncherLogicBase {

	protected _parent_launcher:Launcher;
	protected _period:number;
	protected _radius:number;
	protected _theta = 0;
	protected _init_theta = 0;

	protected clockwise = true;
	protected shouldRanTheta = false;

	public constructor(launcher:Launcher, parent_launcher:Launcher, period:number, radius:number) {
		super(launcher);
		this._parent_launcher = parent_launcher;
		this._period = period;
		this._radius = radius;
		this._launcher.setPos(this.calcPos());
	}

	public onUpdate() {
		let dtheta = 2 * Math.PI * this._freq / this._period;
		this._theta += this.clockwise? dtheta : -dtheta;
		if (this._theta >= 2 * Math.PI) {
			this._theta -= 2 * Math.PI;
		} else if (this._theta <= 0) {
			this._theta += 2 * Math.PI;
		}
		this._launcher.setPos(this.calcPos());
	}

	/** 设置初始角度 */
	public setTheta(theta:number) {
		this._theta = theta;
		this._init_theta = theta;
		this._launcher.setPos(this.calcPos());
		return this;
	}

	/** 设置初始角度为随机 */
	public randomTheta() {
		this.shouldRanTheta = true;
		this._theta = Math.random() * 2 * Math.PI;
		this._launcher.setPos(this.calcPos());
		return this;
	}

	/** 设置旋转方向 */
	public setClockwise(cw:boolean) {
		this.clockwise = cw;
		return this;
	}

	public reset() {
		super.reset();
		if (this.shouldRanTheta) {
			this._theta = Math.random() * 2 * Math.PI;
		} else {
			this._theta = this._init_theta;
		}
		this._launcher.setPos(this.calcPos());
	}

	private calcPos() {
		let x = this._parent_launcher.getX() + this._radius * Math.sin(this._theta);
		let y = this._parent_launcher.getY() - this._radius * Math.cos(this._theta);
		return new egret.Point(x, y);
	}
}