class Stage2_6 extends StageBase {

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
                                missile.addToStage();
                                missile.setDead();
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
					let missile = Stage2_6.initRandomMissile();
					missile.addToStage();
				}
			)
			.setFreq(250)
		);
	}

	protected static initRandomMissile():MissileBase {
		let flag = 3 * Math.random();
		let missile = null;
		if (flag <= 1) {
			missile = new EllipticalMissile()
				.setSize(120, 90)
				.setTexture(TextureNames.FLOWER1)
				.setPos(new egret.Point(Main.X * Math.random(), Main.UPPER_Y))
				.setVelocity(0, 10 + 10 * Math.random())
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            for (let j = 0; j < 9; j++) {
								let theta = MissileUtils.getSniperAngle(missile.getPos()) + MyUtils.ang2rad(40 * j);
								let missile1 = new EllipticalMissile()
									.setSize(30, 36)
									.setTexture(TextureNames.MISSILE_PETAL2)
									.setPos(missile.getPos())
									.setVelocity(10 * Math.cos(theta), 10 * Math.sin(theta))
									.addHandler(
										new TickEventHandler(
											(missile:MissileBase) => {
												missile.setTotalVelocity(missile.getVelocity() + 0.5);
											}
										)
										.setTriggerTimes(40)
									)
									missile.addToStage();
								}
							missile.setDead();
                        }
					)
					.setStartTicks(30)
					.setTriggerTimes(1)
				)
		} else if (flag <= 2) {
			missile = new EllipticalMissile()
				.setSize(80, 120)
				.setTexture(TextureNames.FLOWER3)
				.setPos(new egret.Point(Main.X * Math.random(), Main.UPPER_Y))
				.setVelocity(0, 15 + 10 * Math.random())
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            for (let j = 0; j < 12; j++) {
								let theta = MissileUtils.getSniperAngle(missile.getPos()) + MyUtils.ang2rad(30 * j);
								let missile1 = new RoundMissile()
									.setRadius(12)
									.setTexture(TextureNames.MISSILE_LIANZI)
									.setPos(missile.getPos())
									.setVelocity(40 * Math.cos(theta), 40 * Math.sin(theta))
									.addHandler(
										new TickEventHandler(
											(missile:MissileBase) => {
												missile.setTotalVelocity(missile.getVelocity() - 1);
											}
										)
										.setTriggerTimes(30)
									)
									missile.addToStage();
								}
							missile.setDead();
                        }
					)
					.setStartTicks(20)
					.setTriggerTimes(1)
				)
		} else if (flag <= 3) {
			missile = new EllipticalMissile()
				.setSize(90, 100)
				.setTexture(TextureNames.FLOWER8)
				.setPos(new egret.Point(Main.X * Math.random(), Main.UPPER_Y))
				.setVelocity(0, 5 + 10 * Math.random())
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            for (let j = 0; j < 18; j++) {
								let theta = MissileUtils.getSniperAngle(missile.getPos()) + MyUtils.ang2rad(20 * j);
								let missile1 = new RoundMissile()
									.setRadius(12)
									.setTexture(TextureNames.MISSILE_PETAL4)
									.setPos(missile.getPos())
									.setVelocity(15 * Math.cos(theta), 15 * Math.sin(theta))
									missile.addToStage();
								}
							missile.setDead();
                        }
					)
					.setStartTicks(40)
					.setTriggerTimes(1)
				)
		}
		
		return missile;
	}
}