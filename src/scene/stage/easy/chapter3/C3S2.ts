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
                .setTexture(TextureNames.MISSILE_BLUE)
                .setTotalVelocity(15)
                .addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
                            let side = missile.getEdge();
                            if (side == Side.LEFT) {
                                missile.setPosX(missile.getX() + Main.X);
                            } else if (side == Side.RIGHT) {
                                missile.setPosX(missile.getX() - Main.X);
                            } else {
                                missile.setDead();
                            }
                        }
                    )
                )
            )
            .setFreq(250)
            .setStartAngle(75)
            .setEndAngle(105)
            .setNumber(5)
            .setExtraVelocity(5)
        );

		launcher1.addLogic(
            new SideShooter(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_BLUE)
                .setRadius(18)
                .setTotalVelocity(20)
                .addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
                            let side = missile.getEdge();
                            if (side == Side.LEFT) {
                                missile.setPosX(missile.getX() + Main.X);
                            } else if (side == Side.RIGHT) {
                                missile.setPosX(missile.getX() - Main.X);
                            } else if (side == Side.BOTTOM) {
                                let theta = (1 + Math.random()) * Math.PI;
                                let missile1 = new RoundMissile()
                                .setPos(MyUtils.createReasonablePos(missile.getPos()))
                                .setVelocity(8 * Math.cos(theta), 8 * Math.sin(theta))
                                .setTexture(TextureNames.MISSILE_STANDARD)
                                .setSize(36, 36)
                                .addHandler(
									new TickEventHandler(
										(missile:MissileBase) => {
											missile.setDead();
										}
									)
									.setStartTicks(90)
									.setTriggerTimes(1)
								);
                                missile1.addToStage();
                                missile.setDead();
                            } else {
                                missile.setDead();
                            }
                        }
                    )
                )
            )
            .setFreq(250)
            .setStartAngle(85)
            .setEndAngle(95)
            .setNumber(2)
            .setExtraVelocity(10)
        );
	}
}