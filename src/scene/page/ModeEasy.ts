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
        btnReturn.setAction(ChooseMode.click_return);
        this.addChild(btnReturn);
    }

	public addChapter(chapter:PageChapter, point:egret.Point) {
		let button = new ButtonWithText(550, 150, point, chapter.chapter_name);
        button.setAction(ModeEasy.createFunc(chapter));
		this.arrayButton.push(button);
    }

	public static createFunc(chapter:PageChapter) {
		let func:Function = () => {
			ChooseMode.INSTANCE.removeChildren();
        	Main.getMain().removeChildren();
        	Main.getMain().addChild(chapter);
            SelfMachine.INSTANCE.currentChapter = chapter;
		};
        return func;
	}

}