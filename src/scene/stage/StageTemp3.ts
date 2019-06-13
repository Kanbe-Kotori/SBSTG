class StageTemp3 extends StageBase {
    public static readonly INSTANCE:StageTemp3 = new StageTemp3("test3", 30);

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(TextureNames.FLOWER8, 200, 200).setParentEmitter(em1).renderOnStage(this);

        let up1_2 = new RegularMissileUpgrade(
           new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
				.setVelocity(18)
            )
        .setParentEmitter(em1)
        .setFreq(200)
        .setStartAngle(-30)
        .setStep(240 / 20)
        .setNumber(21);
        let up1_3 = new EmitterRotateUpgrade().setParentEmitter(up1_2).setTPR(4.5);

		let up1_4 = new RegularMissileUpgrade(
           new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_BLUE)
				.setVelocity(25)
                .setBottomLayer()
            )
        .setParentEmitter(em1)
        .setFreq(150)
		.setDelay(4000)
        .setStartAngle(0)
        .setStep(45 / 9)
        .setNumber(10);
		let up1_5 = new EmitterRotateUpgrade().setParentEmitter(up1_4).setTPR(-1.5);

		let up1_6 = new RegularMissileUpgrade(
           new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_RING)
				.setSize(128, 128)
				.setVelocity(16)
				/*.addHandler(
                    new TickEventHandler(
                        function(missile:MissileBase) {
                            missile._img.rotation -= 9;
                        }
                    ).setTriggerTimes(100)
                )*/
            )
        .setParentEmitter(em1)
        .setFreq(400)
		.setDelay(8000)
        .setStartAngle(0)
        .setStep(15)
        .setNumber(2);
		let up1_7 = new EmitterRotateUpgrade().setParentEmitter(up1_6).setTPR(-2.5);

		let up1_8 = new RegularMissileUpgrade(
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
		let up1_9 = new EmitterRotateUpgrade().setParentEmitter(up1_8).setTPR(3);

		let up1_10 = new RegularMissileUpgrade(
           new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL3)
				.setVelocity(30)
            )
        .setParentEmitter(em1)
        .setFreq(150)
		.setDelay(16000)
        .setStartAngle(0)
        .setStep(360 / 8)
        .setNumber(9);
		let up1_11 = new EmitterRotateUpgrade().setParentEmitter(up1_10).setTPR(-4);
	}
	
}