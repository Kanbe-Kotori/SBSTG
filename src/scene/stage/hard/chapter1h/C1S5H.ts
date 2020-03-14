class C1S5H extends StageBase {
    public constructor() {
        super("c1s5h", 20);
    }

    protected initEmitters() {
        let point1 = new egret.Point(540, 540);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(20)
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(360 / 12)
            .setNumber(12)
            .setPeriod(-10)
        );
        launcher1.addLogic(
            new RandomShooter(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_GREEN)
                .setTotalVelocity(10)
            )
            .setFreq(900)
            .setStartAngle(0)
            .setEndAngle(360)
            .setNumber(48)
            .setExtraVelocity(20)
        );

        let launcher2 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(new egret.Point(270, 540));
        launcher2.addLogic(
            new CustomPath(
                launcher2,
                (t:number) => {
                    if (t % 72 < 36) {
                        return new egret.Point(240 + Math.random() * 300, Math.random() * 120 + 480);
                    } else {
                        return new egret.Point(840 - Math.random() * 300, Math.random() * 120 + 480);
                    }
			    }
            )
            .setFreq(1800)
            .resetPos(false)
        );
        launcher2.addLogic(
            new CustomShooter(
                launcher2,
                (launcher:Launcher) => {
                    {
                        let theta = MissileUtils.getSniperAngle(launcher.getPos());
                        let missile = new EllipticalMissile()
                        .setSize(30, 36)
                        .setTexture(TextureNames.MISSILE_PETAL2)
                        .setPos(launcher.getPos())
                        .setVelocity(45 * Math.cos(theta), 45 * Math.sin(theta));
                        missile.addToStage();
                    }            
                    for (let i = 1; i <= 10; i++) {
                        for (let j = 0; j <= 10; j++) {
                            let theta = MissileUtils.getSniperAngle(launcher.getPos()) + MyUtils.ang2rad(3) * i * (1 - 0.2 * j);
                            let missile = new EllipticalMissile()
                            .setSize(30, 36)
                            .setTexture(TextureNames.MISSILE_PETAL2)
                            .setPos(launcher.getPos())
                            .setVelocity(0.01 * Math.cos(theta), 0.01 * Math.sin(theta))
                            .addHandler(
                                new TickEventHandler(
                                    (missile:MissileBase) => {
                                        missile.setTotalVelocity(45);
                                    }
                                )
                                .setStartTicks(2 * i)
                                .setTriggerTimes(1)
                            )
                            missile.addToStage();
                        }
                    }
                }
            )
            .setFreq(1800)
        )

        let launcher3 = LauncherFactory.texturedLauncher(TextureNames.FLOWER2, 120, 90).setInitialPos(new egret.Point(810, 540));
        launcher3.addLogic(
            new CustomPath(
                launcher3,
                (t:number) => {
                    if (t % 72 >= 36) {
                        return new egret.Point(240 + Math.random() * 300, Math.random() * 120 + 480);
                    } else {
                        return new egret.Point(840 - Math.random() * 300, Math.random() * 120 + 480);
                    }
			    }
            )
            .setFreq(1800)
            .resetPos(false)
        );
        launcher3.addLogic(
            new CustomShooter(
                launcher3,
                (launcher:Launcher) => {
                    {
                        let theta = MissileUtils.getSniperAngle(launcher.getPos());
                        let missile = new EllipticalMissile()
                        .setSize(30, 36)
                        .setTexture(TextureNames.MISSILE_PETAL1)
                        .setPos(launcher.getPos())
                        .setVelocity(45 * Math.cos(theta), 45 * Math.sin(theta));
                        missile.addToStage();
                    }            
                    for (let i = 1; i <= 10; i++) {
                        for (let j = 0; j <= 10; j++) {
                            let theta = MissileUtils.getSniperAngle(launcher.getPos()) + MyUtils.ang2rad(3) * i * (1 - 0.2 * j);
                            let missile = new EllipticalMissile()
                            .setSize(30, 36)
                            .setTexture(TextureNames.MISSILE_PETAL1)
                            .setPos(launcher.getPos())
                            .setVelocity(0.01 * Math.cos(theta), 0.01 * Math.sin(theta))
                            .addHandler(
                                new TickEventHandler(
                                    (missile:MissileBase) => {
                                        missile.setTotalVelocity(45);
                                    }
                                )
                                .setStartTicks(2 * i)
                                .setTriggerTimes(1)
                            )
                            missile.addToStage();
                        }
                    }
                }
            )
            .setFreq(1800)
            .setDelay(9000)
        )
	}
	
}