class PageHelp extends PageBase {

    public static readonly INSTANCE:PageHelp = new PageHelp();

	protected titleText:egret.TextField;
	protected contentText:egret.TextField;

    protected constructor() {
        super("help_page");
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

		this.titleText = new egret.TextField();
        this.titleText.width = 1080;
        this.titleText.height = 120;
        this.titleText.x = 0;
        this.titleText.y = 120;
        this.titleText.size = 72;
        this.titleText.text = "我是帮助界面";
        this.titleText.textColor = 0x000000;
        this.titleText.fontFamily = "KaiTi";
        this.titleText.textAlign = egret.HorizontalAlign.CENTER;
        this.titleText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.titleText);

		this.contentText = new egret.TextField();
        this.contentText.width = 1080;
        this.contentText.height = 1440;
        this.contentText.x = 0;
        this.contentText.y = 240;
        this.contentText.size = 48;
        this.contentText.text = TextHelper.help_text;
        this.contentText.textColor = 0x009900;
        this.contentText.fontFamily = "KaiTi";
        this.contentText.textAlign = egret.HorizontalAlign.LEFT;
        this.contentText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.contentText);

        let btnReturn = new Button(180, 180, new egret.Point(660, 1800), TextureNames.BUTTON_RETURN);
        btnReturn.setAction(PageChooseChapter.click_return);
        this.addChild(btnReturn);
    }

    public static click_return(evt:egret.TouchEvent) {
		PageHelp.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }
    
}