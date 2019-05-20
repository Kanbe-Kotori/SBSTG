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
        let sky = MyUtils.createBitmapByName(TextureNames.MAIN_PAGE);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChild(sky);

        this.btnStart = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y/1.5), TextureNames.BUTTON_NORMAL, "开始游戏");
        this.btnStart.setAction(this.onClick);
        this.addChild(this.btnStart);
    }

    protected onClick(evt:egret.TouchEvent) {
        PageMain.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageChooseChapter.INSTANCE);
    }
    
}