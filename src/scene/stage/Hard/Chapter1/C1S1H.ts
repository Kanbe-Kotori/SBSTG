class C1S1H extends StageBase {
    public constructor() {
        super("c1s1h", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(Main.X * 0.2, 300);
		let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(point1);
        launcher1.addLogic(
            new Sniper(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
            )
            .setNumber(7)
            .setStep(15)
            .setDiv(1)
            .setFreq(300)
        );

		let point2 = new egret.Point(Main.X * 0.4, 300);
		let launcher2 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(point2);
        launcher2.addLogic( 
            new Sniper(
                launcher2,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
            )
            .setNumber(7)
            .setStep(15)
            .setDiv(1)
            .setFreq(300)
        );

		let point3 = new egret.Point(Main.X * 0.6, 300);
		let launcher3 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(point3);
        launcher3.addLogic( 
            new Sniper(
                launcher3,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
            )
            .setNumber(7)
            .setStep(15)
            .setDiv(1)
            .setFreq(300)
        );

		let point4 = new egret.Point(Main.X * 0.8, 300);
		let launcher4 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(point4);
        launcher4.addLogic( 
            new Sniper(
                launcher4,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
            )
            .setNumber(7)
            .setStep(15)
            .setDiv(1)
            .setFreq(300)
        );
	}
}