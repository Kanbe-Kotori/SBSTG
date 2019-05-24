class Stage1_1 extends StageBase {
    public static readonly INSTANCE:Stage1_1 = new Stage1_1("1-1", 30);

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);

		let point1 = new egret.Point(Main.X * 0.2, 300);
		let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(100, "smjb_png").setParentEmitter(em1);
        let up1_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD).setVelocity(15)
        )
        .setParentEmitter(em1)
        .setFreq(300);
        this.addChild(up1_1);

		let point2 = new egret.Point(Main.X * 0.4, 300);
		let em2 = new EmptyEmitter().setPos(point2);
        let up2_1 = new RenderUpgrade(100, "smjb_png").setParentEmitter(em2);
        let up2_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD).setVelocity(15)
        )
        .setParentEmitter(em2)
        .setFreq(300);
        this.addChild(up2_1);

		let point3 = new egret.Point(Main.X * 0.6, 300);
		let em3 = new EmptyEmitter().setPos(point3);
        let up3_1 = new RenderUpgrade(100, "smjb_png").setParentEmitter(em3);
        let up3_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD).setVelocity(15)
        )
        .setParentEmitter(em3)
        .setFreq(300);
        this.addChild(up3_1);

		let point4 = new egret.Point(Main.X * 0.8, 300);
		let em4 = new EmptyEmitter().setPos(point4);
        let up4_1 = new RenderUpgrade(100, "smjb_png").setParentEmitter(em4);
        let up4_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD).setVelocity(15)
        )
        .setParentEmitter(em4)
        .setFreq(300);
        this.addChild(up4_1);
	}   
}