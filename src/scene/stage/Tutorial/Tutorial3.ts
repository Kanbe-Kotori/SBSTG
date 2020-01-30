class Tutorial3 extends StageTutorial {
    public constructor() {
        super("tut3", 10, "本关学习自机狙，请点击右下角的i按钮查看帮助。");
    }
    
    protected initEmitters() {
		let point1 = new egret.Point(Main.X * 0.5, 300);
		let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(point1);
        launcher1.addLogic(
            new Sniper(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setTotalVelocity(10)
            )
            .setFreq(200)
        );
	}
}