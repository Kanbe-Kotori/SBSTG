class SniperUpgrade extends MissileUpgradeBase {

    private _num = 1;

    public onUpdate(event: egret.TimerEvent) {
        super.onUpdate(event);
        let point = this.localToGlobal(0,0);
        let x = SelfMachine.INSTANCE.getX();
        let y = SelfMachine.INSTANCE.getY();
        let dx = x - point.x;
        let dy = y - point.y;
        let v = this._conf.getVelocity();
        let vx = v * dx / Math.sqrt(dx * dx + dy * dy)
        let vy = v * dy / Math.sqrt(dx * dx + dy * dy)
        let missile = this._conf.createMissile().setPos(point).setVelocity(vx, vy);
        SelfMachine.INSTANCE.currentStage.addChild(missile);
    }

    public setNumber(num:number) {
        this._num = num;
    }

}