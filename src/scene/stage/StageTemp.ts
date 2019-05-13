class StageTemp extends StageBase {
    public static readonly INSTANCE:StageTemp = new StageTemp("temp", 30);

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);

        let em1 = new EmptyEmitter();
        let deco1_1 = new TeleportingUpgrade(
			0, Main.X,
			Main.UPPER_Y, Main.Y * 0.5);
		deco1_1.setParentEmitter(em1);
		let deco1_2 = new RegularEmitter();
        deco1_2.setStartAngle(0);
        deco1_2.setEndAngle(2);
        deco1_2.setNumber(24);
        deco1_2.setParentEmitter(em1);
		this.addChild(deco1_1);

		let rain = new Rain(15, 15);
		rain.setFreq(1000);
        rain.setStartAngle(0.5);
        rain.setEndAngle(0.5);
		rain.setMissileSize(128);
		rain.setMissileTexture(TextureNames.MISSILE_RING);
    }

}