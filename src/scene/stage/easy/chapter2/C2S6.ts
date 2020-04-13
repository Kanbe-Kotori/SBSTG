class C2S6 extends StageBase {
    public constructor() {
        super("c2s6", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 600); 
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 160, 120).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(12)
            )
            .setNumber(6)
            .setStartAngle(360 / 6 / 2)
            .setStep(360 / 6)
            .setPeriod(Math.PI) //随便来个无理数防止安定
            .setFreq(200)
        )
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(12)
            )
            .setNumber(6)
            .setStartAngle(360 / 6 / 2)
            .setStep(360 / 6)
            .setPeriod(-Math.PI) //随便来个无理数防止安定
            .setFreq(200)
        )

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(20.01)
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
                            missile.setTotalVelocity(missile.getVelocity() + 1)
                        }
                    )
                    .setStartTicks(30)
                )
            )
            .setNumber(36)
            .setStep(360 / 36)
            .setFreq(1000)
            .setPeriod(72)
        )
	}
}