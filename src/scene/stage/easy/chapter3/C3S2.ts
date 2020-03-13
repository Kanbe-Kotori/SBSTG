class C3S2 extends StageBase {
    public constructor() {
        super("c3s2", 20);
    }

    protected initEmitters() {
		let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
            new SideShooter(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_HAIL)
                .setTotalVelocity(6)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
							let v = missile.getVelocity() + 2 * Math.random() - 1;
							v = Math.max(v, 1);
							v = Math.min(v, 12);
							missile.setTotalVelocity(v);
                        }
                    )
                )
            )
            .setFreq(50)
            .setStartAngle(85)
            .setEndAngle(95)
            .setNumber(1)
		)
	}
}