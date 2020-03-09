class C1S4H extends StageBase {
    public constructor() {
        super("c1s4h", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 690);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 160, 120).setInitialPos(point1);
		launcher1.addLogic(
			new CustomShooter(
				launcher1,
                (launcher:Launcher) => {
					for (let i = 0; i <= 4; i++) {
						let div = Math.random() * 2 * Math.PI;
						for (let j = 0; j < 48; j++) {
							let v = 24 + 16 * i + 0.01;
							let theta = j * 2 * Math.PI / 48 + div;
							let missile = new EllipticalMissile()
                			.setSize(30, 36)
                			.setTexture(TextureNames.MISSILE_PETAL2)
							.setPos(launcher.getPos())
							.setVelocity(v * Math.cos(theta), v * Math.sin(theta))
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										missile.setTotalVelocity(missile.getVelocity() - (3 + 2 * i))
									}
								)
								.setTriggerTimes(8)
							)
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										let theta1 = MissileUtils.getSniperAngle(missile.getPos());
										missile.setVelocity(20 * Math.cos(theta1), 20 * Math.sin(theta1));
									}
								)
								.setTriggerTimes(1)
								.setStartTicks(20)
							)
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										missile.setTotalVelocity(missile.getVelocity() + 1);
									}
								)
								.setTriggerTimes(20)
								.setStartTicks(20)
							);
                        	missile.addToStage();
						}
					}
				}
			)
			.setFreq(1600)
		)

		launcher1.addLogic(
			new CustomShooter(
				launcher1,
                (launcher:Launcher) => {
					for (let i = 0; i <= 4; i++) {
						let div = Math.random() * 2 * Math.PI;
						for (let j = 0; j < 72; j++) {
							let v = 32 + 16 * i + 0.01;
							let theta = j * 2 * Math.PI / 72 + div;
							let missile = new RoundMissile()
                			.setTexture(TextureNames.MISSILE_RED)
							.setPos(launcher.getPos())
							.setVelocity(v * Math.cos(theta), v * Math.sin(theta))
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										missile.setTotalVelocity(missile.getVelocity() - (4 + 2 * i))
									}
								)
								.setTriggerTimes(8)
							)
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										let theta1 = theta + (Math.random() - 0.5) * Math.PI;
										let v1 = 12 + 4 * i;
										missile.setVelocity(v1 * Math.cos(theta1), v1 * Math.sin(theta1));
									}
								)
								.setTriggerTimes(1)
								.setStartTicks(20)
							)
                        	missile.addToStage();
						}
					}
				}
			)
			.setFreq(1600)
		)
	}
}