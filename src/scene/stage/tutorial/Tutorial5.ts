class Tutorial5 extends StageTutorial {
    public constructor() {
        super("tut5", 10);
    }
    
    protected initEmitters() {
		let point1 = new egret.Point(Main.X * 0.5, 300);
		let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(point1);
        launcher1.addLogic(
            new Sniper(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(20)
            )
            .setFreq(200)
        );
	}
}