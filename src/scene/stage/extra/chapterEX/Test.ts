class Test extends StageBase {
    public constructor() {
        super("test", 30);
    }

    protected initEmitters() {
        //测试关卡用
        let point1 = new egret.Point(540, 480); 
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 120, 90).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(16)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            let dx = missile.getX() - 540;
                            let dy = missile.getY() - 480;
                            let theta:number;
                            if (dx == 0) {
                                theta = dy >= 0? Math.PI / 2 : - Math.PI / 2;
                            } else if (dx > 0) {
                                theta = Math.atan(dy / dx);
                            } else {
                                theta = Math.atan(dy / dx) + Math.PI;
                            }
                            theta += Math.PI / 2;
                            missile.addVelocity(2 * Math.cos(theta), 2 * Math.sin(theta))
                        }
                    )
                    //.setTriggerTimes(20)
                )
            )
            .setNumber(8)
            .setStartAngle(360 / 8 / 2)
            .setStep(360 / 8)
            .setPeriod(Math.PI) //随便来个无理数防止安定
            .setFreq(50)
        )
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(16)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            let dx = missile.getX() - 540;
                            let dy = missile.getY() - 480;
                            let theta:number;
                            if (dx == 0) {
                                theta = dy >= 0? Math.PI / 2 : - Math.PI / 2;
                            } else if (dx > 0) {
                                theta = Math.atan(dy / dx);
                            } else {
                                theta = Math.atan(dy / dx) + Math.PI;
                            }
                            theta -= Math.PI / 2;
                            missile.addVelocity(2 * Math.cos(theta), 2 * Math.sin(theta))
                        }
                    )
                    //.setTriggerTimes(20)
                )
            )
            .setNumber(8)
            .setStartAngle(360 / 8 / 2)
            .setStep(360 / 8)
            .setPeriod(-Math.PI) //随便来个无理数防止安定
            .setFreq(50)
        )

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(30.01)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 1);
                        }
                    )
                    .setTriggerTimes(30)
                )
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 2)
                        }
                    )
                    .setStartTicks(30)
                )
            )
            .setNumber(72)
            .setStep(360 / 72)
            .setFreq(200)
            .setPeriod(60)
        )
    }

}