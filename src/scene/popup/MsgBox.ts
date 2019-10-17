class MsgBox extends Popup {

	public static readonly INSTANCE:MsgBox = new MsgBox();
    private _text = "";

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

        let text = new egret.TextField();
        text.x = 300;
        text.y = 780;
        text.width = 480;
        text.height = 360;
        text.text = this._text;
        text.size = 48;
        text.textColor = 0x000000;
        text.fontFamily = "KaiTi";
        text.textAlign = egret.HorizontalAlign.CENTER;
        text.verticalAlign = egret.VerticalAlign.TOP;
        this.addChild(text);

        let btnStart = new Button(120, 120, new egret.Point(540, 1080)).setTexture(TextureNames.BUTTON_RESUME);
        btnStart.setAction(MsgBox.click_start);
        this.addChild(btnStart);
    }

	public static click_start(evt:egret.TouchEvent) {
        MsgBox.INSTANCE.removeChildren();
        if (MsgBox.INSTANCE.parent != null) {
            MsgBox.INSTANCE.parent.removeChild(MsgBox.INSTANCE);
        } else {
            Main.getMain().removeChildren();
            Main.getMain().addChild(PageMain.INSTANCE);
        }
	}

    public static showMsgBox(page:PageBase, text:string) {
        MsgBox.INSTANCE._text = text;
        page.addChild(MsgBox.INSTANCE);
    }

}