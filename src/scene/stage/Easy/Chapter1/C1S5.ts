class C1S5 extends StageBase {
    public constructor() {
        super("c1s5", 20);
    }

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new CustomPath(
                launcher1,
                (t:number) => {return new egret.Point(540 + 300 * Math.sin(t * Math.PI / 80), 600);}
            )
        )
        
        launcher1.addLogic(
            new Scatter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL3)
                .setTotalVelocity(20)
            )
            .setFreq(400)
            .setStartAngle(45)
            .setStep(90 / 5)
            .setNumber(6)
        );

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(15)
                .addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
                            if (missile.getEdge() == Side.TOP) {
                                let point = MyUtils.createReasonablePos(missile.getPos());
                                let theta = MissileUtils.getSniperAngle(point) + MyUtils.ang2rad(2) * (2 * Math.random() - 1);
                                let missile1 =
                                new EllipticalMissile()
                                .setSize(30, 36)
                                .setTexture(Math.random() > 0.5? TextureNames.MISSILE_PETAL1 : TextureNames.MISSILE_PETAL2)
                                .setPos(point)
                                .setVelocity(10 * Math.cos(theta), 10 * Math.sin(theta))
                                .addHandler(
                                    new TickEventHandler(
                                        (missile:MissileBase) => {
                                            missile.setTotalVelocity(missile.getVelocity() + 0.5);
                                        }
                                    )
                                );
                                missile1.addToStage(SelfMachine.INSTANCE.currentStage);
                            }
                            missile.setDead();
                        }
                    )
                    .setTriggerTimes(1)
                )
            )
            .setFreq(300)
            .setStartAngle(0)
            .setStep(360 / 24)
            .setNumber(24)
            .setPeriod(14.4)
        );
	}
	
}