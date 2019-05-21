class Stage1_2 extends StageBase {
    public static readonly INSTANCE:Stage1_2 = new Stage1_2("1-2", 30);

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        let point1 = new egret.Point(540, 300);
        let em1 = new EmptyEmitter();
        em1.setPos(point1);
        let up1_1 = new RenderUpgrade(100, "smjb2_png");
        up1_1.setParentEmitter(em1);
        let up1_2 = new RegularEmitterUpgrade();
        up1_2.setParentEmitter(em1);
        up1_2.setMissileTexture(TextureNames.MISSILE_WATER);
        up1_2.setFreq(300);
        up1_2.setStartAngle(0.25);
        up1_2.setEndAngle(0.75);
        up1_2.setNumber(11);
        this.addChild(up1_1);

        let point2 = new egret.Point(108, 420);
        let em2 = new EmitterAroundPoint(point2, 2000, 50);
        em2.randomTheta();
        let up2_1 = new RenderUpgrade(100, "smjb_png");
        up2_1.setParentEmitter(em2);
        up2_1.setFreq(50);
        let up2_2 = new SniperUpgrade();
        up2_2.setParentEmitter(em2);
        up2_2.setMissileVelocity(17);
        up2_2.setFreq(200);
        up2_2.setDelay(1000);
        this.addChild(up2_1);

        let point3 = new egret.Point(324, 360);
        let em3 = new EmitterAroundPoint(point3, 2000, 50);
        em3.randomTheta();
        let up3_1 = new RenderUpgrade(100, "smjb_png");
        up3_1.setParentEmitter(em3);
        up3_1.setFreq(50);
        let up3_2 = new SniperUpgrade();
        up3_2.setParentEmitter(em3);
        up3_2.setMissileVelocity(17);
        up3_2.setFreq(200);
        up3_2.setDelay(1000);
        this.addChild(up3_1);

        let point4 = new egret.Point(756, 360);
        let em4 = new EmitterAroundPoint(point4, 2000, 50);
        em4.setClockwise(false);
        em4.randomTheta();
        let up4_1 = new RenderUpgrade(100, "smjb_png");
        up4_1.setParentEmitter(em4);
        up4_1.setFreq(50);
        let up4_2 = new SniperUpgrade();
        up4_2.setParentEmitter(em4);
        up4_2.setMissileVelocity(17);
        up4_2.setFreq(200);
        up4_2.setDelay(1000);
        this.addChild(up4_1);

        let point5 = new egret.Point(972, 420);
        let em5 = new EmitterAroundPoint(point5, 2000, 50);
        em5.setClockwise(false);
        em5.randomTheta();
        let up5_1 = new RenderUpgrade(100, "smjb_png");
        up5_1.setParentEmitter(em5);
        up5_1.setFreq(50);
        let up5_2 = new SniperUpgrade();
        up5_2.setParentEmitter(em5);
        up5_2.setMissileVelocity(17);
        up5_2.setFreq(200);
        up5_2.setDelay(1000);
        this.addChild(up5_1);
    }
    
}