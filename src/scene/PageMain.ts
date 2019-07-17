class PageMain extends PageBase {

    public static readonly INSTANCE:PageMain = new PageMain();

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName(TextureNames.MAIN_PAGE);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChild(sky);

        let btnStart = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.55), "开始游戏");
        btnStart.setAction(PageMain.click_start);
        this.addChild(btnStart);

        let btnHelp = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.75), "帮助");
        btnHelp.setAction(PageMain.click_help);
        this.addChild(btnHelp);

        if (LocalData.isFirstTime()) {
            this.addChild(FirstTime.INSTANCE);
        }
    }

    public static click_start(evt:egret.TouchEvent) {
        PageMain.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageChooseChapter.INSTANCE);
    }

    public static click_help(evt:egret.TouchEvent) {
        PageMain.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageHelp.INSTANCE);
    }
    
}