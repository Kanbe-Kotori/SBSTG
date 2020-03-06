class Tutorial2 extends StageTutorial {
    public constructor() {
        super("tut2", 10);
    }
    
    protected initEmitters() {
		let point1 = new egret.Point(Main.X * 0.5, 300);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(point1);
        launcher1.addLogic(
            new Scatter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
            )
            .setFreq(400)
            .setStartAngle(0)
            .setStep(4)
            .setNumber(90)
        );
	}
}