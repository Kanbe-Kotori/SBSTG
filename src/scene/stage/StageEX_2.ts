class StageEX_2 extends StageBase {

    protected initEmitters() {
        let hail = new CustomMissileUpgrade(
			(emitter:CustomMissileUpgrade) => {
				let missile = new RoundMissile()
					.setSize(32, 32)
					.setTexture(TextureNames.MISSILE_BLUE)
					.setPos(StageEX_2.createPos())
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
                                	missile1.addToStage(SelfMachine.INSTANCE.currentStage);
								}
								missile.setDead();
                        	}
						)
					)
				missile.addToStage(SelfMachine.INSTANCE.currentStage);
			}
		)
		.setFreq(400);
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