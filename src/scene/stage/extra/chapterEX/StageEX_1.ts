class StageEX_1 extends StageBase {

    protected initEmitters() {
        //测试关卡用
        let point1 = new egret.Point(Main.X * 0.2, 300);
		let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(point1);
        launcher1.addLogic(
            new Sniper(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(18)
            )
            .setNumber(7)
            .setStep(15)
            .setDiv(1)
            .setFreq(300)
        );
        
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,    
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL3)
                .setTotalVelocity(18)
            )
            .setNumber(2)
            .setStep(360 / 2)
            .setFreq(100)
            .setStartAngle(90)
            .setPeriod(1)
        );
    }

}