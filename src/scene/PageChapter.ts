class PageChapter extends PageBase {

	private arrayButton:Array<Button> = new Array<Button>();
    private _chapter_name:string;

    protected titleText:egret.TextField;

    public constructor(name:string) {
        super("chapter" + Chapters.arrayChapter.length + 1);
        this._chapter_name = name;
        Chapters.arrayChapter.push(this);
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
        this.titleText.text = this._chapter_name;
        this.titleText.textColor = 0x000000;
        this.titleText.fontFamily = "KaiTi";
        this.titleText.textAlign = egret.HorizontalAlign.CENTER;
        this.titleText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.titleText);

		for (let i of this.arrayButton) {
			this.addChild(i);
		}

        let btnReturn = new Button(180, 180, new egret.Point(660, 1800), TextureNames.BUTTON_RETURN);
        btnReturn.setAction(PageChapter.click_return);
        this.addChild(btnReturn);
    }

    public addStage(stage:StageBase, name:string, point:egret.Point) {
		let button = new ButtonWithText(160, 160, point, TextureNames.MISSILE_RING, name);
        button.setColor(0x000000);
        button.setAction(PageChapter.createFunc(stage, this));
		this.arrayButton.push(button);
    }

	public static createFunc(stage:StageBase, chapter:PageChapter) {
		let func:Function = function() {
			chapter.removeChildren();
        	Main.getMain().removeChildren();
        	Main.getMain().addChild(stage);
		};
        return func;
	}

    public static click_return(evt:egret.TouchEvent) {
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageChooseChapter.INSTANCE);
    }
    
}