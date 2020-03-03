class PageMain extends PageBase {

    public static readonly INSTANCE:PageMain = new PageMain();

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName(TextureNames.MAIN_PAGE);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChild(sky);

        let btnStart = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.5), "开始游戏");
        btnStart.setAction(PageMain.click_start);
        this.addChild(btnStart);

        let btnHelp = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.65), "帮助");
        btnHelp.setAction(PageMain.click_help);
        this.addChild(btnHelp);

        let btnAbout = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.8), "关于游戏");
        btnAbout.setAction(PageMain.click_about);
        this.addChild(btnAbout);
        
        /*
        if (LocalData.isFirstTime()) {
            MsgBox.setCustomAction(
			    () => {
                    PageMain.INSTANCE.removeChildren();
                    Main.getMain().removeChildren();
                    Main.getMain().addChild(PageHelp.INSTANCE);
                }
		    );
            MsgBox.showMsgBox(this, TextHelper.welcome_text);
        }
        */
        MsgBox.showMsgBox(this, TextHelper.warning_text);
    }

    public static click_start(evt:egret.TouchEvent) {
        PageMain.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(ChooseMode.INSTANCE);
    }

    public static click_help(evt:egret.TouchEvent) {
        PageMain.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageHelp.INSTANCE);
    }

    public static click_about(evt:egret.TouchEvent) {
        PageMain.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageAboutGame.INSTANCE);
    }
    
}