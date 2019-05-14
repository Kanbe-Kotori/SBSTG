class PageChapter extends PageBase {

	private arrayButton:Array<Button>;

    public constructor(name:string) {
        super(name);
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

    public addStage(stage:StageBase, name:string, point:egret.Point) {
		let button = new ButtonWithText(550, 150, point, TextureNames.BUTTON_NORMAL, name);
        button.setAction(PageChapter.createFunc(stage));
		this.arrayButton.push(button);
    }

	public static createFunc(stage:StageBase) {
		let func:Function = function() {
			PageChooseStage.INSTANCE.removeChildren();
        	Main.getMain().removeChildren();
        	Main.getMain().addChild(stage);
		};
        return func;
	}
    
}