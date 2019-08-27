class Info extends Popup {

	public static readonly INSTANCE:Info = new Info();

    protected doRender() {
        super.doRender();
		let img = MyUtils.createBitmapByName(TextureNames.POPUP_LONG);
        img.width = 720;
        img.height = 1080;
        img.anchorOffsetX = img.width/2;
        img.anchorOffsetY = img.height/2;
        img.x = Main.X/2;
        img.y = Main.Y/2;
        this.addChild(img);

        let title = new egret.TextField();
        title.x = 270;
        title.y = 480;
        title.width = 540;
        title.height = 90;
        title.text = "关卡提示";
        title.size = 64;
        title.textColor = 0x000000;
        title.fontFamily = "KaiTi";
        title.bold = true;
        title.textAlign = egret.HorizontalAlign.CENTER;
        title.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(title);

        let current = SelfMachine.INSTANCE.currentStage;
        let info = new egret.TextField();
        info.x = 270;
        info.y = 600;
        info.width = 540;
        info.height = 720;
        info.text = TextHelper.getStageInfoFromID(current.getUniqueID());
        info.size = 48;
        info.textColor = 0x000000;
        info.fontFamily = "KaiTi";
        info.textAlign = egret.HorizontalAlign.LEFT;
        info.verticalAlign = egret.VerticalAlign.TOP;
        this.addChild(info);

        let btnStart = new Button(120, 120, new egret.Point(540, 1320)).setTexture(TextureNames.BUTTON_RESUME);
        btnStart.setAction(Info.click_start);
        this.addChild(btnStart);
    }

	public static click_start(evt:egret.TouchEvent) {
        Info.INSTANCE.removeChildren();
        Info.INSTANCE.parent.removeChild(Info.INSTANCE);
		let current = SelfMachine.INSTANCE.currentStage;
        if (current.state == StageState.BEFORE_RUNNING || current.state == StageState.END) {
            current.restart();
        } else if (current.state == StageState.PAUSING) {
            current.resume();
        }
	}

}