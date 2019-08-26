class Dead extends Popup {

	public static readonly INSTANCE:Dead = new Dead();

	private _img:egret.Bitmap;

    protected doRender() {
        super.doRender();
		this._img = MyUtils.createBitmapByName(TextureNames.POPUP_DEAD);
        this._img.width = 600;
        this._img.height = 600;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this._img.x = Main.X/2;
        this._img.y = Main.Y/2;
        this.addChild(this._img);

        let btnRestart = new Button(120, 120, new egret.Point(540, 1140)).setTexture(TextureNames.BUTTON_RESTART);
        btnRestart.setAction(Dead.click_restart);
        this.addChild(btnRestart);

        let btnSkip = new Button(120, 120, new egret.Point(360, 1140)).setTexture(TextureNames.BUTTON_SKIP);
        btnSkip.setAction(Dead.click_skip);
        this.addChild(btnSkip);

        let btnReturn = new Button(120, 120, new egret.Point(720, 1140)).setTexture(TextureNames.BUTTON_RETURN);
        btnReturn.setAction(Dead.click_return);
        this.addChild(btnReturn);
        
    }

	public static click_skip(evt:egret.TouchEvent) {
		let current = SelfMachine.INSTANCE.currentStage;
        LocalData.setStageData(current, STAGE_DATA.SKIPPED);
        current.end();
        Dead.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(SelfMachine.INSTANCE.currentChapter);
    }

	public static click_return(evt:egret.TouchEvent) {
        let current = SelfMachine.INSTANCE.currentStage;
        current.end();
        Dead.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(SelfMachine.INSTANCE.currentChapter);
    }

	public static click_restart(evt:egret.TouchEvent) {
        Dead.INSTANCE.removeChildren();
        Dead.INSTANCE.parent.removeChild(Dead.INSTANCE);
		let current = SelfMachine.INSTANCE.currentStage;
		current.restart();
	}

}