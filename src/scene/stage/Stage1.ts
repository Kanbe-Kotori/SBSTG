class Stage1 extends StageBase {
    public static readonly INSTANCE:Stage1 = new Stage1("1", 30);

    private emitter1:EmitterBase;
    private emitter2:EmitterBase;
    private emitter3:EmitterBase;
    private emitter4:EmitterBase;
    private emitter5:EmitterBase;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        let point1 = new egret.Point(540, 300);
        let ev1 = new EmitterVisible(point1, 100, "smjb2_png");
        let deco1_1 = new RegularEmitter(point1);
        deco1_1.setMissileTexture(TextureNames.MISSILE_WATER);
        deco1_1.setStartAngle(0.25);
        deco1_1.setEndAngle(0.75);
        deco1_1.setNumber(11);
        deco1_1.decorate(ev1);
        this.emitter1 = deco1_1;
        this.addChild(ev1);

        let point2 = new egret.Point(108, 420);
        let ev2 = new EmitterVisible(point2, 100, "smjb_png");
        let deco2_1 = new Sniper(point2);
        deco2_1.setMissileVelocity(17);
        deco2_1.setFreq(200);
        deco2_1.decorate(ev2);
        this.emitter2 = deco2_1;
        this.addChild(ev2);

        let point3 = new egret.Point(324, 360);
        let ev3 = new EmitterVisible(point3, 100, "smjb_png");
        let deco3_1 = new Sniper(point3);
        deco3_1.setMissileVelocity(17);
        deco3_1.setFreq(200);
        deco3_1.decorate(ev3);
        this.emitter3 = deco3_1;
        this.addChild(ev3);

        let point4 = new egret.Point(756, 360);
        let ev4 = new EmitterVisible(point4, 100, "smjb_png");
        let deco4_1 = new Sniper(point4);
        deco4_1.setMissileVelocity(17);
        deco4_1.setFreq(200);
        deco4_1.decorate(ev4);
        this.emitter4 = deco4_1;
        this.addChild(ev4);

        let point5 = new egret.Point(972, 420);
        let ev5 = new EmitterVisible(point5, 100, "smjb_png");
        let deco5_1 = new Sniper(point5);
        deco5_1.setMissileVelocity(17);
        deco5_1.setFreq(200);
        deco5_1.decorate(ev5);
        this.emitter5 = deco5_1;
        this.addChild(ev5);
    }

    public start() {
        this.state = StageState.RUNNING;
        this.emitter1.start();
        this.emitter2.startWithDelay(1000);
        this.emitter3.startWithDelay(1000);
        this.emitter4.startWithDelay(1000);
        this.emitter5.startWithDelay(1000);
        this.missile_timer.start();
    }
    
}