class EmitterAroundEmitter extends EmitterBase {

	protected _parent_emitter:EmitterBase;
	protected _period:number;
	protected _radius:number;
	protected _theta = 0;
	protected _init_theta = 0;

	protected clockwise = true;
	protected shouldRanTheta = false;

	public constructor(parent_emitter:EmitterBase, period:number, radius:number) {
		super();
		this._parent_emitter = parent_emitter;
		this._period = period;
		this._radius = radius;
		this.setFreq(50);
		this.setPos(this._parent_emitter.getPos());
	}

	public stop() {
		super.stop();
		if (this.shouldRanTheta) {
			this.randomTheta();
			this.setPos(this._parent_emitter.getPos());
		} else {
			this._theta = this._init_theta;
			this._posX = this._parent_emitter.getX() + this._radius * Math.sin(this._theta);
			this._posY = this._parent_emitter.getY() - this._radius * Math.cos(this._theta);
		}
	}

	public onUpdate() {
		let dtheta = 2 * Math.PI * this._freq / this._period;
		this._theta += this.clockwise? dtheta : -dtheta;
		if (this._theta >= 2 * Math.PI) {
			this._theta -= 2 * Math.PI;
		} else if (this._theta <= 0) {
			this._theta += 2 * Math.PI;
		}
		this._posX = this._parent_emitter.getX() + this._radius * Math.sin(this._theta);
		this._posY = this._parent_emitter.getY() - this._radius * Math.cos(this._theta);
	}

	/**
	 * 设置初始角度。12点钟方向为0，3点钟方向为0.5，6点钟方向为1。
	 */
	public setTheta(theta:number) {
		this.shouldRanTheta = false;
		this._theta = theta * Math.PI;
		this._init_theta = theta * Math.PI;
		this._posX = this._parent_emitter.getX() + this._radius * Math.sin(this._theta);
		this._posY = this._parent_emitter.getY() - this._radius * Math.cos(this._theta);
	}

	public randomTheta() {
		this.shouldRanTheta = true;
		this._theta = Math.random() * 2 * Math.PI;
	}

	public setClockwise(cw:boolean) {
		this.clockwise = cw;
	}
}