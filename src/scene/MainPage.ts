class MainPage extends PageBase {

    public static readonly INSTANCE:MainPage = new MainPage();

    private btnStart:Button;

    protected constructor() {
        super("main_page");
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName("main_page_png");
        sky.width = this.stage.stageWidth;
        sky.height = this.stage.stageHeight;
        sky.alpha = 1;
        this.addChild(sky);

        this.btnStart = new Button(320, 100, new egret.Point(this.stage.stageWidth/2, this.stage.stageHeight/2), "btn_start");
        this.btnStart.setAction(this.onClick);
        this.addChild(this.btnStart);
    }

    protected onClick() {
        this.parent.addChild(Stage1.INSTANCE);
        this.parent.removeChild(this);
    }
    
}