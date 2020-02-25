class StageEX_3 extends StageBase {

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 200, 200).setInitialPos(point1);

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,    
                new RoundMissile()
                    .setTexture(TextureNames.MISSILE_PETAL4)
                    .setTotalVelocity(18)
                )
            .setFreq(200)
            .setStartAngle(-30)
            .setStep(240 / 20)
            .setNumber(21)
            .setPeriod(4.5)
        );

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,    
                new EllipticalMissile()
                    .setTexture(TextureNames.MISSILE_PETAL2)
                    .setSize(30, 36)
                    .setTotalVelocity(25)
                )
            .setFreq(150)
            .setDelay(4000)
            .setStartAngle(0)
            .setStep(45 / 5)
            .setNumber(6)
            .setPeriod(-1.5)
        );

        launcher1.addLogic(
            new ScatterRotate(
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
            .setFreq(400)
            .setDelay(8000)
            .setStartAngle(0)
            .setStep(20)
            .setNumber(2)
            .setPeriod(-2.5)
        );

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,    
                new RoundMissile()
                    .setTexture(TextureNames.MISSILE_RED)
                    .setTotalVelocity(14)
                )
            .setFreq(100)
            .setDelay(12000)
            .setStartAngle(0)
            .setStep(15 / 3)
            .setNumber(4)
            .setPeriod(3)
        );

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,    
                new EllipticalMissile()
                    .setTexture(TextureNames.MISSILE_PETAL1)
                    .setSize(30, 36)
                    .setTotalVelocity(30)
                )
            .setFreq(150)
            .setDelay(16000)
            .setStartAngle(0)
            .setStep(360 / 8)
            .setNumber(9)
            .setPeriod(-4)
        );

	}
	
}