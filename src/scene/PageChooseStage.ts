class PageChooseStage extends PageBase {

    public static readonly INSTANCE:PageChooseStage = new PageChooseStage();

    private btnStage1:Button;
    private btnStage2:Button;
    private btnTemp:Button;

    protected constructor() {
        super("choose_stage");
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName(TextureNames.MAIN_PAGE);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChild(sky);

        this.btnStage1 = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.3), TextureNames.BUTTON_NORMAL, "第一关");
        this.btnStage1.setAction(this.onClickStage1);
        this.addChild(this.btnStage1);

        this.btnStage2 = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.6), TextureNames.BUTTON_NORMAL, "第二关");
        this.btnStage2.setAction(this.onClickStage2);
        this.addChild(this.btnStage2);

        this.btnTemp = new Button(256, 256, new egret.Point(Main.X * 0.9, Main.Y * 0.9), TextureNames.SELF_MACHINE);
        this.btnTemp.setAction(this.temp);
        this.addChild(this.btnTemp);
    }

    protected onClickStage1(evt:egret.TouchEvent) {
        PageChooseStage.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(Stage1.INSTANCE);
    }

    protected onClickStage2(evt:egret.TouchEvent) {
        PageChooseStage.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(Stage2.INSTANCE);
    }

    protected temp(evt:egret.TouchEvent) {
        PageChooseStage.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(StageTemp.INSTANCE);
    }
    
}