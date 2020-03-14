class C3S3H extends StageBase {
    public constructor() {
        super("c3s3h", 20);
    }

	protected initEmitters() {
        let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
            new SideShooter(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_BLUE)
                .setTotalVelocity(10)
                .addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
                            let side = missile.getEdge();
                            if (side == Side.LEFT) {
                                missile.setPosX(missile.getX() + Main.X);
                            } else if (side == Side.RIGHT) {
                                missile.setPosX(missile.getX() - Main.X);
                            } else {
                                missile.setDead();
                            }
                        }
                    )
                )
            )
            .setFreq(250)
            .setStartAngle(75)
            .setEndAngle(105)
            .setNumber(6)
            .setExtraVelocity(5)
        );

        let point2 = new egret.Point(540, 600);
        let launcher2 = LauncherFactory.normalLauncher().setInitialPos(point2);
        launcher2.addLogic(
            new Scatter(
                launcher2,
			    new RoundMissile()
                .setSize(128, 128)
                .setTexture(TextureNames.MISSILE_GREEN)
                .setTotalVelocity(20)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 1);
                        }
					)
					.setTriggerTimes(20)
				)
                .addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            for (let i = 0; i < 24; i++) {
                                let theta = Math.random() * 2 * Math.PI;
                                let v = 6 + Math.random() * 6;
                                let missile1 = new RoundMissile()
                                .setTexture(TextureNames.MISSILE_GREEN)
                                .setPos(missile.getPos())
                                .setVelocity(v * Math.cos(theta), v * Math.sin(theta));
                                missile1.addToStage();
                            }
                            missile.setDead();
                        }
					)
                    .setStartTicks(40)
					.setTriggerTimes(1)
				)
            )
            .setNumber(12)
            .setStep(360 / 12)
            .setFreq(4000)
        );

		launcher2.addLogic(
            new Scatter(
                launcher2,
			    new RoundMissile()
                .setSize(128, 128)
                .setTexture(TextureNames.MISSILE_RED)
                .setTotalVelocity(30)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 1.5);
                        }
					)
					.setTriggerTimes(20)
				)
                .addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            for (let i = 0; i < 24; i++) {
                                let theta = Math.random() * 2 * Math.PI;
                                let v = 6 + Math.random() * 6;
                                let missile1 = new RoundMissile()
                                .setTexture(TextureNames.MISSILE_RED)
                                .setPos(missile.getPos())
                                .setVelocity(v * Math.cos(theta), v * Math.sin(theta));
                                missile1.addToStage();
                            }
                            missile.setDead();
                        }
					)
                    .setStartTicks(40)
					.setTriggerTimes(1)
				)
            )
			.setDelay(2000)
            .setNumber(12)
            .setStep(360 / 12)
            .setFreq(4000)
        );
	}
}