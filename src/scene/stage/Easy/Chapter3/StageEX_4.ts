class StageEX_4 extends StageBase {

    protected initEmitters() {
        let point1 = new egret.Point(540, 720);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(18)
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(360 / 12)
            .setNumber(12)
            .setDelay(1000)
            .setPeriod(30)
        );

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(18)
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(360 / 12)
            .setNumber(12)
            .setDelay(1000)
            .setPeriod(-30)
        );

		launcher1.addLogic(
            new Scatter(
                launcher1,
			    new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(45)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 1);
                        }
					)
					.setTriggerTimes(30)
				)
            )
            .setNumber(32)
            .setStep(360 / 32)
            .setFreq(1000)
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
            .setDelay(500)
            .setStartAngle(360 / 2 / 32)
            .setNumber(32)
            .setStep(360 / 32)
            .setFreq(1000)
        );
	}
}