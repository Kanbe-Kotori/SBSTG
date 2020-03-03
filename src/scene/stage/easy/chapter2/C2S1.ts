class C2S1 extends StageBase {
	public constructor() {
        super("c2s1", 20);
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
            .setFreq(250)
            .setStartAngle(0)
            .setStep(360 / 12)
            .setNumber(12)
            .setPeriod(-20)
        );
		launcher1.addLogic(
			new Scatter(
                launcher1,
			    new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(15)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 1);
                        }
					)
					.setTriggerTimes(30)
				)
            )
            .setDelay(1000)
            .setStartAngle(0)
            .setNumber(36)
            .setStep(360 / 36)
            .setFreq(1000)
		)
	}
}