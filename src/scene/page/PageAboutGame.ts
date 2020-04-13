class PageAboutGame extends PageBase {

    public static readonly INSTANCE:PageAboutGame = new PageAboutGame();

	protected titleText:egret.TextField;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName(TextureNames.MAIN_PAGE);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChild(sky);

		this.titleText = new egret.TextField();
        this.titleText.width = 1080;
        this.titleText.height = 120;
        this.titleText.x = 0;
        this.titleText.y = 60;
        this.titleText.size = 72;
        this.titleText.text = "关于游戏";
        this.titleText.textColor = 0x000000;
        this.titleText.fontFamily = "KaiTi";
        this.titleText.textAlign = egret.HorizontalAlign.CENTER;
        this.titleText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.titleText);

        let btnGameInfo = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.2), "游戏信息");
        btnGameInfo.setAction(PageAboutGame.click_game_info);
        this.addChild(btnGameInfo);

        let btnDeveloper = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.4), "开发者的话");
        btnDeveloper.setAction(PageAboutGame.click_developer_words);
        this.addChild(btnDeveloper);

        let btnClear = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.6), "清除数据");
        btnClear.setAction(PageAboutGame.click_clear);
        this.addChild(btnClear);

        let btnReturn = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.8), "返回");
        btnReturn.setAction(PageAboutGame.click_return);
        this.addChild(btnReturn);
        
    }

    public static click_game_info(evt:egret.TouchEvent) {
        PageAboutGame.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageGameInfo.INSTANCE);
    }

    public static click_developer_words(evt:egret.TouchEvent) {
        PageAboutGame.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageDeveloperWords.INSTANCE);
    }

    public static click_clear(evt:egret.TouchEvent) {
        LocalData.clear();
		PageAboutGame.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }

    public static click_return(evt:egret.TouchEvent) {
		PageAboutGame.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }
    
}