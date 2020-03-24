class ModeEasy extends PageBase {

	public static readonly INSTANCE:ModeEasy = new ModeEasy();
	private arrayButton:Array<Button>;

	protected constructor() {
        super();
        this.arrayButton = new Array<Button>();
    }

	protected doRender() {
        let sky = MyUtils.createBitmapByName(TextureNames.MAIN_PAGE);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChild(sky);
        for (let i of this.arrayButton) {
			this.addChild(i);
		}
        let btnReturn = new Button(180, 180, new egret.Point(660, 1800)).setTexture(TextureNames.BUTTON_RETURN);
        btnReturn.setAction(ModeEasy.click_return);
        this.addChild(btnReturn);
    }

	public addChapter(chapter:PageChapter, point:egret.Point) {
		let button = new ButtonWithText(550, 150, point, chapter.chapter_name);
        button.setAction(ModeEasy.createFunc(chapter));
		this.arrayButton.push(button);
    }

	public static createFunc(chapter:PageChapter) {
		let func:Function = () => {
            if (chapter.front_stage != null && LocalData.getStageData(chapter.front_stage) == STAGE_DATA.UNFINISHED) {
                MsgBox.showMsgBox(ModeEasy.INSTANCE, "本章节将在通关或跳过该关卡后解锁：\n" + chapter.front_stage.title);
                return;
            }
			ModeEasy.INSTANCE.removeChildren();
        	Main.getMain().removeChildren();
        	Main.getMain().addChild(chapter);
            SelfMachine.INSTANCE.currentChapter = chapter;
		};
        return func;
	}

    public static click_return(evt:egret.TouchEvent) {
        ModeEasy.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(ChooseMode.INSTANCE);
    }

}