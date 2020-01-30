class ChooseStage extends Popup {

	public static readonly INSTANCE:ChooseStage = new ChooseStage();

    private _stage:StageBase;

    public setStage(stage:StageBase) {
        this._stage = stage;
    }

    protected doRender() {
        super.doRender();
		let img = MyUtils.createBitmapByName(TextureNames.POPUP_SQUARE);
        img.width = 600;
        img.height = 600;
        img.anchorOffsetX = img.width/2;
        img.anchorOffsetY = img.height/2;
        img.x = Main.X/2;
        img.y = Main.Y/2;
        this.addChild(img);

        let title = new egret.TextField();
        title.x = 270;
        title.y = 780;
        title.width = 540;
        title.height = 90;
        title.text = this._stage.title;
        title.size = 64;
        title.textColor = 0x000000;
        title.fontFamily = "KaiTi";
        title.bold = true;
        title.textAlign = egret.HorizontalAlign.CENTER;
        title.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(title);

        let btnReturn = new Button(120, 120, new egret.Point(360, 1080)).setTexture(TextureNames.BUTTON_RETURN);
        btnReturn.setAction(ChooseStage.click_return);
        this.addChild(btnReturn);

        let btnStart = new Button(120, 120, new egret.Point(540, 1080)).setTexture(TextureNames.BUTTON_RESUME);
        btnStart.setAction(ChooseStage.click_start);
        this.addChild(btnStart);

        let btnSkip = new Button(120, 120, new egret.Point(720, 1080)).setTexture(TextureNames.BUTTON_SKIP);
        btnSkip.setAction(ChooseStage.click_skip);
        this.addChild(btnSkip);
    }

    public static click_return(evt:egret.TouchEvent) {
        ChooseStage.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(SelfMachine.INSTANCE.currentChapter);
    }

	public static click_start(evt:egret.TouchEvent) {
        ChooseStage.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(ChooseStage.INSTANCE._stage);
	}

    public static click_skip(evt:egret.TouchEvent) {
        LocalData.setStageData(ChooseStage.INSTANCE._stage, STAGE_DATA.SKIPPED);
        ChooseStage.click_return(evt);
    }

}