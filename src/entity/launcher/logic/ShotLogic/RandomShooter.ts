class RandomShooter extends ShotLogicBase {

    protected _ang1 = 0;
	protected _ang2 = 0;
    protected _num = 1;
    protected _extra_velocity = 0;

    public constructor(launcher:Launcher, prototype:MissileBase) {
        super(launcher, prototype);
    }

    /** 设置起始角度 */
    public setStartAngle(ang:number) {
        this._ang1 = ang;
        return this;
    }

    /** 设置终止角度 */
    public setEndAngle(ang:number) {
        this._ang2 = ang;
        return this;
    }
    
    /** 设置每波数量 */
    public setNumber(num:number) {
        this._num = num;
        return this;
    }

    public setExtraVelocity(num:number) {
        this._extra_velocity = num;
        return this;
    }

    public onUpdate(event: egret.TimerEvent) {
        let i = 0;
        while (i++ < this._num) {
            let missile = this.createMissile();
            let theta = this._ang1 + Math.random() * (this._ang2 - this._ang1)
			theta = MyUtils.ang2rad(theta);
            let v = missile.getVelocity();
            missile.setVelocity(v * Math.cos(theta), v * Math.sin(theta));
            missile.addToStage();
        }
    }

    public createMissile() {
        let missile = this._missile_prototype.clone();
        let v = missile.getVelocity() + Math.random() * this._extra_velocity;
        return missile.setTotalVelocity(v).setPos(this._launcher.getPos());
	}

}