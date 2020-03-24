class C2S5H extends StageBase {
    public constructor() {
        super("c2s5h", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 160, 120).setInitialPos(point1);
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
            .setFreq(1000)
            .setStartAngle(75)
            .setStep(330 / 165)
            .setNumber(166)
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
                            missile.setTotalVelocity(missile.getVelocity() - 1.2);
                        }
                    )
                    .setTriggerTimes(25)
                )
            )
            .setFreq(1000)
            .setStartAngle(75)
            .setStep(-30 / 15)
            .setNumber(16)
        );

        launcher1.addLogic(
            new Scatter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
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
            .setFreq(1000)
            .setDelay(500)
            .setStartAngle(105)
            .setStep(-330 / 165)
            .setNumber(166)
        );  
        launcher1.addLogic(
            new Scatter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(45)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 1.2);
                        }
                    )
                    .setTriggerTimes(25)
                )
            )
            .setFreq(1000)
            .setDelay(500)
            .setStartAngle(105)
            .setStep(30 / 15)
            .setNumber(16)
        );
	}
}