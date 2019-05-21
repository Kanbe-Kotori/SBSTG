class Chapters {

	public static readonly arrayChapter:Array<PageChapter> = new Array<PageChapter>();
	
	public static init() {
		let Chapter1 = new PageChapter("chapter1");
		let Chapter2 = new PageChapter("chapter2");
		PageChooseChapter.INSTANCE.addChapter(Chapter1, "第一章", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		PageChooseChapter.INSTANCE.addChapter(Chapter2, "第二章", new egret.Point(Main.X * 0.5, Main.Y * 0.5));

		Chapter1.addStage(Stage1_1.INSTANCE, "第一节", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		Chapter1.addStage(Stage1_2.INSTANCE, "第二节", new egret.Point(Main.X * 0.5, Main.Y * 0.5));

		Chapter2.addStage(Stage2_1.INSTANCE, "第一节", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		Chapter2.addStage(StageTemp.INSTANCE, "Test", new egret.Point(Main.X * 0.5, Main.Y * 0.5));
		Chapter2.addStage(StageTemp2.INSTANCE, "Test2", new egret.Point(Main.X * 0.5, Main.Y * 0.75));
	}

	public static getChapter(name:string) {
		for (let i of Chapters.arrayChapter) {
			if (i.getName() == name) {
				return i;
			}
		}
		return null;
	}
}