class PageChapter extends PageBase {

	private arrayButton:Array<Button> = new Array<Button>();

    public constructor(name:string) {
        super(name);
        Chapters.arrayChapter.push(this);
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
    }

    public addStage(stage:StageBase, name:string, point:egret.Point) {
		let button = new ButtonWithText(550, 150, point, TextureNames.BUTTON_NORMAL, name);
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
    
}