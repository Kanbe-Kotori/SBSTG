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
        .setStartAngle(0)
        .setEndAngle(1)
        .setNumber(16);
		let up1_3 = new EmitterRotateUpgrade().setParentEmitter(up1_2).setRad(2 / 90);
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
        .setEndAngle(0.25)
        .setNumber(12);
		let up1_5 = new EmitterRotateUpgrade().setParentEmitter(up1_4).setRad(-2 / 30);
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
        .setEndAngle(0.1)
        .setNumber(2);
		let up1_7 = new EmitterRotateUpgrade().setParentEmitter(up1_6).setRad(-2 / 60);
		let up1_8 = new RegularMissileUpgrade(
           new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_RED)
				.setVelocity(14)
            )
        .setParentEmitter(em1)
        .setFreq(100)
		.setDelay(12000)
        .setStartAngle(0)
        .setEndAngle(0.1)
        .setNumber(6);
		let up1_9 = new EmitterRotateUpgrade().setParentEmitter(up1_8).setRad(2 / 80);
		let up1_10 = new RegularMissileUpgrade(
           new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL3)
				.setVelocity(28)
            )
        .setParentEmitter(em1)
        .setFreq(150)
		.setDelay(16000)
        .setStartAngle(0)
        .setEndAngle(0.1)
        .setNumber(4);
		let up1_11 = new EmitterRotateUpgrade().setParentEmitter(up1_10).setRad(-2 / 40);
	}
	
}