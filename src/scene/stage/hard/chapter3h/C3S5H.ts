class C3S5H extends StageBase {
    public constructor() {
        super("c3s5h", 20);
    }

    protected initEmitters() {
		let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
            new SideShooter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(10)
            )
			.setSide(Side.LEFT)
            .setFreq(500)
            .setStartAngle(0)
            .setEndAngle(0)
            .setNumber(6)
            .setExtraVelocity(10)
		)
		launcher1.addLogic(
            new SideShooter(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(10)
            )
			.setSide(Side.RIGHT)
            .setFreq(500)
            .setStartAngle(180)
            .setEndAngle(180)
            .setNumber(6)
            .setExtraVelocity(10)
		)

		let point2 = new egret.Point(540, 600);
		let launcher2 = LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 120, 90).setInitialPos(point2);
		launcher2.addLogic(
			new RandomShooter(
				launcher2,
				new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL3)
                .setTotalVelocity(20)
				.addHandler(
					new EdgeEventHandler(
                        (missile:MissileBase) => {
                            let side = missile.getEdge();
                            if (side == Side.TOP) {
                                missile.setPosY(Main.UPPER_Y);
								missile.setVelocityX(0);
								missile.setVelocityY(10 + 10 * Math.random())
                            } else {
                                missile.setDead();
                            }
                        }
                    )
				)
			)
			.setNumber(5)
			.setFreq(250)
            .setStartAngle(180)
            .setEndAngle(360)
            .setExtraVelocity(20)
		)
	}
}