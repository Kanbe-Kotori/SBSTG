class CEXS2 extends StageBase {
	public constructor() {
        super("cexs2", 30);
    }

    protected initEmitters() {
		let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
			new CustomShooter(
				launcher1,
				(launcher:Launcher) => {
					let missile = new RoundMissile()
					.setSize(32, 32)
					.setTexture(TextureNames.MISSILE_BLUE)
					.setPos(CEXS2.createPos())
					.setVelocity(0, 0)
					.addHandler(
						new TickEventHandler(
							(missile:MissileBase) => {
								missile.setTexture(TextureNames.MISSILE_HAIL);
								let theta = MissileUtils.getSniperAngle(missile.getPos());
                            	missile.setVelocity(5 * Math.cos(theta), 5 * Math.sin(theta));
                        	}
						)
						.setStartTicks(20)
						.setTriggerTimes(1)
					)
					.addHandler(
						new TickEventHandler(
							(missile:MissileBase) => {
								missile.setTotalVelocity(missile.getVelocity() + 0.5);
                        	}
						)
						.setStartTicks(20)
					)
					.addHandler(
						new EdgeEventHandler(
							(missile:MissileBase) => {
								let point = MyUtils.createReasonablePos(missile.getPos());
								let theta = missile.getDirection() - Math.PI;
								for (let i = 0; i < 2 * Math.PI; i+= 2 * Math.PI / 16) {
									let missile1 = new RoundMissile()
									.setSize(24, 24)
                                    .setTexture(TextureNames.MISSILE_HAIL)
                                    .setPos(point)
                                    .setVelocity(18 * Math.cos(theta + i), 18 * Math.sin(theta + i));
                                	missile1.addToStage();
								}
								missile.setDead();
                        	}
						)
					)
					missile.addToStage();
				}
			)
			.setFreq(400)
		);

		launcher1.addLogic(
			new CustomShooter(
				launcher1,
				(launcher:Launcher) => {
					for (let i = 0; i < 32; i++) {
						let theta = Math.random() * 2 * Math.PI;
						let pos = new egret.Point(540 + 480 * Math.cos(theta), 960 + 480 * Math.sin(theta));
						let phi = (Math.random() - 0.5) * Math.PI + theta;
						let missile = new RoundMissile()
						.setSize(24, 24)
                        .setTexture(TextureNames.MISSILE_BLUE)
						.setPos(pos)
						.setTotalVelocity(0)
						.addHandler(
							new TickEventHandler(
								(missile:MissileBase) => {
									missile.setTexture(TextureNames.MISSILE_HAIL);
									missile.setVelocity(20 * Math.cos(phi), 20 * Math.sin(phi));
                        		}
							)
							.setStartTicks(8)
							.setTriggerTimes(1)
						)
						missile.addToStage();		
					}
				}
			)
			.setFreq(200)
		);
    }

	protected static createPos() {
		while (true) {
			let x = Math.random() * Main.X;
			let y = Math.random() * (Main.BELOW_Y - Main.UPPER_Y) + Main.UPPER_Y;
			let dx = x - 540;
			let dy = y - 960;
			if (Math.sqrt(dx * dx + dy * dy) >= 480) {
				return new egret.Point(x, y);
			}
		}
	}


	
}