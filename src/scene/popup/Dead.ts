class Dead extends Popup {

	public static readonly INSTANCE:Dead = new Dead();

    protected doRender() {
        super.doRender();
		let img = MyUtils.createBitmapByName(TextureNames.POPUP_DEAD);
        img.width = 600;
        img.height = 600;
        img.anchorOffsetX = img.width/2;
        img.anchorOffsetY = img.height/2;
        img.x = Main.X/2;
        img.y = Main.Y/2;
        this.addChild(img);

        let btnRestart = new Button(120, 120, new egret.Point(540, 1140)).setTexture(TextureNames.BUTTON_RESTART);
        btnRestart.setAction(Dead.click_restart);
        this.addChild(btnRestart);

        let btnSkip = new Button(120, 120, new egret.Point(720, 1140)).setTexture(TextureNames.BUTTON_SKIP);
        btnSkip.setAction(Dead.click_skip);
        this.addChild(btnSkip);

        let btnReturn = new Button(120, 120, new egret.Point(360, 1140)).setTexture(TextureNames.BUTTON_RETURN);
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