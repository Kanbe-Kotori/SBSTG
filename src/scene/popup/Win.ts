class Win extends Popup {

	public static readonly INSTANCE:Win = new Win();

    protected doRender() {
        super.doRender();
		let img = MyUtils.createBitmapByName(TextureNames.POPUP_WIN);
        img.width = 600;
        img.height = 600;
        img.anchorOffsetX = img.width/2;
        img.anchorOffsetY = img.height/2;
        img.x = Main.X/2;
        img.y = Main.Y/2;
        this.addChild(img);

        let btnRestart = new Button(120, 120, new egret.Point(540, 1140)).setTexture(TextureNames.BUTTON_RESTART);
        btnRestart.setAction(Win.click_restart);
        this.addChild(btnRestart);

        let btnNext = new Button(120, 120, new egret.Point(720, 1140)).setTexture(TextureNames.BUTTON_NEXT);
        btnNext.setAction(Win.click_next);
        this.addChild(btnNext);

        let btnReturn = new Button(120, 120, new egret.Point(360, 1140)).setTexture(TextureNames.BUTTON_RETURN);
        btnReturn.setAction(Win.click_return);
        this.addChild(btnReturn);
        
    }

	public static click_next(evt:egret.TouchEvent) {
        let current = SelfMachine.INSTANCE.currentStage;
        if (current.next_stage != null) {
             current.end();
            Win.INSTANCE.removeChildren();
            Main.getMain().removeChildren();
            Main.getMain().addChild(current.next_stage);
        }      
    }

	public static click_return(evt:egret.TouchEvent) {
        let current = SelfMachine.INSTANCE.currentStage;
        current.end();
        Win.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(SelfMachine.INSTANCE.currentChapter);
    }

	public static click_restart(evt:egret.TouchEvent) {
        Win.INSTANCE.removeChildren();
        Win.INSTANCE.parent.removeChild(Win.INSTANCE);
		let current = SelfMachine.INSTANCE.currentStage;
		current.restart();
	}

}