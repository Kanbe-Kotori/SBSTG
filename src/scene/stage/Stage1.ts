class Stage1 extends StageBase {
    public static readonly INSTANCE:Stage1 = new Stage1("1", 30);

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        let point1 = new egret.Point(540, 300);
        let em1 = new EmptyEmitter();
        em1.setPos(point1);
        let deco1_1 = new Visible(100, "smjb2_png");
        deco1_1.setParentEmitter(em1);
        let deco1_2 = new RegularEmitter();
        deco1_2.setParentEmitter(em1);
        deco1_2.setMissileTexture(TextureNames.MISSILE_WATER);
        deco1_2.setStartAngle(0.25);
        deco1_2.setEndAngle(0.75);
        deco1_2.setNumber(11);
        this.addChild(deco1_1);

        let point2 = new egret.Point(108, 420);
        let em2 = new EmptyEmitter();
        em2.setPos(point2);
        let deco2_1 = new Visible(100, "smjb_png");
        deco2_1.setParentEmitter(em2);
        let deco2_2 = new Sniper();
        deco2_2.setParentEmitter(em2);
        deco2_2.setMissileVelocity(17);
        deco2_2.setFreq(200);
        deco2_2.setDelay(1000);
        this.addChild(deco2_1);

        let point3 = new egret.Point(324, 360);
        let em3 = new EmptyEmitter();
        em3.setPos(point3);
        let deco3_1 = new Visible(100, "smjb_png");
        deco3_1.setParentEmitter(em3);
        let deco3_2 = new Sniper();
        deco3_2.setParentEmitter(em3);
        deco3_2.setMissileVelocity(17);
        deco3_2.setFreq(200);
        deco3_2.setDelay(1000);
        this.addChild(deco3_1);

        let point4 = new egret.Point(756, 360);
        let em4 = new EmptyEmitter();
        em4.setPos(point4);
        let deco4_1 = new Visible(100, "smjb_png");
        deco4_1.setParentEmitter(em4);
        let deco4_2 = new Sniper();
        deco4_2.setParentEmitter(em4);
        deco4_2.setMissileVelocity(17);
        deco4_2.setFreq(200);
        deco4_2.setDelay(1000);
        this.addChild(deco4_1);

        let point5 = new egret.Point(972, 420);
        let em5 = new EmptyEmitter();
        em5.setPos(point5);
        let deco5_1 = new Visible(100, "smjb_png");
        deco5_1.setParentEmitter(em5);
        let deco5_2 = new Sniper();
        deco5_2.setParentEmitter(em5);
        deco5_2.setMissileVelocity(17);
        deco5_2.setFreq(200);
        deco5_2.setDelay(1000);
        this.addChild(deco5_1);
    }
    
}