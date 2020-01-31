class StageData {

	public static readonly arrayChapter:Array<PageChapter> = new Array<PageChapter>();
	public static readonly arrayStage:Array<StageBase> = new Array<StageBase>();

	public static tutorial:PageChapter;
	public static chapter1:PageChapter;
	public static chapter2:PageChapter;
	public static chapter3:PageChapter;

	public static tutorial1:StageTutorial;
	public static tutorial2:StageTutorial;
	public static tutorial3:StageTutorial;

	public static stage1_1:StageBase;
	public static stage1_2:StageBase;
	public static stage1_3:StageBase;
	public static stage1_4:StageBase;
	public static stage1_5:StageBase;
	public static stage1_6:StageBase;
	public static stage1_ex:StageBase;

	public static stage2_1:StageBase;
	public static stage2_2:StageBase;
	public static stage2_3:StageBase;
	public static stage2_4:StageBase;
	public static stage2_5:StageBase;
	public static stage2_6:StageBase;

	public static stage2_ex:StageBase;

	public static stageEX_1:StageBase;
	public static stageEX_2:StageBase;
	public static stageEX_3:StageBase;
	public static stageEX_4:StageBase;
	
	public static init() {
		StageData.initChapters();
		StageData.initStages();
		StageData.addStageToChapers();
		TextHelper.initStageText();
		StageData.initRelations();
	}

	private static initChapters() {
		StageData.tutorial = new PageChapter("教程");
		StageData.chapter1 = new PageChapter("第一章");
		StageData.chapter2 = new PageChapter("第二章");
		StageData.chapter3 = new PageChapter("第三章");

		ModeEasy.INSTANCE.addChapter(StageData.chapter1, new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		ModeEasy.INSTANCE.addChapter(StageData.chapter2, new egret.Point(Main.X * 0.5, Main.Y * 0.45));
		ModeEasy.INSTANCE.addChapter(StageData.chapter3, new egret.Point(Main.X * 0.5, Main.Y * 0.65));
	}

	private static initStages() {
		StageData.tutorial1 = new Tutorial1();
		StageData.tutorial2 = new Tutorial2();
		StageData.tutorial3 = new Tutorial3();

		StageData.stage1_1 = new C1S1();
		StageData.stage1_2 = new C1S2();
		StageData.stage1_3 = new Stage1_3("1-3", 25);
		StageData.stage1_4 = new Stage1_4("1-4", 20);
		StageData.stage1_5 = new Stage1_5("1-5", 20);
		StageData.stage1_6 = new Stage1_6("1-6", 30);
		StageData.stage1_ex = new Stage1_EX("1-ex", 30);

		StageData.stage2_1 = new Stage2_1("2-1", 30);
		StageData.stage2_2 = new Stage2_2("2-2", 20);
		StageData.stage2_3 = new Stage2_3("2-3", 20);
		StageData.stage2_4 = new Stage2_4("2-4", 20);
		StageData.stage2_5 = new Stage2_5("2-5", 30);
		StageData.stage2_6 = new Stage2_6("2-6", 30);

		StageData.stage2_ex = new Stage2_EX("2-ex", 30);

		StageData.stageEX_1 = new StageEX_1("ex-1", 30);
		StageData.stageEX_2 = new StageEX_2("ex-2", 30);
		StageData.stageEX_3 = new StageEX_3("ex-3", 30);
		StageData.stageEX_4 = new StageEX_4("ex-4", 30);
	}

	private static addStageToChapers() {
		StageData.tutorial.addStage("tut1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.tutorial.addStage("tut2", "2", new egret.Point(Main.X * 0.50, Main.Y * 0.25));
		StageData.tutorial.addStage("tut3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));

		StageData.chapter1.addStage("1-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter1.addStage("1-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		StageData.chapter1.addStage("1-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter1.addStage("1-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));
		StageData.chapter1.addStage("1-5", "5", new egret.Point(Main.X * 0.5, Main.Y * 0.4));
		StageData.chapter1.addStage("1-6", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.4));
		StageData.chapter1.addStage("1-ex", "EX", new egret.Point(Main.X * 0.5, Main.Y * 0.55));

		StageData.chapter2.addStage("2-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter2.addStage("2-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		StageData.chapter2.addStage("2-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter2.addStage("2-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));
		StageData.chapter2.addStage("2-5", "5", new egret.Point(Main.X * 0.5, Main.Y * 0.4));
		StageData.chapter2.addStage("2-6", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.4));

		StageData.chapter2.addStage("2-ex", "EX", new egret.Point(Main.X * 0.5, Main.Y * 0.55));

		StageData.chapter3.addStage("ex-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter3.addStage("ex-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		StageData.chapter3.addStage("ex-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter3.addStage("ex-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));
	}

	private static initRelations() {
		StageData.stage1_1.next_stage = StageData.stage1_2;
		StageData.stage1_2.next_stage = StageData.stage1_3;
		StageData.stage1_3.next_stage = StageData.stage1_4;
		StageData.stage1_4.next_stage = StageData.stage1_5;
		StageData.stage1_5.next_stage = StageData.stage1_6;
		StageData.stage1_6.next_stage = StageData.stage1_ex;
	
		StageData.stage1_2.front_stage = StageData.stage1_1;
		StageData.stage1_3.front_stage = StageData.stage1_2;
		StageData.stage1_4.front_stage = StageData.stage1_3;
		StageData.stage1_5.front_stage = StageData.stage1_4;
		StageData.stage1_6.front_stage = StageData.stage1_5;
		StageData.stage1_ex.front_stage = StageData.stage1_6;

		StageData.stage2_1.next_stage = StageData.stage2_2;
		StageData.stage2_2.next_stage = StageData.stage2_3;
		StageData.stage2_3.next_stage = StageData.stage2_4;
		StageData.stage2_4.next_stage = StageData.stage2_5;
		StageData.stage2_5.next_stage = StageData.stage2_6;
		StageData.stage2_6.next_stage = StageData.stage2_ex;
	
		StageData.stage2_2.front_stage = StageData.stage2_1;
		StageData.stage2_3.front_stage = StageData.stage2_2;
		StageData.stage2_4.front_stage = StageData.stage2_3;
		StageData.stage2_5.front_stage = StageData.stage2_4;
		StageData.stage2_6.front_stage = StageData.stage2_5;
		StageData.stage2_ex.front_stage = StageData.stage2_6;
	}

	public static getStage(id:string) {
		for (let i of StageData.arrayStage) {
			if (i.getUniqueID() == id) {
				return i;
			}
		}
		return null;
	}

	public static registerStage(stage:StageBase) {
		StageData.arrayStage.push(stage);
	}
}