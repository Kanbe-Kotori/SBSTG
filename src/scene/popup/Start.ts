class Start extends Popup {

	public static readonly INSTANCE:Start = new Start();

	private _img:egret.Bitmap;

	private btnReturn:Button;
	private btnInfo:Button;
    private btnRestart:Button;

	protected constructor() {
        super("start_popup");
    }

    protected doRender() {
        super.doRender();
		this._img = MyUtils.createBitmapByName(TextureNames.POPUP_START);
        this._img.width = 600;
        this._img.height = 600;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this._img.x = Main.X/2;
        this._img.y = Main.Y/2;
        this.addChild(this._img);

		this.btnRestart = new Button(120, 120, new egret.Point(360, 1140), TextureNames.BUTTON_RESTART);
        this.btnRestart.setAction(Start.click_restart);
        this.addChild(this.btnRestart);

		this.btnInfo = new Button(120, 120, new egret.Point(540, 1140), TextureNames.BUTTON_INFO);
        this.btnInfo.setAction(Start.click_info);
        this.addChild(this.btnInfo);

		this.btnReturn = new Button(120, 120, new egret.Point(720, 1140), TextureNames.BUTTON_RETURN);
        this.btnReturn.setAction(Start.click_return);
        this.addChild(this.btnReturn);
        
    }

	public static click_info(evt:egret.TouchEvent) {
		//TODO
    }

	public static click_return(evt:egret.TouchEvent) {
        let current = SelfMachine.INSTANCE.currentStage;
        current.end();
        Start.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }

	public static click_restart(evt:egret.TouchEvent) {
        Start.INSTANCE.removeChildren();
		Main.getMain().removeChild(Start.INSTANCE);
		let current = SelfMachine.INSTANCE.currentStage;
		current.restart();
	}

}