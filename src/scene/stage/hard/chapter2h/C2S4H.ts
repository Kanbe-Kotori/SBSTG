class C2S4H extends StageBase {
    public constructor() {
        super("c2s4h", 25);
    }

    protected initEmitters() {
        let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(10)
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(360 / 12)
            .setNumber(12)
            .setPeriod(Math.exp(3))
        );

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(10)
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(360 / 12)
            .setNumber(12)
            .setPeriod(-Math.exp(3))
        );

		launcher1.addLogic(
            new Scatter(
                launcher1,
			    new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(50)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 1);
                        }
					)
					.setTriggerTimes(30)
				)
            )
            .setNumber(36)
            .setStep(360 / 36)
            .setFreq(600)
            .setDelay(3000)
        );

		launcher1.addLogic(
            new Scatter(
                launcher1,
			    new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(10)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 2);
                        }
					)
					.setTriggerTimes(30)
				)
            )
            .setDelay(3300)
            .setStartAngle(360 / 2 / 36)
            .setNumber(36)
            .setStep(360 / 36)
            .setFreq(600)
        );

        launcher1.addLogic(
			new ScatterRotate(
                launcher1,
			    new RoundMissile()
                .setTexture(TextureNames.MISSILE_GREEN)
                .setSize(128, 128)
                .setTotalVelocity(10)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 2);
                        }
					)
					.setTriggerTimes(20)
				)
                .addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 2);
                        }
					)
                    .setStartTicks(20)
					.setTriggerTimes(20)
				)
            )
            .setDelay(10000)
            .setStartAngle(0)
            .setNumber(24)
            .setStep(360 / 24)
            .setFreq(4000)
            .setPeriod(192)
		)
	}
}