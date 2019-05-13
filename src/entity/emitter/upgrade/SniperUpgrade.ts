class SniperUpgrade extends EmitterUpgradeBase {

    private _num = 1;

    public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
        let missile = MissileGenerator.createSniperMissile(this.localToGlobal(0,0), this._missile_velocity, this._missile_size, TextureNames.MISSILE_STANDARD);
        SelfMachine.INSTANCE.currentStage.addChild(missile);
    }

    public setNumber(num:number) {
        this._num = num;
    }

}