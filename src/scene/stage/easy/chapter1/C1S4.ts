class C1S4 extends StageBase {
    public constructor() {
        super("c1s4", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 160, 120).setInitialPos(point1);
		launcher1.addLogic(
			new CustomShooter(
				launcher1,
                (launcher:Launcher) => {
					for (let i = 0; i <= 3; i++) {
						let div = Math.random() * 2 * Math.PI;
						for (let j = 0; j < 24; j++) {
							let v = 24 + 16 * i + 0.01;
							let theta = j * 2 * Math.PI / 24 + div;
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
										missile.setVelocity(15 * Math.cos(theta1), 15 * Math.sin(theta1));
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
			.setFreq(2500)
		)

		launcher1.addLogic(
			new CustomShooter(
				launcher1,
                (launcher:Launcher) => {
					for (let i = 0; i <= 4; i++) {
						let div = Math.random() * 2 * Math.PI;
						for (let j = 0; j < 36; j++) {
							let v = 32 + 16 * i + 0.01;
							let theta = j * 2 * Math.PI / 36 + div;
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
										let v1 = 12 + 3 * i;
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
			.setFreq(2500)
		)
	}
}