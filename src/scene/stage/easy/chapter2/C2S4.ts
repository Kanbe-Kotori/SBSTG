class C2S4 extends StageBase {
    public constructor() {
        super("c2s4", 25);
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
            .setFreq(250)
            .setStartAngle(0)
            .setStep(360 / 8)
            .setNumber(8)
            .setPeriod(Math.exp(3))
        );

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(10)
            )
            .setFreq(250)
            .setStartAngle(0)
            .setStep(360 / 8)
            .setNumber(8)
            .setPeriod(-Math.exp(3))
        );

		launcher1.addLogic(
            new Scatter(
                launcher1,
			    new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(40)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 0.5);
                        }
					)
					.setTriggerTimes(30)
				)
            )
            .setDelay(2400)
            .setNumber(32)
            .setStep(360 / 32)
            .setFreq(800)
        );

		launcher1.addLogic(
            new Scatter(
                launcher1,
			    new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(5)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 1);
                        }
					)
					.setTriggerTimes(30)
				)
            )
            .setDelay(2600)
            .setStartAngle(360 / 2 / 32)
            .setNumber(32)
            .setStep(360 / 32)
            .setFreq(800)
        );
	}
}