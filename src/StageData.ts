class StageData {

	public static readonly arrayChapter:Array<PageChapter> = new Array<PageChapter>();
	public static readonly arrayStage:Array<StageBase> = new Array<StageBase>();
	
	public static init() {
		let jiaocheng = new PageChapter(0);
		let chapter1 = new PageChapter(1);
		let chapter2 = new PageChapter(2);
		let chapter3 = new PageChapter(3);

		PageChooseChapter.INSTANCE.addChapter(jiaocheng, "教程", new egret.Point(Main.X * 0.5, Main.Y * 0.15));
		PageChooseChapter.INSTANCE.addChapter(chapter1, "第一章", new egret.Point(Main.X * 0.5, Main.Y * 0.35));
		PageChooseChapter.INSTANCE.addChapter(chapter2, "第二章", new egret.Point(Main.X * 0.5, Main.Y * 0.55));
		PageChooseChapter.INSTANCE.addChapter(chapter3, "第三章", new egret.Point(Main.X * 0.5, Main.Y * 0.75));

		let stage0_1 = new Stage0_1();
		let stage0_2 = new Stage0_2();
		let stage0_3 = new Stage0_3();

		let stage1_1 = new Stage1_1("1-1", 20);
		let stage1_2 = new Stage1_2("1-2", 20);
		let stage1_3 = new Stage1_3("1-3", 25);
		let stage1_4 = new Stage1_4("1-4", 20);
		let stage1_5 = new Stage1_5("1-5", 20);
		let stage1_6 = new Stage1_6("1-6", 30);
		let stage1_ex = new Stage1_EX("1-ex", 30);

		let stage2_1 = new Stage2_1("2-1", 30);
		let stage2_2 = new Stage2_2("2-2", 20);
		let stage2_3 = new Stage2_3("2-3", 20);
		let stage2_4 = new Stage2_4("2-4", 20);
		let stage2_5 = new Stage2_5("2-5", 30);
		let stage2_6 = new Stage2_6("2-6", 30);

		let stage2_ex = new Stage2_EX("2-ex", 30);

		let stageEX_1 = new StageEX_1("ex-1", 30);
		let stageEX_2 = new StageEX_2("ex-2", 30);
		let stageEX_3 = new StageEX_3("ex-3", 30);
		let stageEX_4 = new StageEX_4("ex-4", 30);

		jiaocheng.addStage("0-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		jiaocheng.addStage("0-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		jiaocheng.addStage("0-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));

		chapter1.addStage("1-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		chapter1.addStage("1-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		chapter1.addStage("1-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		chapter1.addStage("1-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));
		chapter1.addStage("1-5", "5", new egret.Point(Main.X * 0.5, Main.Y * 0.4));
		chapter1.addStage("1-6", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.4));
		chapter1.addStage("1-ex", "EX", new egret.Point(Main.X * 0.5, Main.Y * 0.55));

		chapter2.addStage("2-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		chapter2.addStage("2-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		chapter2.addStage("2-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		chapter2.addStage("2-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));
		chapter2.addStage("2-5", "5", new egret.Point(Main.X * 0.5, Main.Y * 0.4));
		chapter2.addStage("2-6", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.4));

		chapter2.addStage("2-ex", "EX", new egret.Point(Main.X * 0.5, Main.Y * 0.55));

		chapter3.addStage("ex-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		chapter3.addStage("ex-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		chapter3.addStage("ex-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		chapter3.addStage("ex-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));

		stage1_1._next_stage = stage1_2;
		stage1_2._next_stage = stage1_3;
		stage1_3._next_stage = stage1_4;
		stage1_4._next_stage = stage1_5;
		stage1_5._next_stage = stage1_6;
		stage1_6._next_stage = stage1_ex;
	
		stage1_2._front_stage = stage1_1;
		stage1_3._front_stage = stage1_2;
		stage1_4._front_stage = stage1_3;
		stage1_5._front_stage = stage1_4;
		stage1_6._front_stage = stage1_5;
		stage1_ex._front_stage = stage1_6;

		stage2_1._next_stage = stage2_2;
		stage2_2._next_stage = stage2_3;
		stage2_3._next_stage = stage2_4;
		stage2_4._next_stage = stage2_5;
		stage2_5._next_stage = stage2_6;
		stage2_6._next_stage = stage2_ex;
	
		stage2_2._front_stage = stage2_1;
		stage2_3._front_stage = stage2_2;
		stage2_4._front_stage = stage2_3;
		stage2_5._front_stage = stage2_4;
		stage2_6._front_stage = stage2_5;
		stage2_ex._front_stage = stage2_6;
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