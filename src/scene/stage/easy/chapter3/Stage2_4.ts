class Stage2_4 extends StageBase {

	protected initEmitters() {
        let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
			new SideShooter(
				launcher1,
            	new RoundMissile()
				.setTexture(TextureNames.MISSILE_BLUE)
				.setSize(36, 36)
                .setTotalVelocity(20)                
                .addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
                            let side = missile.getEdge();
                            if (side == Side.LEFT) {
                                missile.img.x += Main.X;
                            } else if (side == Side.RIGHT) {
                                missile.img.x -= Main.X;
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
			.setNumber(2)
			.setExtraVelocity(10)
		);

		launcher1.addLogic(
			new CustomShooter(
				launcher1,
				(launcher:Launcher) => {
					let i = 0;
					while (i++ < 5) {
						let point = MissileUtils.createEdgePoint();
						let missile = new RoundMissile()
						.setRadius(12)
						.setTexture(TextureNames.MISSILE_BLUE)
						.setPos(point)
						.addHandler(
							new TickEventHandler(
								(missile:MissileBase) => {
									let dx = 540 - missile.getX();
									let dy = 600 - missile.getY();
									let d = Math.sqrt(dx * dx + dy * dy);
									if (d < 8) {
										missile.setDead();
										return;
									}
									missile.setVelocity(15 * dx / d, 15 * dy / d);
									missile.addVelocity(0.04 * dy, - 0.04 * dx);
								}
							)
						);
						missile.addToStage(SelfMachine.INSTANCE.currentStage);
					}
				}
			)
			.setFreq(100)
		);
	}
}