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
        this.emitter1 = new Emitter(point1, 48, 20, 300, 0.25, 0.75, 11, 0xFF0000, 0xFF0000);
        this.addChild(this.emitter1);

        let point2 = new egret.Point(this.stage.stageWidth*0.1, 300);
        this.sniper2 = new Sniper(point2, 48, 35, 250, 0x007F00, 0x007F00);
        this.addChild(this.sniper2);

        let point3 = new egret.Point(this.stage.stageWidth*0.3, 300);
        this.sniper3 = new Sniper(point3, 48, 35, 250, 0x007F00, 0x007F00);
        this.addChild(this.sniper3);

        let point4 = new egret.Point(this.stage.stageWidth*0.7, 300);
        this.sniper4 = new Sniper(point4, 48, 35, 250, 0x007F00, 0x007F00);
        this.addChild(this.sniper4);

        let point5 = new egret.Point(this.stage.stageWidth*0.9, 300);
        this.sniper5 = new Sniper(point5, 48, 35, 250, 0x007F00, 0x007F00);
        this.addChild(this.sniper5);
    }

    public start() {
        this.state = StageState.RUNNING;
        this.emitter1.start();
        this.sniper2.startWithDelay(2000);
        this.sniper3.startWithDelay(2000);
        this.sniper4.startWithDelay(2000);
        this.sniper5.startWithDelay(2000);
        this.missile_timer.start();
    }
    
}