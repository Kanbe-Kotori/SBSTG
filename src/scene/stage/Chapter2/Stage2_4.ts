class Stage2_4 extends StageBase {

	protected initEmitters() {
        let rain = new SideShooter(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setVelocity(20)
				.setSize(36, 36)
                .setExtraPara(MissileUtils.RANDOM_VELOCITY_PARA, 30)
                .setTexture(TextureNames.MISSILE_BLUE)
                .addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
                            let side = missile.getEdge();
                            if (side == Side.LEFT) {
                                missile._img.x += Main.X;
                            } else if (side == Side.RIGHT) {
                                missile._img.x -= Main.X;
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
        .setNumber(2);

		let whirlpool = 
			new CustomShooter(
				(emitter:CustomShooter) => {
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
			.setFreq(100);
	}
}