class Sniper extends EmitterUnit {

    private _num = 1;

    public onUpdate(event: egret.TimerEvent) {
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING) {
            return;
        }
        this.x = this._parent_emitter.x;
        this.y = this._parent_emitter.y;
        let missile = MissileGenerator.createSniperMissile(this.localToGlobal(0,0), this._missile_velocity, this._missile_size, TextureNames.MISSILE_STANDARD);
        SelfMachine.INSTANCE.currentStage.addChild(missile);
    }

    public setNumber(num:number) {
        this._num = num;
    }

}