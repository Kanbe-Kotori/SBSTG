class Stage1_1 extends StageBase {
    public static readonly INSTANCE:Stage1_1 = new Stage1_1("stage1_1", 30, "1-1 自机狙练习");

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);

		let em1 = new EmptyEmitter();
		let point1 = new egret.Point(Main.X * 0.2, 300);
		em1.setPos(point1);
        let up1_1 = new RenderUpgrade(100, "smjb_png");
        up1_1.setParentEmitter(em1);
        let up1_2 = new SniperUpgrade();
        up1_2.setParentEmitter(em1);
        up1_2.setMissileVelocity(15);
        up1_2.setFreq(300);
        this.addChild(up1_1);

        let em2 = new EmptyEmitter();
		let point2 = new egret.Point(Main.X * 0.4, 300);
		em2.setPos(point2);
        let up2_1 = new RenderUpgrade(100, "smjb_png");
        up2_1.setParentEmitter(em2);
        let up2_2 = new SniperUpgrade();
        up2_2.setParentEmitter(em2);
        up2_2.setMissileVelocity(15);
        up2_2.setFreq(300);
        this.addChild(up2_1);

		let em3 = new EmptyEmitter();
		let point3 = new egret.Point(Main.X * 0.6, 300);
		em3.setPos(point3);
        let up3_1 = new RenderUpgrade(100, "smjb_png");
        up3_1.setParentEmitter(em3);
        let up3_2 = new SniperUpgrade();
        up3_2.setParentEmitter(em3);
        up3_2.setMissileVelocity(15);
        up3_2.setFreq(300);
        this.addChild(up3_1);

		let em4 = new EmptyEmitter();
		let point4 = new egret.Point(Main.X * 0.8, 300);
		em4.setPos(point4);
        let up4_1 = new RenderUpgrade(100, "smjb_png");
        up4_1.setParentEmitter(em4);
        let up4_2 = new SniperUpgrade();
        up4_2.setParentEmitter(em4);
        up4_2.setMissileVelocity(15);
        up4_2.setFreq(300);
        this.addChild(up4_1);
	}
    
}