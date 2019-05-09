class RegularEmitter extends EmitterDecorator {

    private _ang1 = 0;
    private _ang2 = 1;
    private _num = 5;

    public constructor(point:egret.Point) {
		super();
		this.x = point.x;
        this.y = point.y;
	}

    public setStartAngle(ang:number) {
        this._ang1 = ang;
    }

    public setEndAngle(ang:number) {
        this._ang2 = ang;
    }

    public setNumber(num:number) {
        this._num = num;
    }

    public onUpdate(event: egret.TimerEvent) {
        this._deco.onUpdate(event);
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING) {
            return;
        }
        for (var theta = Math.PI * this._ang1; theta <= Math.PI * this._ang2; theta += Math.PI * (this._ang2 - this._ang1) / (this._num - 1) ) {
            var point: egret.Point = this.localToGlobal(0,0);
            let missile = new StandardMissile(point, this._missile_velocity * Math.cos(theta), this._missile_velocity * Math.sin(theta), this._missile_size, this._missile_texture);
            SelfMachine.INSTANCE.currentStage.addChild(missile);
        }
    }

}