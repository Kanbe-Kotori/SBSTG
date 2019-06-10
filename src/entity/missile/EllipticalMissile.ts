class EllipticalMissile extends MissileBase {

	protected _ang = 0;

    protected shouldSetDead() {
        if (this.getY() < Main.UPPER_Y || this.getY() > Main.BELOW_Y || this.getX() < 0 || this.getX() > Main.X) {
            if (!this.hasSpecialLogic(EdgeEventHandler)) {
                return true;
            } else {
                let event:MissileEdgeEvent = new MissileEdgeEvent();
                this.dispatchEvent(event);
                return false;
            }
        }
        return false;
    }

    protected doRender() {
        this._img = MyUtils.createBitmapByName(this._texture);
        this._img.width = 2 * this._missile_width;
        this._img.height = 2 * this._missile_height;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this.addChild(this._img);
    }

    public isCollide() {
        let dx:number = this.getX() - SelfMachine.INSTANCE.getX();
        let dy:number = this.getY() - SelfMachine.INSTANCE.getY();
        let theta = Math.atan(dy / dx);
        dx -= SelfMachine.SIZE * Math.cos(theta);
        dy -= SelfMachine.SIZE * Math.sin(theta);
        let cost = Math.cos(this._ang);
        let sint = Math.sin(this._ang);
        let flag = Math.pow(cost * dx + sint * dy, 2) / Math.pow(this._missile_width / 2, 2) +
                    Math.pow(sint * dx - cost * dy, 2) / Math.pow(this._missile_height / 2, 2);
        if (flag <= 1) {
            return true;
        }
        return false;
    }

	public onUpdate(event: egret.TimerEvent) {
		let ang = Math.atan(this._vx / this._vy);
		this._img.rotation = - ang / Math.PI * 180;
		this._ang = ang;
		super.onUpdate(event);
	}

}