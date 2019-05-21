class StageTemp2 extends StageBase {
    public static readonly INSTANCE:StageTemp2 = new StageTemp2("test2", 30);

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        let point1 = new egret.Point(540, 600);
        let em1 = new EmptyEmitter();
        em1.setPos(point1);
        let up1_1 = new RenderUpgrade(200, "smjb2_png");
        up1_1.setParentEmitter(em1);
        let up1_2 = new RegularEmitterUpgrade();
        up1_2.setParentEmitter(em1);
        up1_2.setMissileTexture(TextureNames.MISSILE_WATER);
        up1_2.setFreq(300);
        up1_2.setStartAngle(0);
        up1_2.setEndAngle(2);
        up1_2.setNumber(36);
        this.addChild(up1_1);

        let em2 = new EmitterAroundEmitter(em1, 3000, 240);
        em2.setTheta(0);
        let up2_1 = new RenderUpgrade(100, "smjb_png");
        up2_1.setParentEmitter(em2);
        up2_1.setFreq(50);
        let up2_2 = new SniperUpgrade();
        up2_2.setParentEmitter(em2);
        up2_2.setMissileVelocity(13);
        up2_2.setFreq(200);
        this.addChild(up2_1);

        let em3 = new EmitterAroundEmitter(em1, 3000, 240);
        em3.setTheta(2/3);
        let up3_1 = new RenderUpgrade(100, "smjb_png");
        up3_1.setParentEmitter(em3);
        up3_1.setFreq(50);
        let up3_2 = new SniperUpgrade();
        up3_2.setParentEmitter(em3);
        up3_2.setMissileVelocity(13);
        up3_2.setFreq(200);
        this.addChild(up3_1);

        let em4 = new EmitterAroundEmitter(em1, 3000, 240);
        em4.setTheta(4/3);
        let up4_1 = new RenderUpgrade(100, "smjb_png");
        up4_1.setParentEmitter(em4);
        up4_1.setFreq(50);
        let up4_2 = new SniperUpgrade();
        up4_2.setParentEmitter(em4);
        up4_2.setMissileVelocity(13);
        up4_2.setFreq(200);
        this.addChild(up4_1);

		let em5 = new EmitterAroundEmitter(em1, 3000, 240);
        em5.setTheta(1/3);
		em5.setClockwise(false);
        let up5_1 = new RenderUpgrade(100, "smjb4_png");
        up5_1.setParentEmitter(em5);
        up5_1.setFreq(50);
        let up5_2 = new SniperUpgrade();
        up5_2.setParentEmitter(em5);
        up5_2.setMissileVelocity(13);
        up5_2.setFreq(200);
        this.addChild(up5_1);

		let em6 = new EmitterAroundEmitter(em1, 3000, 240);
        em6.setTheta(1);
		em6.setClockwise(false);
        let up6_1 = new RenderUpgrade(100, "smjb4_png");
        up6_1.setParentEmitter(em6);
        up6_1.setFreq(50);
        let up6_2 = new SniperUpgrade();
        up6_2.setParentEmitter(em6);
        up6_2.setMissileVelocity(13);
        up6_2.setFreq(200);
        this.addChild(up6_1);

		let em7 = new EmitterAroundEmitter(em1, 3000, 240);
        em7.setTheta(5/3);
		em7.setClockwise(false);
        let up7_1 = new RenderUpgrade(100, "smjb4_png");
        up7_1.setParentEmitter(em7);
        up7_1.setFreq(50);
        let up7_2 = new SniperUpgrade();
        up7_2.setParentEmitter(em7);
        up7_2.setMissileVelocity(13);
        up7_2.setFreq(200);
        this.addChild(up7_1);
    }
    
}