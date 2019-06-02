class Pause extends Popup {

	public static readonly INSTANCE:Pause = new Pause();

	private _img:egret.Bitmap;

	protected constructor() {
        super("pause_popup");
    }

    protected doRender() {
        super.doRender();
		this._img = MyUtils.createBitmapByName(TextureNames.POPUP_PAUSE);
        this._img.width = 600;
        this._img.height = 600;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this._img.x = Main.X/2;
        this._img.y = Main.Y/2;
        this.addChild(this._img);

		let btnResume = new Button(120, 120, new egret.Point(360, 1140), TextureNames.BUTTON_RESUME);
        btnResume.setAction(Pause.click_resume);
        this.addChild(btnResume);

		let btnRestart = new Button(120, 120, new egret.Point(540, 1140), TextureNames.BUTTON_RESTART);
        btnRestart.setAction(Pause.click_restart);
        this.addChild(btnRestart);

		let btnReturn = new Button(120, 120, new egret.Point(720, 1140), TextureNames.BUTTON_RETURN);
        btnReturn.setAction(Pause.click_return);
        this.addChild(btnReturn);
        
    }

	public static click_resume(evt:egret.TouchEvent) {
        try {
        Pause.INSTANCE.removeChildren();
        Pause.INSTANCE.parent.removeChild(Pause.INSTANCE);
		let current = SelfMachine.INSTANCE.currentStage;
		current.resume();
        }
        catch (e) {
            console.error(e);
        }
    }

	public static click_return(evt:egret.TouchEvent) {
        let current = SelfMachine.INSTANCE.currentStage;
        current.end();
        Pause.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }

	public static click_restart(evt:egret.TouchEvent) {
        Pause.INSTANCE.removeChildren();
        Pause.INSTANCE.parent.removeChild(Pause.INSTANCE);
		let current = SelfMachine.INSTANCE.currentStage;
		current.restart();
	}

}