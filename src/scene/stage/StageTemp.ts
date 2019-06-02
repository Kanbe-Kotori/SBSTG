class StageTemp extends StageBase {
    public static readonly INSTANCE:StageTemp = new StageTemp("test", 30);

    protected initEmitters() {
        let em1 = new EmptyEmitter();
        let up1_1 = new TeleportingUpgrade(
			0, Main.X,
			Main.UPPER_Y, Main.Y * 0.5)
		.setParentEmitter(em1)
        .setFreq(200);
		let up1_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
            )
        .setParentEmitter(em1)
        .setFreq(200)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(36);
		let up1_3 = new SideEmitterUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(15)
                .setSize(128)
                .setTexture(TextureNames.MISSILE_RING)
            )
        .setParentEmitter(em1)
		.setFreq(800)
        .setStartAngle(0.5)
        .setEndAngle(0.5);
    }

}