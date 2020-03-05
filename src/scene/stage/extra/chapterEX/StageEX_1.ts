class StageEX_1 extends StageBase {

    protected initEmitters() {
        //测试关卡用
        let point1 = new egret.Point(540, 900);
        let launcher1= LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 160, 120).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(15, 120)
                .setTexture(TextureNames.MISSILE_LEAF)
                .setTotalVelocity(30)
            )
        .setFreq(200)
        .setStartAngle(0)
        .setStep(360/8)
        .setNumber(8)
        .setPeriod(-20)
        );
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 30)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(58)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 5);
                        }
                    )
                    .setTriggerTimes(10)
                )
            )
            .setStartAngle(0)
            .setNumber(10)
            .setStep(360/10)
            .setFreq(300)
            .setPeriod(10)
        )
    }

}