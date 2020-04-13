class PageMain extends PageBase {

    public static readonly INSTANCE:PageMain = new PageMain();
    public click_title_times:number = 10;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
    }

    protected doRender() {
        this.click_title_times = 10;

        let sky = MyUtils.createBitmapByName(TextureNames.MAIN_PAGE);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChild(sky);

        let title = MyUtils.createBitmapByName(TextureNames.GAME_TITLE);
        title.width = 720;
        title.height = 240;
        title.alpha = 1;
        title.x = 180;
        title.y = 400;
        title.touchEnabled = true;
        this.addChild(title);
        title.addEventListener(egret.TouchEvent.TOUCH_TAP, PageMain.click_title, this);

        let btnStart = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.5), "开始游戏");
        btnStart.setAction(PageMain.click_start);
        this.addChild(btnStart);

        let btnHelp = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.65), "帮助");
        btnHelp.setAction(PageMain.click_help);
        this.addChild(btnHelp);

        let btnAbout = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.8), "关于游戏");
        btnAbout.setAction(PageMain.click_about);
        this.addChild(btnAbout);
        
        if (LocalData.isFirstTime()) {
            MsgBox.showMsgBox(this, TextHelper.welcome_text);
        }
    }

    public static click_title(evt:egret.TouchEvent) {
        if (--PageMain.INSTANCE.click_title_times <= 0) {
            PageMain.INSTANCE.click_title_times = 10;
            SelfMachine.INSTANCE.UNDEAD = !SelfMachine.INSTANCE.UNDEAD;
            MsgBox.showMsgBox(PageMain.INSTANCE, "作弊成功，当前自机无敌情况为：" + SelfMachine.INSTANCE.UNDEAD);
        }
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