class Stage1_EX extends StageBase {

    protected initEmitters() {
		let point1 = new egret.Point(540, 600);
        let em1 = new EmptyEmitter().setPos(point1);

        let up1_1 = 
			new TeleportingUpgrade(
				240, 840,
				480, 720
			)
			.setParentEmitter(em1)
        	.setFreq(2000)
			.setDelay(1950);

		let up1_2 = new RenderUpgrade(TextureNames.FLOWER0, 250, 200).setFreq(50).setParentEmitter(em1).renderOnStage(this);

		let up1_3 =
			new CustomMissileUpgrade(
				(emitter:CustomMissileUpgrade) => {
					let ang = 360 * Math.random()
					for (let theta = ang; theta < ang + 360; theta += 360 / 32) {
						let theta1 = MyUtils.ang2rad(theta);
						let missile = 
							new EllipticalMissile()
								.setTexture(Stage1_EX.randomTexture())
                				.setSize(30, 36)
								.setPos(emitter.getPos())
								.setVelocity(20 * Math.cos(theta1), 20 * Math.sin(theta1));
						missile.addToStage(SelfMachine.INSTANCE.currentStage);
					}
				}
			)
			.setParentEmitter(em1)
        	.setFreq(400);

		let up1_4 = 
			new CustomMissileUpgrade(
				(emitter:CustomMissileUpgrade) => {
					let ang = 2 * Math.PI * Math.random();
					let texture = Stage1_EX.randomTexture2();
					for (let i = 0; i < 3; i++) {
						let v = 12 + 6 * i;
						for (let j = 0; j < 7; j++) {
							let missile = 
								new RoundMissile()
									.setSize(32, 32)
									.setTexture(texture)
									.setPos(emitter.getPos())
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
												missile.setVelocity(40 * Math.cos(theta), 40 * Math.sin(theta))
												missile.setTexture(Stage1_EX.nextTexture(missile.getTexture()));
											}
										)
										.setStartTicks(20)
										.setTriggerTimes(1)
									)
									.addHandler(
										new TickEventHandler(
											(missile:MissileBase) => {
												missile.setTotalVelocity(missile.getVelocity() - 1);
											}
										)
										.setStartTicks(20)
										.setTriggerTimes(40)
									)
									.addHandler(
										new TickEventHandler(
											(missile:MissileBase) => {
												let theta = MissileUtils.getSniperAngle(missile.getPos());
												missile.setVelocity(30 * Math.cos(theta), 30 * Math.sin(theta))
												missile.setTexture(Stage1_EX.nextTexture(missile.getTexture()));
											}
										)
										.setStartTicks(50)
										.setTriggerTimes(1)
									);
							missile.addToStage(SelfMachine.INSTANCE.currentStage);
						}
					}
				}
            )
			.setParentEmitter(em1)
			.setFreq(400)
			.setDelay(2000);
	}

	private static randomTexture() {
		let ran = Math.random();
		return ran < 1/3 ? TextureNames.MISSILE_PETAL1 : ran < 2/3 ? TextureNames.MISSILE_PETAL2 : TextureNames.MISSILE_PETAL3;
	}

	private static randomTexture2() {
		let ran = Math.random();
		return ran < 1/3 ? TextureNames.MISSILE_RED : ran < 2/3 ? TextureNames.MISSILE_BLUE : TextureNames.MISSILE_GREEN;
	}

	private static nextTexture(texture:string) {
		if (texture == TextureNames.MISSILE_RED) return TextureNames.MISSILE_BLUE;
		else if (texture == TextureNames.MISSILE_BLUE) return TextureNames.MISSILE_GREEN;
		else return TextureNames.MISSILE_RED;
	}

}