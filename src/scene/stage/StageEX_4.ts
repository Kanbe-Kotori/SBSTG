class StageEX_4 extends StageBase {

    protected initEmitters() {
        let point1 = new egret.Point(540, 720);
        let em1 = new Launcher().setPos(point1);
        let up1_1 = new RenderLogic(TextureNames.FLOWER8, 150, 170).setParentEmitter(em1).renderOnStage(this);
        let up1_2 = new Scatter(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setVelocity(18)
            )
        .setParentEmitter(em1)
        .setFreq(200)
        .setStartAngle(0)
        .setStep(360 / 12)
        .setNumber(12)
		.setDelay(1000);
		let up1_3 = new ScatterRotate().setParentEmitter(up1_2).setTPR(30);
        let up1_4 = new Scatter(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setVelocity(18)
            )
        .setParentEmitter(em1)
        .setFreq(200)
        .setStartAngle(0)
        .setStep(360 / 12)
        .setNumber(12)
		.setDelay(1000);
		let up1_5 = new ScatterRotate().setParentEmitter(up1_4).setTPR(-30);

		let up1_6 = new Scatter(
			new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setVelocity(45)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 1);
                        }
					)
					.setTriggerTimes(30)
				)
            )
		.setParentEmitter(em1)
		.setNumber(32)
		.setStep(360 / 32)
        .setFreq(1000);

		let up1_7 = new Scatter(
			new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setVelocity(15)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 1);
                        }
					)
					.setTriggerTimes(30)
				)
            )
		.setParentEmitter(em1)
		.setDelay(500)
		.setStartAngle(360 / 2 / 32)
		.setNumber(32)
		.setStep(360 / 32)
        .setFreq(1000);
	}
}