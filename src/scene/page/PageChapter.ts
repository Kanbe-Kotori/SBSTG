class PageChapter extends PageBase {

	//private arrayButton:Array<Button> = new Array<Button>();
    private _stage_map:{[index:string]:Button} = {};

    public chapter_name:string;
    protected titleText:egret.TextField;

    public constructor(name:string) {
        super();
        this.chapter_name = name;
        StageData.arrayChapter.push(this);
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
        this.titleText.text = this.chapter_name;
        this.titleText.textColor = 0x000000;
        this.titleText.fontFamily = "KaiTi";
        this.titleText.textAlign = egret.HorizontalAlign.CENTER;
        this.titleText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.titleText);

		for (let i in this._stage_map) {
            let stage = StageData.getStage(i);
            let front = stage.front_stage;
            if (front == null || LocalData.getStageData(front) == STAGE_DATA.FINISHED || LocalData.getStageData(front) == STAGE_DATA.SKIPPED) {
                let button = this._stage_map[i];
                if (LocalData.getStageData(stage) == STAGE_DATA.FINISHED) {
                    button.setTexture(TextureNames.STAGE_FINISHED);              
                } else if (LocalData.getStageData(stage) == STAGE_DATA.SKIPPED) {
                    button.setTexture(TextureNames.STAGE_SKIPPED);              
                }
                button.setAction(PageChapter.createFunc(stage, this));
                this.addChild(button);
            }
            
		}

        let btnReturn = new Button(180, 180, new egret.Point(660, 1800)).setTexture(TextureNames.BUTTON_RETURN);
        btnReturn.setAction(PageChapter.click_return);
        this.addChild(btnReturn);
    }

    public addStage(stage_id:string, button_text:string, point:egret.Point) {
        let button = new ButtonWithText(160, 160, point, button_text).setTexture(TextureNames.STAGE_UNFINISHED);
        button.setColor(0x000000);
        this._stage_map[stage_id] = button;
        //button.setAction(PageChapter.createFunc(stage, this));
		//this.arrayButton.push(button);
    }

	public static createFunc(stage:StageBase, chapter:PageChapter) {
		let func:Function = () => {
			ChooseStage.INSTANCE.setStage(stage);
            chapter.addChild(ChooseStage.INSTANCE);
		};
        return func;
	}

    public static click_return(evt:egret.TouchEvent) {
        let chapter = SelfMachine.INSTANCE.currentChapter;
        chapter.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(chapter.getReturnPage());
        SelfMachine.INSTANCE.currentChapter = null;
    }

    private getReturnPage() {
        if (this == StageData.chapter_tutorial || this == StageData.chapter_extra) {
            return ChooseMode.INSTANCE;
        } else if (this == StageData.chapter1h || this == StageData.chapter2h || this == StageData.chapter3h) {
            return ModeHard.INSTANCE;
        } else {
            return ModeEasy.INSTANCE;
        }
    }
    
}