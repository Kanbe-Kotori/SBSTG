class Info extends Popup {

	public static readonly INSTANCE:Info = new Info();

	private _img:egret.Bitmap;

	protected constructor() {
        super("info_popup");
    }

    protected doRender() {
        super.doRender();
		this._img = MyUtils.createBitmapByName(TextureNames.POPUP_INFO);
        this._img.width = 800;
        this._img.height = 800;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this._img.x = Main.X/2;
        this._img.y = Main.Y/2;
        this.addChild(this._img);

        let current = SelfMachine.INSTANCE.currentStage;
        //TODO 根据current绘制Info图像

		let btnStart = new Button(120, 120, new egret.Point(540, 1240), TextureNames.BUTTON_RESUME);
        btnStart.setAction(Info.click_start);
        this.addChild(btnStart);
    }

	public static click_return(evt:egret.TouchEvent) {
        let current = SelfMachine.INSTANCE.currentStage;
        current.end();
        Info.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }

	public static click_start(evt:egret.TouchEvent) {
        Info.INSTANCE.removeChildren();
		Main.getMain().removeChild(Info.INSTANCE);
		let current = SelfMachine.INSTANCE.currentStage;
        if (current.state == StageState.BEFORE_RUNNING || current.state == StageState.END) {
            current.restart();
        } else if (current.state == StageState.PAUSING) {
            current.resume();
        }
	}

}