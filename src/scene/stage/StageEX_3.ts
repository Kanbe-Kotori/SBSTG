class StageEX_3 extends StageBase {

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let em1 = new Launcher().setPos(point1);
        let up1_1 = new RenderLogic(TextureNames.FLOWER8, 200, 200).setParentEmitter(em1).renderOnStage(this);

        let up1_2 = new Scatter(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_PETAL4)
				.setVelocity(18)
            )
        .setParentEmitter(em1)
        .setFreq(200)
        .setStartAngle(-30)
        .setStep(240 / 20)
        .setNumber(21);
        let up1_3 = new ScatterRotate().setParentEmitter(up1_2).setTPR(4.5);

		let up1_4 = new Scatter(
           new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setSize(30, 36)
				.setVelocity(25)
            )
        .setParentEmitter(em1)
        .setFreq(150)
		.setDelay(4000)
        .setStartAngle(0)
        .setStep(45 / 5)
        .setNumber(6);
		let up1_5 = new ScatterRotate().setParentEmitter(up1_4).setTPR(-1.5);

		let up1_6 = new Scatter(
           new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_GREEN)
				.setSize(256, 256)
                .setBottomLayer()
				.setVelocity(16)
				.addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile._img.rotation -= 9;
                        }
                    ).setTriggerTimes(100)
                )
            )
        .setParentEmitter(em1)
        .setFreq(400)
		.setDelay(8000)
        .setStartAngle(0)
        .setStep(20)
        .setNumber(2);
		let up1_7 = new ScatterRotate().setParentEmitter(up1_6).setTPR(-2.5);

		let up1_8 = new Scatter(
           new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_RED)
				.setVelocity(14)
            )
        .setParentEmitter(em1)
        .setFreq(100)
		.setDelay(12000)
        .setStartAngle(0)
        .setStep(15 / 3)
        .setNumber(4);
		let up1_9 = new ScatterRotate().setParentEmitter(up1_8).setTPR(3);

		let up1_10 = new Scatter(
           new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
				.setVelocity(30)
            )
        .setParentEmitter(em1)
        .setFreq(150)
		.setDelay(16000)
        .setStartAngle(0)
        .setStep(360 / 8)
        .setNumber(9);
		let up1_11 = new ScatterRotate().setParentEmitter(up1_10).setTPR(-4);
	}
	
}