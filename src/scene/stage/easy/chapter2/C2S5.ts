class C2S5 extends StageBase {
    public constructor() {
        super("c2s5", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 160, 120).setInitialPos(point1);
        launcher1.addLogic(
            new Scatter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(25)
            )
            .setFreq(1000)
            .setStartAngle(85)
            .setStep(270 / 90)
            .setNumber(91)
        );
        launcher1.addLogic(
            new Scatter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(25)
            )
            .setFreq(1000)
            .setDelay(500)
            .setStartAngle(95)
            .setStep(-270 / 90)
            .setNumber(91)
        );
	}
}