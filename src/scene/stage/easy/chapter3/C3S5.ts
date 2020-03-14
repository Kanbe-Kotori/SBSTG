class C3S5 extends StageBase {
    public constructor() {
        super("c3s5", 20);
    }

    protected initEmitters() {
		let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
            new SideShooter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(5)
            )
			.setSide(Side.LEFT)
            .setFreq(500)
            .setStartAngle(0)
            .setEndAngle(0)
            .setNumber(3)
            .setExtraVelocity(10)
		)

		launcher1.addLogic(
            new SideShooter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(5)
            )
			.setSide(Side.RIGHT)
            .setFreq(500)
            .setStartAngle(180)
            .setEndAngle(180)
            .setNumber(3)
            .setExtraVelocity(10)
		)
	}
}