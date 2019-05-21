class StageTemp extends StageBase {
    public static readonly INSTANCE:StageTemp = new StageTemp("test", 30);

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);

        let em1 = new EmptyEmitter();
        let up1_1 = new TeleportingUpgrade(
			0, Main.X,
			Main.UPPER_Y, Main.Y * 0.5);
		up1_1.setParentEmitter(em1);
		let up1_2 = new RegularEmitterUpgrade();
        up1_2.setParentEmitter(em1);
        up1_2.setFreq(300);
        up1_2.setStartAngle(0);
        up1_2.setEndAngle(2);
        up1_2.setNumber(24);
		this.addChild(up1_1);
		let up1_3 = new SideEmitterUpgrade(15, 15);
        up1_3.setParentEmitter(em1);
		up1_3.setFreq(1000);
        up1_3.setStartAngle(0.5);
        up1_3.setEndAngle(0.5);
		up1_3.setMissileSize(128);
		up1_3.setMissileTexture(TextureNames.MISSILE_RING);
    }

}