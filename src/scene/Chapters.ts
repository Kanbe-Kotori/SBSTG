class Chapters {

	public static readonly arrayChapter:Array<PageChapter> = new Array<PageChapter>();
	private static _stage_map:{[index:string]:StageBase} = {};
	
	public static init() {
		let Chapter1 = new PageChapter("荷塘与自机狙");
		let Chapter2 = new PageChapter("雨与随机弹");
		PageChooseChapter.INSTANCE.addChapter(Chapter1, "第一章", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		PageChooseChapter.INSTANCE.addChapter(Chapter2, "第二章", new egret.Point(Main.X * 0.5, Main.Y * 0.5));

		Chapter1.addStage("1-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		Chapter1.addStage("1-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		Chapter1.addStage("1-3", "3", new egret.Point(Main.X * 0.75, Main.Y * 0.25));
		Chapter1.addStage("1-4", "4", new egret.Point(Main.X * 0.25, Main.Y * 0.4));
		Chapter1.addStage("1-5", "5", new egret.Point(Main.X * 0.5, Main.Y * 0.4));

		Chapter2.addStage("2-1", "1", new egret.Point(Main.X * 0.25, Main.Y * 0.25));
		Chapter2.addStage("2-2", "2", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		Chapter2.addStage("test", "Test1", new egret.Point(Main.X * 0.25, Main.Y * 0.5));
		Chapter2.addStage("test2", "Test2", new egret.Point(Main.X * 0.5, Main.Y * 0.5));
	}

	public static getChapter(name:string) {
		for (let i of Chapters.arrayChapter) {
			if (i.getName() == name) {
				return i;
			}
		}
		return null;
	}

	public static getStage(id:string) {
		return Chapters._stage_map[id];
	}

	public static registerStage(id:string, stage:StageBase) {
		Chapters._stage_map[id] = stage;
	}
}