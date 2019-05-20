class Chapters {

	public static readonly arrayChapter:Array<PageChapter> = new Array<PageChapter>();
	
	public static init() {
		let Chapter1 = new PageChapter("chapter1");
		Chapter1.addStage(Stage1.INSTANCE, "第一节", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		Chapter1.addStage(Stage2.INSTANCE, "第二节", new egret.Point(Main.X * 0.5, Main.Y * 0.55));
		Chapter1.addStage(StageTemp.INSTANCE, "第三节", new egret.Point(Main.X * 0.5, Main.Y * 0.85));
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