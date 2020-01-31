class PageAboutGame extends PageBase {

    public static readonly INSTANCE:PageAboutGame = new PageAboutGame();

	protected titleText:egret.TextField;
	protected contentText:egret.TextField;

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

		this.contentText = new egret.TextField();
        this.contentText.width = 1000;
        this.contentText.height = 1320;
        this.contentText.x = 40;
        this.contentText.y = 360;
        this.contentText.size = 48;
        this.contentText.textFlow = TextHelper.about_text;
        this.contentText.textColor = 0x000000;
        this.contentText.strokeColor = 0xffffff;
        this.contentText.stroke = 2;
        this.contentText.fontFamily = "KaiTi";
        this.contentText.textAlign = egret.HorizontalAlign.LEFT;
        this.contentText.verticalAlign = egret.VerticalAlign.TOP;
        this.addChild(this.contentText);

        let btnReturn = new ButtonWithText(550, 150, new egret.Point(540, 1620), "返回");
        btnReturn.setAction(PageAboutGame.click_return);
        this.addChild(btnReturn);

        let btnClear = new ButtonWithText(550, 150, new egret.Point(540, 1800), "清除数据");
        btnClear.setAction(PageAboutGame.click_clear);
        this.addChild(btnClear);
    }

    public static click_return(evt:egret.TouchEvent) {
		PageAboutGame.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }

    public static click_clear(evt:egret.TouchEvent) {
        LocalData.clear();
		PageAboutGame.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }
    
}