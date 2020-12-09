class PageCustomStage extends PageBase {

    public static readonly INSTANCE:PageCustomStage = new PageCustomStage();

	protected titleText:egret.TextField;
	protected contentText:egret.TextField;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
    }

    protected doRender() {
        let sky = MyUtils.createBitmapByName(TextureNames.MAIN_PAGE);
        sky.width = Main.X;
        sky.height = Main.Y;
        sky.alpha = 1;
        this.addChild(sky);

		this.titleText = new egret.TextField();
        this.titleText.width = 1080;
        this.titleText.height = 120;
        this.titleText.x = 0;
        this.titleText.y = 60;
        this.titleText.size = 72;
        this.titleText.text = "自定义关卡";
        this.titleText.textColor = 0x000000;
        this.titleText.fontFamily = "KaiTi";
        this.titleText.textAlign = egret.HorizontalAlign.CENTER;
        this.titleText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.titleText);

		this.contentText = new egret.TextField();
		this.contentText.type = egret.TextFieldType.INPUT;
		this.contentText.multiline = true;
        this.contentText.width = 1000;
        this.contentText.height = 1320;
        this.contentText.x = 40;
        this.contentText.y = 360;
        this.contentText.size = 32;
        this.contentText.textFlow = <Array<egret.ITextElement>>[
			{text: "//在这里通过代码自定义关卡！\n", style: {"bold": true, "textColor": 0xff0000}},
			{text: "//代码示例：github.com/NullaDev/SBSTG/tree/master/src/scene/stage。"},
			{text: "请注意，由于eval()函数不能运行ts代码，所以请把示例代码里的“变量名:类型”中的“:类型”去掉，以转换为js代码。\n", style: {"bold": true, "textColor": 0xff0000}},
			{text: "//本页面的代码目前还没有实现保存功能（其实是懒）！因此，请在别处保存好代码再进行测试，以免一直以来的所有努力全部木大！\n", style: {"bold": true, "textColor": 0xff0000}},
			{text: "let point1 = new egret.Point(540, 900);\n"},
			{text: "let launcher1= LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 160, 120).setInitialPos(point1);\n"},
			{text: "launcher1.addLogic(\n"},
			{text: "  new ScatterRotate(launcher1,new EllipticalMissile().setSize(15, 120).setTexture(TextureNames.MISSILE_LEAF).setTotalVelocity(30))\n"},
			{text: "  .setFreq(200).setStartAngle(0).setStep(360/8).setNumber(8).setPeriod(-20)\n"},
			{text: ");\n"},
			{text: "launcher1.addLogic(\n"},
			{text: "  new ScatterRotate(launcher1,new EllipticalMissile().setSize(30, 30).setTexture(TextureNames.MISSILE_PETAL2).setTotalVelocity(58)\n"},
			{text: "    .addHandler(\n"},
			{text: "      new TickEventHandler(\n"},
			{text: "        (missile) => {missile.setTotalVelocity(missile.getVelocity() - 5);}\n"},
			{text: "      ).setTriggerTimes(10)\n"},
			{text: "    )\n"},
			{text: "  ).setStartAngle(0).setNumber(10).setStep(360/10).setFreq(300).setPeriod(10)\n"},
			{text: ")"}
		];
        this.contentText.textColor = 0x000000;
        this.contentText.strokeColor = 0xffffff;
        this.contentText.stroke = 2;
        this.contentText.fontFamily = "KaiTi";
        this.contentText.textAlign = egret.HorizontalAlign.LEFT;
        this.contentText.verticalAlign = egret.VerticalAlign.TOP;
        this.addChild(this.contentText);

		let btnTest = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.8), "测试");
        btnTest.setAction(PageCustomStage.click_test);
        this.addChild(btnTest);

        let btnReturn = new ButtonWithText(550, 150, new egret.Point(Main.X * 0.5, Main.Y * 0.9), "返回");
        btnReturn.setAction(PageCustomStage.click_return);
        this.addChild(btnReturn);
    }

	public static click_test(evt:egret.TouchEvent) {
		let stage_test = new Test(PageCustomStage.INSTANCE.contentText.text)
		stage_test.title = "测试关卡"
		stage_test.help_text = "这是你自己创建的测试关卡";
		SelfMachine.INSTANCE.currentStage = stage_test;
		PageCustomStage.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(stage_test);
    }

    public static click_return(evt:egret.TouchEvent) {
		PageCustomStage.INSTANCE.removeChildren();
        Main.getMain().removeChildren();
        Main.getMain().addChild(StageData.chapter_extra);
    }
    
}