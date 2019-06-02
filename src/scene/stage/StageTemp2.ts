class StageTemp2 extends StageBase {
    public static readonly INSTANCE:StageTemp2 = new StageTemp2("test2", 30);

    protected initEmitters() {
        let em1 = new EmptyEmitter();
        let up1_1 = new TeleportingUpgrade(
			0, Main.X * 0.5,
			Main.UPPER_Y, Main.UPPER_Y + 180)
		.setParentEmitter(em1)
        .setFreq(1000);
		let up1_2 = new RegularMissileUpgrade(
			new MissileConfig(MissileUtils.MISSILE_VARIABLE_SIZED)
				.setSize(320)
				.setVelocity(18)
				.setTexture(TextureNames.MISSILE_BIG_RED)
				.setExtraPara(0, 32)
				.setExtraPara(1, 72)
			)
        .setParentEmitter(em1)
        .setFreq(1000)
        .setStartAngle(0.5)
        .setEndAngle(0.5)
        .setNumber(1);
		let up1_3 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
            .setTexture(TextureNames.MISSILE_WATER)
            .setVelocity(25)
        )
        .setParentEmitter(em1)
        .setFreq(1000)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(36);

        let em2 = new EmptyEmitter();
        let up2_1 = new TeleportingUpgrade(
			Main.X * 0.5, Main.X,
			Main.UPPER_Y, Main.UPPER_Y + 180)
		.setParentEmitter(em2)
        .setFreq(1000)
        .setDelay(500);
		let up2_2 = new RegularMissileUpgrade(
			new MissileConfig(MissileUtils.MISSILE_VARIABLE_SIZED)
				.setSize(320)
				.setVelocity(16)
				.setTexture(TextureNames.MISSILE_BIG_RED)
				.setExtraPara(0, 32)
				.setExtraPara(1, 72)
			)
        .setParentEmitter(em2)
        .setFreq(1000)
        .setDelay(500)
        .setStartAngle(0.5)
        .setEndAngle(0.5)
        .setNumber(1);
		let up2_3 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
            .setTexture(TextureNames.MISSILE_WATER)
            .setVelocity(25)
        )
        .setParentEmitter(em2)
        .setFreq(1000)
        .setDelay(500)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(36);
    }
    
}