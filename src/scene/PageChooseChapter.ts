class PageChooseChapter extends PageBase {

    public static readonly INSTANCE:PageChooseChapter = new PageChooseChapter();
	private arrayButton:Array<Button>;

    protected constructor() {
        super("choose_chapter");
        this.arrayButton = new Array<Button>();
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
        for (let i of this.arrayButton) {
			this.addChild(i);
		}
    }

    public addChapter(chapter:PageChapter, name:string, point:egret.Point) {
		let button = new ButtonWithText(550, 150, point, TextureNames.BUTTON_NORMAL, name);
        button.setAction(PageChooseChapter.createFunc(chapter));
		this.arrayButton.push(button);
    }

	public static createFunc(chapter:PageChapter) {
		let func:Function = function() {
			PageChooseChapter.INSTANCE.removeChildren();
        	Main.getMain().removeChildren();
        	Main.getMain().addChild(chapter);
		};
        return func;
	}
    
}