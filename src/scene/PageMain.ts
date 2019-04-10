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

    protected onClick() {
        //try {
        Main.getMain().addChild(PageChooseStage.INSTANCE);
        Main.getMain().removeChild(PageMain.INSTANCE);
        //} catch(err) {
            //console.log(err);
        //}
    }
    
}