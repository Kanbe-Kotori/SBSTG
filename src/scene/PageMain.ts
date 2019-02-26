class PageMain extends PageBase {

    public static readonly INSTANCE:PageMain = new PageMain();

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

        this.btnStart = new Button(550, 150, new egret.Point(this.stage.stageWidth/2, this.stage.stageHeight/1.5), "btn_start");
        this.btnStart.setAction(this.onClick);
        this.addChild(this.btnStart);
    }

    protected onClick() {
        this.parent.addChild(PageChooseStage.INSTANCE);
        this.parent.removeChild(this);
    }
    
}