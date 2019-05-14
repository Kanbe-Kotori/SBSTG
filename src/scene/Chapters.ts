class Chapters {
	
	public static Chapter1 = new PageChapter("chapter1");

	public static init() {
		Chapters.Chapter1.addStage(Stage1.INSTANCE, "第一节", new egret.Point(Main.X * 0.5, Main.Y * 0.25));
		Chapters.Chapter1.addStage(Stage2.INSTANCE, "第二节", new egret.Point(Main.X * 0.5, Main.Y * 0.55));
		Chapters.Chapter1.addStage(StageTemp.INSTANCE, "第三节", new egret.Point(Main.X * 0.5, Main.Y * 0.85));
	}


}