class StageData {

	public static readonly arrayChapter:Array<PageChapter> = new Array<PageChapter>();
	public static readonly arrayStage:Array<StageBase> = new Array<StageBase>();

	public static chapter_tutorial:PageChapter;
	public static chapter_extra:PageChapter;
	public static chapter1:PageChapter;
	public static chapter2:PageChapter;
	public static chapter3:PageChapter;
	public static chapter1h:PageChapter;
	public static chapter2h:PageChapter;
	public static chapter3h:PageChapter;

	public static tutorial1:StageTutorial;
	public static tutorial2:StageTutorial;
	public static tutorial3:StageTutorial;
	public static tutorial4:StageTutorial;
	public static tutorial5:StageTutorial;
	public static tutorial6:StageTutorial;

	public static stage1_1:StageTutorial;
	public static stage1_2:StageBase;
	public static stage1_3:StageBase;
	public static stage1_4:StageBase;
	public static stage1_5:StageBase;
	public static stage1_6:StageBase;
	public static stage1_7:StageBase;

	public static stage2_1:StageBase;
	public static stage2_2:StageBase;
	public static stage2_3:StageBase;
	public static stage2_4:StageBase;
	public static stage2_5:StageBase;
	public static stage2_6:StageBase;
	public static stage2_ex:StageBase;

	public static stage3_1:StageBase;
	public static stage3_2:StageBase;
	public static stage3_3:StageBase;
	public static stage3_4:StageBase;
	public static stage3_5:StageBase;
	public static stage3_6:StageBase;
	public static stage3_7:StageBase;

	public static stage1_1h:StageTutorial;
	public static stage1_2h:StageBase;
	public static stage1_3h:StageBase;
	public static stage1_4h:StageBase;
	public static stage1_5h:StageBase;
	public static stage1_6h:StageBase;
	public static stage1_7h:StageBase;

	public static stage2_1h:StageBase;
	public static stage2_2h:StageBase;
	public static stage2_3h:StageBase;
	public static stage2_4h:StageBase;
	public static stage2_7h:StageBase;
	
	public static stage3_1h:StageBase;
	public static stage3_2h:StageBase;
	public static stage3_3h:StageBase;
	public static stage3_7h:StageBase;

	public static stageEX_1:StageBase;
	public static stageEX_2:StageBase;
	public static stageEX_3:StageBase;
	public static stageEX_4:StageBase;
	public static stageEX_5:StageBase;
	
	public static init() {
		StageData.initChapters();
		StageData.initStages();
		StageData.addStageToChapers();
		TextHelper.initStageText();
		StageData.initRelations();
	}

	private static initChapters() {
		StageData.chapter_tutorial = new PageChapter("教程");
		StageData.chapter_extra = new PageChapter("额外关卡");
		StageData.chapter1 = new PageChapter("第一章");
		StageData.chapter2 = new PageChapter("第二章");
		StageData.chapter3 = new PageChapter("第三章");
		StageData.chapter1h = new PageChapter("第一章 困难");
		StageData.chapter2h = new PageChapter("第二章 困难");
		StageData.chapter3h = new PageChapter("第三章 困难");

		ModeEasy.INSTANCE.addChapter(StageData.chapter1, new egret.Point(Main.X * 0.5, Main.Y * 0.2));
		ModeEasy.INSTANCE.addChapter(StageData.chapter2, new egret.Point(Main.X * 0.5, Main.Y * 0.4));
		ModeEasy.INSTANCE.addChapter(StageData.chapter3, new egret.Point(Main.X * 0.5, Main.Y * 0.6));

		ModeHard.INSTANCE.addChapter(StageData.chapter1h, new egret.Point(Main.X * 0.5, Main.Y * 0.2));
		ModeHard.INSTANCE.addChapter(StageData.chapter2h, new egret.Point(Main.X * 0.5, Main.Y * 0.4));
		ModeHard.INSTANCE.addChapter(StageData.chapter3h, new egret.Point(Main.X * 0.5, Main.Y * 0.6));		
	}

	private static initStages() {
		StageData.tutorial1 = new Tutorial1();
		StageData.tutorial2 = new Tutorial2();
		StageData.tutorial3 = new Tutorial3();
		StageData.tutorial4 = new Tutorial4();
		StageData.tutorial5 = new Tutorial5();
		StageData.tutorial6 = new Tutorial6();

		StageData.stage1_1 = new C1S1();
		StageData.stage1_2 = new C1S2();
		StageData.stage1_3 = new C1S3();
		StageData.stage1_4 = new C1S4();
		StageData.stage1_5 = new C1S5();
		StageData.stage1_6 = new C1S6();
		StageData.stage1_7 = new C1S7();

		StageData.stage2_1 = new C2S1();
		StageData.stage2_3 = new C2S3();
		StageData.stage2_4 = new C2S4();

		StageData.stage3_1 = new C3S1();
		//StageData.stage3_2 = new C3S1();
		StageData.stage3_3 = new C3S3();
		StageData.stage3_4 = new C3S4();
		//StageData.stage3_5 = new C3S2H();
		StageData.stage3_6 = new C3S6();
		StageData.stage3_7 = new C3S7();

		StageData.stage1_1h = new C1S1H();
		StageData.stage1_2h = new C1S2H();
		StageData.stage1_3h = new C1S3H();
		StageData.stage1_4h = new C1S4H();
		StageData.stage1_5h = new C1S5H();
		StageData.stage1_6h = new C1S6H();
		StageData.stage1_7h = new C1S7H();

		StageData.stage2_1h = new C2S1H();
		StageData.stage2_3h = new C2S3H();
		StageData.stage2_4h = new C2S4H();
		StageData.stage2_7h = new C2S7H();

		StageData.stage3_1h = new C3S1H();
		StageData.stage3_2h = new C3S2H();
		StageData.stage3_3h = new C3S3H();
		StageData.stage3_7h = new C3S7H();

		StageData.stageEX_1 = new StageEX_1("ex-1", 30);
		StageData.stageEX_2 = new CEXS2();
		//StageData.stageEX_3 = ;
		//StageData.stageEX_4 = ;
		StageData.stageEX_5 = new CEXS5();
	}

	private static addStageToChapers() {
		StageData.chapter_tutorial.addStage("tut1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter_tutorial.addStage("tut2", "2", new egret.Point(Main.X * 0.50, Main.Y * 0.25));
		StageData.chapter_tutorial.addStage("tut3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter_tutorial.addStage("tut4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.40));
		StageData.chapter_tutorial.addStage("tut5", "5", new egret.Point(Main.X * 0.50, Main.Y * 0.40));
		StageData.chapter_tutorial.addStage("tut6", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.40));

		StageData.chapter1.addStage("c1s1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter1.addStage("c1s2", "2", new egret.Point(Main.X * 0.50, Main.Y * 0.25));
		StageData.chapter1.addStage("c1s3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter1.addStage("c1s4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.40));
		StageData.chapter1.addStage("c1s5", "5", new egret.Point(Main.X * 0.50, Main.Y * 0.40));
		StageData.chapter1.addStage("c1s6", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.40));
		StageData.chapter1.addStage("c1s7", "ex", new egret.Point(Main.X * 0.50, Main.Y * 0.55));

		StageData.chapter2.addStage("c2s1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter2.addStage("c2s3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter2.addStage("c2s4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.40));

		StageData.chapter3.addStage("c3s1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		//StageData.chapter3.addStage("c3s2", "2", new egret.Point(Main.X * 0.50, Main.Y * 0.25));
		StageData.chapter3.addStage("c3s3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter3.addStage("c3s4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.40));
		//StageData.chapter3.addStage("c3s5", "5", new egret.Point(Main.X * 0.50, Main.Y * 0.40));
		StageData.chapter3.addStage("c3s6", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.40));
		StageData.chapter3.addStage("c3s7", "EX", new egret.Point(Main.X * 0.50, Main.Y * 0.55));

		StageData.chapter_extra.addStage("ex-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter_extra.addStage("cexs2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		//StageData.chapter_extra.addStage("ex-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		//StageData.chapter_extra.addStage("ex-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));
		StageData.chapter_extra.addStage("cexs5", "5", new egret.Point(Main.X * 0.50, Main.Y * 0.4));

		StageData.chapter1h.addStage("c1s1h", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter1h.addStage("c1s2h", "2", new egret.Point(Main.X * 0.50, Main.Y * 0.25));
		StageData.chapter1h.addStage("c1s3h", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter1h.addStage("c1s4h", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.40));
		StageData.chapter1h.addStage("c1s5h", "5", new egret.Point(Main.X * 0.50, Main.Y * 0.40));
		StageData.chapter1h.addStage("c1s6h", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.40));
		StageData.chapter1h.addStage("c1s7h", "EX", new egret.Point(Main.X * 0.50, Main.Y * 0.55));

		StageData.chapter2h.addStage("c2s1h", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter2h.addStage("c2s3h", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter2h.addStage("c2s4h", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.40));
		StageData.chapter2h.addStage("c2s7h", "EX", new egret.Point(Main.X * 0.50, Main.Y * 0.55));

		StageData.chapter3h.addStage("c3s1h", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		StageData.chapter3h.addStage("c3s2h", "2", new egret.Point(Main.X * 0.50, Main.Y * 0.25));
		StageData.chapter3h.addStage("c3s3h", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		StageData.chapter3h.addStage("c3s7h", "EX", new egret.Point(Main.X * 0.50, Main.Y * 0.55));
	}

	private static initRelations() {
		StageData.stage1_1.next_stage = StageData.stage1_2;
		StageData.stage1_2.next_stage = StageData.stage1_3;
		StageData.stage1_3.next_stage = StageData.stage1_4;
		StageData.stage1_4.next_stage = StageData.stage1_5;
		StageData.stage1_5.next_stage = StageData.stage1_6;
		StageData.stage1_6.next_stage = StageData.stage1_7;
	
		StageData.stage1_2.front_stage = StageData.stage1_1;
		StageData.stage1_3.front_stage = StageData.stage1_2;
		StageData.stage1_4.front_stage = StageData.stage1_3;
		StageData.stage1_5.front_stage = StageData.stage1_4;
		StageData.stage1_6.front_stage = StageData.stage1_5;
		StageData.stage1_7.front_stage = StageData.stage1_6;

		/*StageData.stage2_1.next_stage = StageData.stage2_2;
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
		StageData.stage2_ex.front_stage = StageData.stage2_6;*/
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