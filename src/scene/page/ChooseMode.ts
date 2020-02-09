class ChooseMode extends PageBase {

    public static readonly INSTANCE:ChooseMode = new ChooseMode();

    protected doRender() {
        let sky = MyUtils.createBitmapByName(TextureNames.MAIN_PAGE);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChild(sky);

        let btnTutorial = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.2), "教程");
        btnTutorial.setAction(ChooseMode.click_enter_tutorial);
        this.addChild(btnTutorial);

        let btnEasy = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.4), "主线（简单）");
        btnEasy.setAction(ChooseMode.click_enter_easy);
        this.addChild(btnEasy);

        let btnHard = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.6), "主线（困难）");
        btnHard.setAction(ChooseMode.click_enter_hard);
        this.addChild(btnHard);

        let btnReturn = new Button(180, 180, new egret.Point(660, 1800)).setTexture(TextureNames.BUTTON_RETURN);
        btnReturn.setAction(ChooseMode.click_return);
        this.addChild(btnReturn);
    }

    public static click_enter_tutorial(evt:egret.TouchEvent) {
        ChooseMode.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(StageData.tutorial);
        SelfMachine.INSTANCE.currentChapter = StageData.tutorial;
    }

    public static click_enter_easy(evt:egret.TouchEvent) {
        ChooseMode.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(ModeEasy.INSTANCE);
    }

    public static click_enter_hard(evt:egret.TouchEvent) {
        ChooseMode.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(ModeHard.INSTANCE);
    }

    public static click_return(evt:egret.TouchEvent) {
        ChooseMode.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(PageMain.INSTANCE);
    }
    
}