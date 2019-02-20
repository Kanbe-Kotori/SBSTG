class MainPage extends PageBase {
    public static readonly INSTANCE:MainPage = new MainPage();

    protected constructor() {
        super("main_page");
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName("main_page_png");
        this.addChild(sky);
        sky.width = this.stage.stageWidth;
        sky.height = this.stage.stageHeight;
        sky.alpha = 1;
    }
    
}