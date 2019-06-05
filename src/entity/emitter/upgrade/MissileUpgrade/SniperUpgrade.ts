class SniperUpgrade extends MissileUpgradeBase {

    public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
        let missile = MissileUtils.createSniperMissile(this.localToGlobal(0,0), this._conf);
        SelfMachine.INSTANCE.currentStage.addMissile(missile);
    }

}