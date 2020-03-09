class C1S5 extends StageBase {
    public constructor() {
        super("c1s5", 20);
    }

    protected initEmitters() {
        let point1 = new egret.Point(540, 540);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(15)
            )
            .setFreq(500)
            .setStartAngle(0)
            .setStep(360 / 12)
            .setNumber(12)
            .setPeriod(-20)
        );

        let launcher2 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(new egret.Point(3000, 3000));
        launcher2.addLogic(
            new CustomPath(
                launcher2,
                (t:number) => {
                    if (t % 80 < 40) {
                        return new egret.Point(240 + Math.random() * 300, Math.random() * 120 + 480);
                    } else {
                        return new egret.Point(840 - Math.random() * 300, Math.random() * 120 + 480);
                    }
			    }
            )
            .setFreq(2000)
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
                        .setVelocity(30 * Math.cos(theta), 30 * Math.sin(theta));
                        missile.addToStage();
                    }            
                    for (let i = 1; i <= 10; i++) {
                        for (let j = 0; j <= 10; j++) {
                            let theta = MissileUtils.getSniperAngle(launcher.getPos()) + MyUtils.ang2rad(2) * i * (1 - 0.2 * j);
                            let missile = new EllipticalMissile()
                            .setSize(30, 36)
                            .setTexture(TextureNames.MISSILE_PETAL2)
                            .setPos(launcher.getPos())
                            .setVelocity(0.01 * Math.cos(theta), 0.01 * Math.sin(theta))
                            .addHandler(
                                new TickEventHandler(
                                    (missile:MissileBase) => {
                                        missile.setTotalVelocity(30);
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
            .setFreq(2000)
        )
	}
	
}