class Sniper extends EmitterDecorator {

    private _num = 1;

    public constructor(point:egret.Point) {
		super();
		this.x = point.x;
        this.y = point.y;
	}

    public onUpdate(event: egret.TimerEvent) {
        this._deco.onUpdate(event);
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING) {
            return;
        }
        let missile = MissileGenerator.createSniperMissile(this.localToGlobal(0,0), this._missile_velocity, this._missile_size, TextureNames.MISSILE_STANDARD);
        SelfMachine.INSTANCE.currentStage.addChild(missile);
    }

    public setNumber(num:number) {
        this._num = num;
    }

}