class Stage1 extends StageBase {
    public static readonly INSTANCE:Stage1 = new Stage1("1", 30);

    private emitter1:Emitter;
    private sniper2:Sniper;
    private sniper3:Sniper;
    private sniper4:Sniper;
    private sniper5:Sniper;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        let point1 = new egret.Point(Main.X * 0.5, 300);
        this.emitter1 = new Emitter(point1, 100, "smjb2_png");
        this.emitter1.setStartAngle(0.25);
        this.emitter1.setEndAngle(0.75);
        this.emitter1.setNumber(11);
        this.emitter1.setMissileTexture(TextureNames.MISSILE_WATER);
        this.addChild(this.emitter1);

        let point2 = new egret.Point(Main.X*0.1, 420);
        this.sniper2 = new Sniper(point2, 100, "smjb_png");
        this.sniper2.setMissileVelocity(17);
        this.sniper2.setFreq(200);
        this.addChild(this.sniper2);

        let point3 = new egret.Point(Main.X*0.3, 360);
        this.sniper3 = new Sniper(point3, 100, "smjb_png");
        this.sniper2.setMissileVelocity(17);
        this.sniper2.setFreq(200);
        this.addChild(this.sniper3);

        let point4 = new egret.Point(Main.X*0.7, 360);
        this.sniper4 = new Sniper(point4, 100, "smjb_png");
        this.sniper2.setMissileVelocity(17);
        this.sniper2.setFreq(200);
        this.addChild(this.sniper4);

        let point5 = new egret.Point(Main.X*0.9, 420);
        this.sniper5 = new Sniper(point5, 100, "smjb_png");
        this.sniper2.setMissileVelocity(17);
        this.sniper2.setFreq(200);
        this.addChild(this.sniper5);
    }

    public start() {
        this.state = StageState.RUNNING;
        this.emitter1.start();
        this.sniper2.startWithDelay(1000);
        this.sniper3.startWithDelay(1000);
        this.sniper4.startWithDelay(1000);
        this.sniper5.startWithDelay(1000);
        this.missile_timer.start();
    }
    
}