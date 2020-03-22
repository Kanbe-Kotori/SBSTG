class C2S5H extends StageBase {
    public constructor() {
        super("c2s5h", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 160, 120).setInitialPos(point1);
        launcher1.addLogic(
            new Scatter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
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
            .setFreq(800)
            .setStartAngle(75)
            .setStep(270 / 135)
            .setNumber(136)
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
            .setFreq(800)
            .setDelay(400)
            .setStartAngle(105)
            .setStep(-270 / 135)
            .setNumber(136)
        );

        `launcher1.addLogic(
            new CustomShooter(
                launcher1,
                (launcher:Launcher) => {
                    let missile = new RoundMissile()
                    .setTexture(TextureNames.MISSILE_PETAL4)
                    .set
                }
            )
        )`
	}
}