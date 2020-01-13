class SideShooter extends ShotLogicBase {

    private _ang1 = 0;
    private _ang2 = 180;
    private _num = 1;
    private _side:Side = Side.TOP;

    public constructor(launcher:Launcher, prototype:MissileBase) {
        super(launcher, prototype);
    }

    public setStartAngle(ang:number) {
        this._ang1 = ang;
        return this;
    }

    public setEndAngle(ang:number) {
        this._ang2 = ang;
        return this;
    }

    public setNumber(num:number) {
        this._num = num;
        return this;
    }

    public setSide(side:Side) {
        this._side = side;
        return this;
    }

    private getPointFromSide():egret.Point {
        switch(this._side) {
            case Side.TOP:
                return new egret.Point(Main.X * Math.random(), Main.UPPER_Y);
            case Side.BOTTOM:
                return new egret.Point(Main.X * Math.random(), Main.BELOW_Y);
            case Side.LEFT:
                return new egret.Point(0, Main.UPPER_Y + Math.random() * (Main.BELOW_Y - Main.UPPER_Y));
            case Side.RIGHT:
                return new egret.Point(Main.X, Main.UPPER_Y + Math.random() * (Main.BELOW_Y - Main.UPPER_Y));
            default:
                return null;
        }
    }

    public onUpdate(event: egret.TimerEvent) {
        let i = 0;
        while(i++ < this._num) {
            let missile = this.createMissile();
            let theta = (this._ang1 + Math.random() * (this._ang2 - this._ang1));
            theta = MyUtils.ang2rad(theta);
            let v = missile.getVelocity();
            missile.setVelocity(v * Math.cos(theta), v * Math.sin(theta));
            missile.addToStage(SelfMachine.INSTANCE.currentStage);
        }
    }

    public createMissile() {
        let point = this.getPointFromSide();
		return this._missile_prototype.clone().setPos(point);
	}

}
