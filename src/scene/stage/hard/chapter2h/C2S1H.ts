class C2S1H extends StageBase {
	public constructor() {
        super("c2s1h", 20);
    }

	protected initEmitters() {
	let point1 = new egret.Point(540, 540);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 160, 120).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(360 / 24)
            .setNumber(24)
            .setPeriod(-72)
        );
		launcher1.addLogic(
			new Scatter(
                launcher1,
			    new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(20)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 1);
                        }
					)
					.setTriggerTimes(20)
				)
            )
            .setDelay(1200)
            .setStartAngle(0)
            .setNumber(48)
            .setStep(360 / 48)
            .setFreq(600)
		)
		launcher1.addLogic(
			new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL3)
                .setTotalVelocity(20)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 2);
                        }
					)
					.setTriggerTimes(20)
				)
            )
			.setDelay(10000)
            .setFreq(100)
            .setStartAngle(45)
            .setStep(360 / 4)
            .setNumber(4)
            .setPeriod(6)
		)
	}
}