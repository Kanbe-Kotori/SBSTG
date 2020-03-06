class C1S4H extends StageBase {
    public constructor() {
        super("c1s4h", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 160, 120).setInitialPos(point1);
		launcher1.addLogic(
			new CustomShooter(
				launcher1,
                (launcher:Launcher) => {
					for (let i = 0; i <= 4; i++) {
						let div = Math.random() * 2 * Math.PI;
						for (let j = 0; j < 32; j++) {
							let v = 3 + 2 * i;
							let theta = j * 2 * Math.PI / 32 + div;
							let missile = new EllipticalMissile()
                			.setSize(30, 36)
                			.setTexture(TextureNames.MISSILE_PETAL1)
							.setVelocity(v * Math.cos(theta), v * Math.sin(theta))
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										missile.setTotalVelocity(missile.getVelocity() - v / 5)
									}
								)
								.setTriggerTimes(5)
							);
                        	missile.addToStage();
						}
					}
				}
			)
			.setFreq(2000)
		)
	}
}