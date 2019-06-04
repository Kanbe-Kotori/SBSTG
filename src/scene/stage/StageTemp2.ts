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
			new MissileConfig(MissileUtils.MISSILE_STANDARD)
				.setSize(320)
				.setVelocity(18)
				.setTexture("smjb5_png")
                .addHandler(
                    new TickEventHandler(
                        function(missile:MissileBase) {
                            let size = Math.max(missile.getSize() - 3.2, 64);
                            missile.setSize(size);
                            missile._img.width = 2 * size;
		                    missile._img.height = 2 * size;
		                    missile._img.anchorOffsetX = size;
                            missile._img.anchorOffsetY = size;
                            missile._img.rotation += 9;
                        })
                    .setStartTicks(0)
                    .setDurationTicks(80))
			)
        .setParentEmitter(em1)
        .setFreq(800)
        .setStartAngle(0.5)
        .setEndAngle(0.5)
        .setNumber(1);
		let up1_3 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
            .setTexture(TextureNames.MISSILE_RED)
            .setVelocity(15)
            .setSize(8)
        )
        .setParentEmitter(em1)
        .setFreq(400)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(36);

        let em2 = new EmptyEmitter();
        let up2_1 = new TeleportingUpgrade(
			Main.X * 0.5, Main.X,
			Main.UPPER_Y, Main.UPPER_Y + 180)
		.setParentEmitter(em2)
        .setFreq(800)
        .setDelay(400);
		let up2_2 = new RegularMissileUpgrade(
			new MissileConfig(MissileUtils.MISSILE_STANDARD)
				.setSize(320)
				.setVelocity(16)
				.setTexture("smjb5_png")
				.addHandler(
                    new TickEventHandler(
                        function(missile:MissileBase) {
                            let size = Math.max(missile.getSize() - 3.2, 64);
                            missile.setSize(size);
                            missile._img.width = 2 * size;
		                    missile._img.height = 2 * size;
		                    missile._img.anchorOffsetX = size;
                            missile._img.anchorOffsetY = size;
                            missile._img.rotation -= 9;
                        })
                    .setStartTicks(0)
                    .setDurationTicks(80))
			)
        .setParentEmitter(em2)
        .setFreq(800)
        .setDelay(400)
        .setStartAngle(0.5)
        .setEndAngle(0.5)
        .setNumber(1);
		let up2_3 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
            .setTexture(TextureNames.MISSILE_RED)
            .setVelocity(15)
            .setSize(8)
        )
        .setParentEmitter(em2)
        .setFreq(400)
        .setDelay(400)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(36);
    }
    
}