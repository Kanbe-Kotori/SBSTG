class C1S3 extends StageBase {
    public constructor() {
        super("c1s3", 25);
    }

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(16)
            )
            .setFreq(300)
            .setStartAngle(0)
            .setStep(360 / 32)
            .setNumber(32)
            .setPeriod(19.2)
        );

        let launcher2 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90);
        launcher2.addLogic(
            new AroundLauncher(launcher2, launcher1, 5000, 240).setTheta(0)
        )
        launcher2.addLogic(
            new Sniper(
                launcher2,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(24)
            )
            .setNumber(5)
            .setStep(72)
            .setDiv(1)
            .setFreq(300)
        );

        let launcher3 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90);
        launcher3.addLogic(
            new AroundLauncher(launcher3, launcher1, 5000, 240).setTheta(2/3 * Math.PI)
        )
        launcher3.addLogic(
            new Sniper(
                launcher3,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(24)
            )
            .setNumber(5)
            .setStep(72)
            .setDiv(1)
            .setFreq(300)
        );

        let launcher4 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90);
        launcher4.addLogic(
            new AroundLauncher(launcher4, launcher1, 5000, 240).setTheta(4/3 * Math.PI)
        )
        launcher4.addLogic(
            new Sniper(
                launcher4,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(24)
            )
            .setNumber(5)
            .setStep(72)
            .setDiv(1)
            .setFreq(300)
        );

		let launcher5 = LauncherFactory.texturedLauncher(TextureNames.FLOWER2, 120, 90);
        launcher5.addLogic(
            new AroundLauncher(launcher5, launcher1, 5000, 240).setTheta(1/3 * Math.PI).setClockwise(false)
        )
        launcher5.addLogic(
            new Sniper(
                launcher5,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(24)
            )
            .setNumber(5)
            .setStep(72)
            .setDiv(1)
            .setFreq(300)
        );

		let launcher6 = LauncherFactory.texturedLauncher(TextureNames.FLOWER2, 120, 90);
        launcher6.addLogic(
            new AroundLauncher(launcher6, launcher1, 5000, 240).setTheta(3/3 * Math.PI).setClockwise(false)
        )
        launcher6.addLogic(
            new Sniper(
                launcher6,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(24)
            )
            .setNumber(5)
            .setStep(72)
            .setDiv(1)
            .setFreq(300)
        );

		let launcher7 = LauncherFactory.texturedLauncher(TextureNames.FLOWER2, 120, 90);
        launcher7.addLogic(
            new AroundLauncher(launcher7, launcher1, 5000, 240).setTheta(3/3 * Math.PI).setClockwise(false)
        )
        launcher7.addLogic(
            new Sniper(
                launcher7,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(24)
            )
            .setNumber(5)
            .setStep(72)
            .setDiv(1)
            .setFreq(300)
        );
    }
    
}