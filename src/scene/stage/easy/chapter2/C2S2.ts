class C2S2 extends StageBase {
	public constructor() {
        super("c2s2", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 540);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(12)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            for (let i = 0; i < 12; i++) {
                                let theta = i / 12 * 2 * Math.PI;
                                let missile1 =  new RoundMissile()
                                .setTexture(TextureNames.MISSILE_PETAL4)
                                .setPos(missile.getPos())
                                .setVelocity(missile.getVelocityX(), missile.getVelocityY())
                                .addVelocity(4 * Math.cos(theta), 4 * Math.sin(theta))
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
            .setStep(360 / 3)
            .setNumber(3)
            .setPeriod(-5 * Math.E) //整个无理数，避免安定点
        );
		launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(15)
            )
            .setFreq(250)
            .setStartAngle(60)
            .setStep(360 / 3)
            .setNumber(3)
            .setPeriod(-5 * Math.E)
        );
	}
}