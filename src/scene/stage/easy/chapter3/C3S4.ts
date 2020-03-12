class C3S4 extends StageBase {
	public constructor() {
        super("c3s4", 20);
    }

	protected initEmitters() {
        let launcher1 = LauncherFactory.normalLauncher();
		launcher1.addLogic(
			new CustomShooter(
				launcher1,
				(launcher:Launcher) => {
					let i = 0;
					while (i++ < 4) {
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
									missile.setVelocity(12 * dx / d, 12 * dy / d);
									missile.addVelocity(0.04 * dy, - 0.04 * dx);
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