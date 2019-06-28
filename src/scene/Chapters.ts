class Chapters {

	public static readonly arrayChapter:Array<PageChapter> = new Array<PageChapter>();
	private static _stage_map:{[index:string]:StageBase} = {};
	
	public static init() {
		let Chapter1 = new PageChapter(0);
		let Chapter2 = new PageChapter(1);
		let Chapter3 = new PageChapter(2);
		PageChooseChapter.INSTANCE.addChapter(Chapter1, "第一章", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		PageChooseChapter.INSTANCE.addChapter(Chapter2, "第二章", new egret.Point(Main.X * 0.5, Main.Y * 0.45));
		PageChooseChapter.INSTANCE.addChapter(Chapter3, "第三章", new egret.Point(Main.X * 0.5, Main.Y * 0.65));

		Chapter1.addStage("1-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		Chapter1.addStage("1-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		Chapter1.addStage("1-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		Chapter1.addStage("1-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));
		Chapter1.addStage("1-5", "5", new egret.Point(Main.X * 0.5, Main.Y * 0.4));
		Chapter1.addStage("1-6", "6", new egret.Point(Main.X * 0.75, Main.Y * 0.4));

		Chapter2.addStage("2-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		Chapter2.addStage("2-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		Chapter2.addStage("2-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));

		Chapter3.addStage("test", "T1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		Chapter3.addStage("test2", "T2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		Chapter3.addStage("test3", "T3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
	}

	public static getStage(id:string) {
		return Chapters._stage_map[id];
	}

	public static registerStage(id:string, stage:StageBase) {
		Chapters._stage_map[id] = stage;
	}
}