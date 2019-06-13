class StageTemp2 extends StageBase {
    public static readonly INSTANCE:StageTemp2 = new StageTemp2("test2", 30);

    protected initEmitters() {
        let em1 = new EmptyEmitter();
        let up1_1 = new TeleportingUpgrade(
			0, Main.X * 0.5,
			Main.UPPER_Y, Main.UPPER_Y + 180)
		.setParentEmitter(em1)
        .setFreq(800);
		let up1_2 = new RegularMissileUpgrade(
			new MissileConfig(MissileUtils.MISSILE_ROUND)
				.setSize(300, 300)
				.setVelocity(18)
				.setTexture("smjb5_png")
                .addHandler(
                    new TickEventHandler(
                        function(missile:MissileBase) {
                            let size = Math.max(missile.getWidth() - 3, 60);
                            missile.setSize(size, size);
                            missile._img.width = 2 * size;
		                    missile._img.height = 2 * size;
		                    missile._img.anchorOffsetX = size;
                            missile._img.anchorOffsetY = size;
                            missile._img.rotation += 9;
                        }
                    ).setTriggerTimes(100)
                )
                .setBottomLayer()
			)
        .setParentEmitter(em1)
        .setFreq(800)
        .setStartAngle(0.5)
        .setEndAngle(0.5)
        .setNumber(1);
		let up1_3 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
            .setTexture(TextureNames.MISSILE_RED)
            .setVelocity(15)
        )
        .setParentEmitter(em1)
        .setFreq(400)
        .setDelay(400)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(32);

        let em2 = new EmptyEmitter();
        let up2_1 = new TeleportingUpgrade(
			Main.X * 0.5, Main.X,
			Main.UPPER_Y, Main.UPPER_Y + 180)
		.setParentEmitter(em2)
        .setFreq(800)
        .setDelay(400);
		let up2_2 = new RegularMissileUpgrade(
			new MissileConfig(MissileUtils.MISSILE_ROUND)
				.setSize(300, 300)
				.setVelocity(16)
				.setTexture("smjb5_png")
				.addHandler(
                    new TickEventHandler(
                        function(missile:MissileBase) {
                            let size = Math.max(missile.getWidth() - 3, 60);
                            missile.setSize(size, size);
                            missile._img.width = 2 * size;
		                    missile._img.height = 2 * size;
		                    missile._img.anchorOffsetX = size;
                            missile._img.anchorOffsetY = size;
                            missile._img.rotation -= 9;
                        }
                    ).setTriggerTimes(100)
                )
                .setBottomLayer()
			)
        .setParentEmitter(em2)
        .setFreq(800)
        .setDelay(400)
        .setStartAngle(0.5)
        .setEndAngle(0.5)
        .setNumber(1);
		let up2_3 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
            .setTexture(TextureNames.MISSILE_RED)
            .setVelocity(15)
        )
        .setParentEmitter(em2)
        .setFreq(400)
        .setDelay(800)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(32);
        let up2_4 = new EmitterRotateUpgrade().setParentEmitter(up2_3).setRad(2 / 25.6 / 20);
    }
    
}