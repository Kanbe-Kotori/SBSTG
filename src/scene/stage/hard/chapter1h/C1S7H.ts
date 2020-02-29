class C1S7H extends StageBase {
	public constructor() {
        super("c1s7h", 20);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 600);
		let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER0, 250, 200).setInitialPos(point1);
        launcher1.addLogic(
			new Flash(
				launcher1,
				240, 840,
				480, 720
			)
        	.setFreq(2000)
			.setDelay(1950)
		);

		launcher1.addLogic(
			new RandomShooter(
                launcher1,
				new EllipticalMissile()
				.setTexture(TextureNames.MISSILE_PETAL1)
                .setSize(30, 36)
                .setTotalVelocity(16)
            )
            .setFreq(400)
            .setStartAngle(0)
            .setEndAngle(360)
            .setNumber(8)
            .setExtraVelocity(8)
		);

		launcher1.addLogic(
			new RandomShooter(
                launcher1,
				new EllipticalMissile()
				.setTexture(TextureNames.MISSILE_PETAL2)
                .setSize(30, 36)
                .setTotalVelocity(12)
            )
            .setFreq(400)
            .setStartAngle(0)
            .setEndAngle(360)
            .setNumber(10)
            .setExtraVelocity(8)
		);

		launcher1.addLogic(
			new RandomShooter(
                launcher1,
				new EllipticalMissile()
				.setTexture(TextureNames.MISSILE_PETAL3)
                .setSize(30, 36)
                .setTotalVelocity(8)
            )
            .setFreq(400)
            .setStartAngle(0)
            .setEndAngle(360)
            .setNumber(12)
            .setExtraVelocity(8)
		);

		launcher1.addLogic(
			new CustomShooter(
				launcher1,
				(launcher:Launcher) => {
					let ang = 2 * Math.PI * Math.random();
					let texture = C1S7H.randomTexture();
					for (let i = 0; i < 3; i++) {
						let v = 12 + 6 * i;
						for (let j = 0; j < 7; j++) {
							let missile = 
							new RoundMissile()
							.setSize(32, 32)
							.setTexture(texture)
							.setPos(launcher.getPos())
							.setVelocity(v * Math.cos(ang + j * Math.PI / 12), v * Math.sin(ang + j * Math.PI / 12))
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										missile.setTotalVelocity(missile.getVelocity() - v / 20);
									}
								)
								.setTriggerTimes(20)
							)
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										let theta = MissileUtils.getSniperAngle(missile.getPos());
										missile.setVelocity(45 * Math.cos(theta), 45 * Math.sin(theta))
										missile.setTexture(C1S7H.nextTexture(missile.getTexture()));
									}
								)
								.setStartTicks(20)
								.setTriggerTimes(1)
							)
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										missile.setTotalVelocity(missile.getVelocity() - 1.5);
									}
								)
								.setStartTicks(20)
								.setTriggerTimes(30)
							)
							.addHandler(
								new TickEventHandler(
									(missile:MissileBase) => {
										let theta = MissileUtils.getSniperAngle(missile.getPos());
										missile.setVelocity(30 * Math.cos(theta), 30 * Math.sin(theta))
										missile.setTexture(C1S7H.nextTexture(missile.getTexture()));
									}
								)
								.setStartTicks(50)
								.setTriggerTimes(1)
							);
							missile.addToStage();
						}
					}
				}
        	)
			.setFreq(400)
			.setDelay(2000)
		);
	}

	private static randomTexture() {
		let ran = Math.random();
		return ran < 1/3 ? TextureNames.MISSILE_RED : ran < 2/3 ? TextureNames.MISSILE_BLUE : TextureNames.MISSILE_GREEN;
	}

	private static nextTexture(texture:string) {
		if (texture == TextureNames.MISSILE_RED) return TextureNames.MISSILE_BLUE;
		else if (texture == TextureNames.MISSILE_BLUE) return TextureNames.MISSILE_GREEN;
		else return TextureNames.MISSILE_RED;
	}

}