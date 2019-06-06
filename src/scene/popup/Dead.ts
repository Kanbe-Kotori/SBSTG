class Dead extends Popup {

	public static readonly INSTANCE:Dead = new Dead();

	private _img:egret.Bitmap;

	protected constructor() {
        super("dead_popup");
    }

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

        let btnRestart = new Button(120, 120, new egret.Point(360, 1140)).setTexture(TextureNames.BUTTON_RESTART);
        btnRestart.setAction(Dead.click_restart);
        this.addChild(btnRestart);

        let btnInfo = new Button(120, 120, new egret.Point(540, 1140)).setTexture(TextureNames.BUTTON_INFO);
        btnInfo.setAction(Dead.click_info);
        this.addChild(btnInfo);

        let btnReturn = new Button(120, 120, new egret.Point(720, 1140)).setTexture(TextureNames.BUTTON_RETURN);
        btnReturn.setAction(Dead.click_return);
        this.addChild(btnReturn);
        
    }

	public static click_info(evt:egret.TouchEvent) {
		//TODO
    }

	public static click_return(evt:egret.TouchEvent) {
        let current = SelfMachine.INSTANCE.currentStage;
        current.end();
        Dead.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }

	public static click_restart(evt:egret.TouchEvent) {
        Dead.INSTANCE.removeChildren();
        Dead.INSTANCE.parent.removeChild(Dead.INSTANCE);
		let current = SelfMachine.INSTANCE.currentStage;
		current.restart();
	}

}