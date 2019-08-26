class StageEX_2 extends StageBase {

    protected initEmitters() {
        let em1 = new EmptyEmitter();
        let up1_1 = new TeleportingUpgrade(
			0, Main.X * 0.5,
			Main.UPPER_Y, Main.UPPER_Y + 180)
		.setParentEmitter(em1)
        .setFreq(800);
		let up1_2 = new RegularMissileUpgrade(
			new MissileConfig(MissileUtils.MISSILE_ROUND)
				.setSize(600, 600)
				.setVelocity(18)
				.setTexture("smjb5_png")
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            let size = Math.max(missile.getWidth() - 6, 240);
                            missile.setSize(size, size);
                            missile._img.width = size;
		                    missile._img.height = size;
		                    missile._img.anchorOffsetX = size / 2;
                            missile._img.anchorOffsetY = size / 2;
                            missile._img.rotation += 9;
                        }
                    ).setTriggerTimes(100)
                )
                .setBottomLayer()
			)
        .setParentEmitter(em1)
        .setFreq(800)
        .setStartAngle(90)
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
        .setStep(360 / 32)
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
				.setSize(600, 600)
				.setVelocity(16)
				.setTexture("smjb5_png")
				.addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            let size = Math.max(missile.getWidth() - 6, 240);
                            missile.setSize(size, size);
                            missile._img.width = size;
		                    missile._img.height = size;
		                    missile._img.anchorOffsetX = size / 2;
                            missile._img.anchorOffsetY = size / 2;
                            missile._img.rotation += 9;
                        }
                    ).setTriggerTimes(100)
                )
                .setBottomLayer()
			)
        .setParentEmitter(em2)
        .setFreq(800)
        .setDelay(400)
        .setStartAngle(90)
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
        .setStep(360 / 32)
        .setNumber(32);
        let up2_4 = new EmitterRotateUpgrade().setParentEmitter(up2_3).setTPR(25.6);
    }
    
}