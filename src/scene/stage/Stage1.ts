class Stage1 extends StageBase {
    public static readonly INSTANCE:Stage1 = new Stage1("1", 30);

    private emitter1:Emitter;
    private sniper2:Sniper;
    private sniper3:Sniper;
    private sniper4:Sniper;
    private sniper5:Sniper;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        let point1 = new egret.Point(this.stage.stageWidth * 0.5, 300);
        this.emitter1 = new Emitter(point1, 48, 20, 300, 0.25, 0.75, 11, "smjb2_png", TextureNames.MISSILE_WATER);
        this.addChild(this.emitter1);

        let point2 = new egret.Point(this.stage.stageWidth*0.1, 420);
        this.sniper2 = new Sniper(point2, 48, 17, 200, "smjb_png", TextureNames.MISSILE_STANDARD);
        this.addChild(this.sniper2);

        let point3 = new egret.Point(this.stage.stageWidth*0.3, 360);
        this.sniper3 = new Sniper(point3, 48, 17, 200, "smjb_png", TextureNames.MISSILE_STANDARD);
        this.addChild(this.sniper3);

        let point4 = new egret.Point(this.stage.stageWidth*0.7, 360);
        this.sniper4 = new Sniper(point4, 48, 17, 200, "smjb_png", TextureNames.MISSILE_STANDARD);
        this.addChild(this.sniper4);

        let point5 = new egret.Point(this.stage.stageWidth*0.9, 420);
        this.sniper5 = new Sniper(point5, 48, 17, 200, "smjb_png", TextureNames.MISSILE_STANDARD);
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