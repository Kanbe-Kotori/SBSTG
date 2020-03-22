class UnusedEX_3 extends StageBase {
	public constructor() {
        super("unused_cexs3", 30);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 160, 120).setInitialPos(point1);
        launcher1.addLogic(
            new CustomShooter(
                launcher1,
                (launcher:Launcher) => {
                    let tick = SelfMachine.INSTANCE.currentStage.getCurrentTick();
                    let correctedTick = tick - tick % (14 * 20);
                    if (tick % (12 * 20) > 6 * 20) {
                        return;
                    }
                    for (let i = 0; i < 6; i++) {
                        let v = 10 + Math.random() * 10;
                        let theta = Math.random() * 2 * Math.PI;
                        let missile = new RoundMissile()
                        .setTexture(TextureNames.MISSILE_BLUE)
                        .setPos(launcher.getPos())
                        .setVelocity(v * Math.cos(theta), v * Math.sin(theta))
                        .addHandler(
                            new EdgeEventHandler(
                                (missile:MissileBase) => {
                                    let side = missile.getEdge();
                                    let point = MyUtils.createReasonablePos(missile.getPos());
                                    if (side == Side.LEFT || side == Side.RIGHT) {
                                        missile.setPos(point);
                                        missile.setVelocityX(-missile.getVelocityX());
                                        missile.setTotalVelocity(0.8 * missile.getVelocity());
                                    } else if (side == Side.TOP || side == Side.BOTTOM) {
                                        missile.setPos(point);
                                        missile.setVelocityY(-missile.getVelocityY());
                                        missile.setTotalVelocity(0.8 * missile.getVelocity());
                                    } else {
                                        missile.setDead();
                                    }
                                }
                            )
                        )
                        .addHandler(
                            new TickEventHandler(
                                (missile:MissileBase) => {
                                    if (SelfMachine.INSTANCE.currentStage.getCurrentTick() == correctedTick + 20 * 6) {
                                        missile.setTotalVelocity(-0.8 * missile.getVelocity());
                                        missile.setTexture(TextureNames.MISSILE_STANDARD);
                                    }
                                }
                            )
                        )
                        .addHandler(
                            new TickEventHandler(
                                (missile:MissileBase) => {
                                    if (SelfMachine.INSTANCE.currentStage.getCurrentTick() >= correctedTick + 20 * 6) {
                                        let dx = 540 - missile.getX();
                                        let dy = 600 - missile.getY();
                                        let d = Math.sqrt(dx * dx + dy * dy);
                                        if (d <= 10 && missile.getLife() > 2) {
                                            missile.setDead();
                                            return;
                                        }
                                    }
                                }
                            )
                        )
                        missile.addToStage();
                    }
                }
            )
            .setFreq(200)
        );
	}
}