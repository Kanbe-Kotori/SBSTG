class C2S2H extends StageBase {
	public constructor() {
        super("c2s2h", 20);
    }

	protected initEmitters() {
		let point1 = new egret.Point(540, 540);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(15)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            for (let i = 0; i < 24; i++) {
                                let theta = i / 24 * 2 * Math.PI;
                                let missile1 =  new RoundMissile()
                                .setTexture(TextureNames.MISSILE_PETAL4)
                                .setPos(missile.getPos())
                                .setVelocity(missile.getVelocityX(), missile.getVelocityY())
                                .addVelocity(5 * Math.cos(theta), 5 * Math.sin(theta))
                                missile1.addToStage()
                            }
                            missile.setDead();
                        }
                    )
                    .setStartTicks(1)
                    .setTriggerTimes(1)
                )
            )
            .setFreq(500)
            .setStartAngle(0)
            .setStep(360 / 6)
            .setNumber(6)
            .setPeriod(-5 * Math.E)
        );
		launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
							let theta1 = missile.getDirection() + MyUtils.ang2rad(5);
							let theta2 = missile.getDirection() - MyUtils.ang2rad(5);
                            let missile1 = new EllipticalMissile()
							.setSize(30, 36)
							.setTexture(TextureNames.MISSILE_PETAL2)
                            .setPos(missile.getPos())
                            .setVelocity(15 * Math.cos(theta1), 15 * Math.sin(theta1))
                            missile1.addToStage()
							let missile2 = new EllipticalMissile()
							.setSize(30, 36)
							.setTexture(TextureNames.MISSILE_PETAL2)
                            .setPos(missile.getPos())
                            .setVelocity(15 * Math.cos(theta2), 15 * Math.sin(theta2))
                            missile2.addToStage()
                        }
                    )
                    .setStartTicks(1)
                    .setTriggerTimes(1)
                )
            )
            .setFreq(250)
            .setStartAngle(30)
            .setStep(360 / 6)
            .setNumber(6)
            .setPeriod(-5 * Math.E)
        );
	}
}