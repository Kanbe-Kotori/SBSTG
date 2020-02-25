class C1S3H extends StageBase {
    public constructor() {
        super("c1s3h", 20);
    }

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new AroundPoint(launcher1, new egret.Point(540, 630), 2000, 30).setTheta(0).setDelay(10000)
        );
        launcher1.addLogic(
            new RandomShooter(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(10)
            )
            .setFreq(250)
            .setStartAngle(0)
            .setEndAngle(360)
            .setNumber(36)
            .setExtraVelocity(20)
        );
		launcher1.addLogic(
            new Sniper(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_GREEN)
                .setSize(256, 256)
                .setBottomLayer(true)
                .setTotalVelocity(16)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.img.rotation -= 9;
                        }
                    )
                    .setTriggerTimes(100)
                )
            )
            .setNumber(1)
            .setFreq(2000)
        );
        launcher1.addLogic(
            new Sniper(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_GREEN)
                .setSize(256, 256)
                .setBottomLayer(true)
                .setTotalVelocity(16)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.img.rotation -= 9;
                        }
                    )
                    .setTriggerTimes(100)
                )
            )
            .setNumber(1)
            .setFreq(2000)
            .setDelay(9000)
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
            .setNumber(9)
            .setStep(40)
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
            .setNumber(9)
            .setStep(40)
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
            .setNumber(9)
            .setStep(40)
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
            .setNumber(10)
            .setStep(36)
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
            .setNumber(10)
            .setStep(36)
            .setDiv(1)
            .setFreq(300)
        );

		let launcher7 = LauncherFactory.texturedLauncher(TextureNames.FLOWER2, 120, 90);
        launcher7.addLogic(
            new AroundLauncher(launcher7, launcher1, 5000, 240).setTheta(5/3 * Math.PI).setClockwise(false)
        )
        launcher7.addLogic(
            new Sniper(
                launcher7,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(24)
            )
            .setNumber(10)
            .setStep(36)
            .setDiv(1)
            .setFreq(300)
        );
    }
    
}