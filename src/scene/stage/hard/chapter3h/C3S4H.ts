class C3S4H extends StageBase {
    public constructor() {
        super("c3s4h", 20);
    }

	protected initEmitters() {
		let launcher1 = LauncherFactory.normalLauncher();
		launcher1.addLogic(
			new CustomShooter(
				launcher1,
				(launcher:Launcher) => {
					let i = 0;
					while (i++ < 2) {
						let point = MissileUtils.createEdgePoint();
						let v = 20 + 10 * Math.random()
						let theta = 0;
						if (point.y == 240) {
							theta = 90;
						} else if(point.y == 1680) {
							theta = 270;
						} else if(point.x == 1080) {
							theta = 180;
						}
						theta += 180 * Math.random() - 90;
						theta = MyUtils.ang2rad(theta);
						let missile = new RoundMissile()
						.setTexture(TextureNames.MISSILE_BLUE)
						.setSize(36, 36)
						.setPos(point)
						.setVelocity(v * Math.cos(theta), v * Math.sin(theta));
						missile.addToStage();
					}
				}
			)
			.setFreq(100)
		);

		launcher1.addLogic(
			new CustomShooter(
				launcher1,
				(launcher:Launcher) => {
					let i = 0;
					while (i++ < 6) {
						let point = MissileUtils.createEdgePoint();
						let missile = new RoundMissile()
						.setRadius(12)
						.setTexture(TextureNames.MISSILE_BLUE)
						.setPos(point)
						.addHandler(
							new TickEventHandler(
								(missile:MissileBase) => {
									let dx = 540 - missile.getX();
									let dy = 900 - missile.getY();
									let d = Math.sqrt(dx * dx + dy * dy);
									if (d < 8) {
										missile.setDead();
										return;
									}
									missile.setVelocity(15 * dx / d, 15 * dy / d);
									missile.addVelocity(0.05 * dy, - 0.05 * dx);
								}
							)
						);
						missile.addToStage();
					}
				}
			)
			.setFreq(100)
		);
	}
}