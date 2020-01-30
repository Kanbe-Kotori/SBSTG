class Stage1_2 extends StageBase {

    protected initEmitters() {
        let point1 = new egret.Point(540, 300);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 160, 120).setInitialPos(point1);
        launcher1.addLogic(
            new Scatter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
            )
            .setFreq(400)
            .setStartAngle(45)
            .setStep(90 / 10)
            .setNumber(11)
        );

        let point2 = new egret.Point(108, 420);
        let launcher2 = LauncherFactory.texturedLauncher(TextureNames.FLOWER3, 80, 120);
        launcher2.addLogic(
            new AroundPoint(launcher2, point2, 2000, 50).randomTheta()
        )
        launcher2.addLogic(
            new Sniper(
                launcher2,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setTotalVelocity(30)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 0.5);
                        }
                    )
                    .setTriggerTimes(20)
                )
            )
            .setFreq(200)
            .setDelay(1000)
        );

        let point3 = new egret.Point(324, 360);
        let launcher3 = LauncherFactory.texturedLauncher(TextureNames.FLOWER3, 80, 120);
        launcher3.addLogic(
            new AroundPoint(launcher3, point3, 2000, 50).randomTheta()
        )
        launcher3.addLogic(
            new Sniper(
                launcher3,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setTotalVelocity(30)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 0.5);
                        }
                    )
                    .setTriggerTimes(20)
                )
            )
            .setFreq(200)
            .setDelay(1000)
        );

        let point4 = new egret.Point(756, 360);
        let launcher4 = LauncherFactory.texturedLauncher(TextureNames.FLOWER3, 80, 120);
        launcher4.addLogic(
            new AroundPoint(launcher4, point4, 2000, 50).setClockwise(false).randomTheta()
        )
        launcher4.addLogic(
            new Sniper(
                launcher4,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setTotalVelocity(30)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 0.5);
                        }
                    )
                    .setTriggerTimes(20)
                )
            )
            .setFreq(200)
            .setDelay(1000)
        );

        let point5 = new egret.Point(972, 420);
        let launcher5 = LauncherFactory.texturedLauncher(TextureNames.FLOWER3, 80, 120);
        launcher5.addLogic(
            new AroundPoint(launcher5, point5, 2000, 50).setClockwise(false).randomTheta()
        )
        launcher5.addLogic(
            new Sniper(
                launcher5,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setTotalVelocity(30)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 0.5);
                        }
                    )
                    .setTriggerTimes(20)
                )
            )
            .setFreq(200)
            .setDelay(1000)
        );
    }
    
}