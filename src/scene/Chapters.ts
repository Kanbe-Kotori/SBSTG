class Chapters {

	public static readonly arrayChapter:Array<PageChapter> = new Array<PageChapter>();
	private static _stage_map:{[index:string]:StageBase} = {};
	
	public static init() {
		let chapter1 = new PageChapter(0);
		let chapter2 = new PageChapter(1);
		let chapter3 = new PageChapter(2);

		PageChooseChapter.INSTANCE.addChapter(chapter1, "第一章", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		PageChooseChapter.INSTANCE.addChapter(chapter2, "第二章", new egret.Point(Main.X * 0.5, Main.Y * 0.45));
		PageChooseChapter.INSTANCE.addChapter(chapter3, "第三章", new egret.Point(Main.X * 0.5, Main.Y * 0.65));

		let stage1_1 = new Stage1_1("1-1", 30);
		let stage1_2 = new Stage1_2("1-2", 30);
		let stage1_3 = new Stage1_3("1-3", 30);
		let stage1_4 = new Stage1_4("1-4", 30);
		let stage1_5 = new Stage1_5("1-5", 30);
		let stage1_6 = new Stage1_6("1-6", 30);

		let stage2_1 = new Stage2_1("2-1", 30);
		let stage2_2 = new Stage2_2("2-2", 30);
		let stage2_3 = new Stage2_3("2-3", 30);

		chapter1.addStage("1-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		chapter1.addStage("1-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		chapter1.addStage("1-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		chapter1.addStage("1-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));
		chapter1.addStage("1-5", "5", new egret.Point(Main.X * 0.5, Main.Y * 0.4));
		chapter1.addStage("1-6", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.4));

		chapter2.addStage("2-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		chapter2.addStage("2-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		chapter2.addStage("2-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));

		chapter3.addStage("test", "T1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		chapter3.addStage("test2", "T2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		chapter3.addStage("test3", "T3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));

		stage1_1._next_stage = stage1_2;
		stage1_2._next_stage = stage1_3;
		stage1_3._next_stage = stage1_4;
		stage1_4._next_stage = stage1_5;
		stage1_5._next_stage = stage1_6;
	
		stage1_2._front_stage = stage1_1;
		stage1_3._front_stage = stage1_2;
		stage1_4._front_stage = stage1_3;
		stage1_5._front_stage = stage1_4;
		stage1_6._front_stage = stage1_5;
	}

	public static getStage(id:string) {
		return Chapters._stage_map[id];
	}

	public static registerStage(id:string, stage:StageBase) {
		Chapters._stage_map[id] = stage;
	}
}