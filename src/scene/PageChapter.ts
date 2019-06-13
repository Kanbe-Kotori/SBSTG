class PageChapter extends PageBase {

	//private arrayButton:Array<Button> = new Array<Button>();
    private _stage_map:{[index:string]:Button} = {};
    private _chapter_index:number;

    protected titleText:egret.TextField;

    public constructor(index:number) {
        super();
        this._chapter_index = index;
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
        this.titleText.text = TextHelper.getChapterName(this._chapter_index);
        this.titleText.textColor = 0x000000;
        this.titleText.fontFamily = "KaiTi";
        this.titleText.textAlign = egret.HorizontalAlign.CENTER;
        this.titleText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.titleText);

		for (let i in this._stage_map) {
            let button = this._stage_map[i];
            button.setAction(PageChapter.createFunc(Chapters.getStage(i), this));
            if (LocalData.getStage(i) == STAGE_DATA.PASSED) {
                button.setTexture(TextureNames.STAGE_FINISH);
            }
            this.addChild(button);
		}

        let btnReturn = new Button(180, 180, new egret.Point(660, 1800)).setTexture(TextureNames.BUTTON_RETURN);
        btnReturn.setAction(PageChapter.click_return);
        this.addChild(btnReturn);
    }

    public addStage(stage_id:string, button_text:string, point:egret.Point) {
        let button = new ButtonWithText(160, 160, point, button_text).setTexture(TextureNames.STAGE_NOT_FINISH);
        button.setColor(0x000000);
        this._stage_map[stage_id] = button;
        //button.setAction(PageChapter.createFunc(stage, this));
		//this.arrayButton.push(button);
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