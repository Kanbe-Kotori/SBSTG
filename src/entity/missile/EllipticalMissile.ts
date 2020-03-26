class EllipticalMissile extends MissileBase {

	protected _ang = 0;

    protected shouldSetDead() {
        let r = Math.max(this._missile_width, this._missile_height) / 2;
        if (this.getY() < Main.UPPER_Y - r || this.getY() > Main.BELOW_Y + r || this.getX() < -r || this.getX() > Main.X + r) {
            if (!this.hasSpecialLogic(EdgeEventHandler)) {
                return true;
            } else {
                let event:MissileEdgeEvent = new MissileEdgeEvent(this);
                SelfMachine.INSTANCE.currentStage.dispatchEvent(event);
                return false;
            }
        }
        return false;
    }

    public initIMG() {
        this.img = MyUtils.createBitmapByName(this._texture);
        this.img.width = this._missile_width * 1.15;
        this.img.height = this._missile_height * 1.15;
        this.img.anchorOffsetX = this.img.width/2;
        this.img.anchorOffsetY = this.img.height/2;
        this.img.x = this._posX;
        this.img.y = this._posY;
    }

    public isCollide() {
        if (this.ignoreCollideCheck) {
            return false;
        }
        let x2 = (SelfMachine.INSTANCE.getX() - this.getX()) *  Math.cos(this._ang) + (SelfMachine.INSTANCE.getY() - this.getY()) * Math.sin(this._ang);
        let y2 = (SelfMachine.INSTANCE.getX() - this.getX()) * -Math.sin(this._ang) + (SelfMachine.INSTANCE.getY() - this.getY()) * Math.cos(this._ang);
        let z = 1 / Math.sqrt(4 / Math.pow(this.getWidth(), 2) + 4 * Math.pow(y2, 2) / Math.pow(this.getHeight(), 2) / Math.pow(x2, 2) )
        return SelfMachine.SIZE / Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) + z / x2 >= 1;
        /*
        let dx:number = this.getX() - SelfMachine.INSTANCE.getX();
        let dy:number = this.getY() - SelfMachine.INSTANCE.getY();
        let dist = Math.sqrt(dx * dx + dy * dy);
        dx -= SelfMachine.SIZE * dx / dist;
        dy -= SelfMachine.SIZE * dy / dist;
        let cost = Math.cos(this._ang);
        let sint = Math.sin(this._ang);
        let flag = Math.pow(cost * dx + sint * dy, 2) / Math.pow(this._missile_width / 2, 2) +
                    Math.pow(sint * dx - cost * dy, 2) / Math.pow(this._missile_height / 2, 2);
        if (flag <= 1) {
            return true;
        }
        return false;
        */
    }

	public onUpdate(event: egret.TimerEvent) {
        let ang = Math.PI / 2 - this.getDirection();
        this.img.rotation = - ang / Math.PI * 180;
        this._ang = ang;
		super.onUpdate(event);
	}

    public clone():MissileBase {
        let missile = new EllipticalMissile()
            .setSize(this._missile_width, this._missile_height)
            .setTexture(this._texture)
            .setBottomLayer(this.isBottomLayer)
            .setPos(new egret.Point(this._posX, this._posY))
            .setVelocity(this._vx, this._vy);
        for(let i of this._handler) {
            missile.addHandler(i.clone());
        }
        return missile;
    }

}