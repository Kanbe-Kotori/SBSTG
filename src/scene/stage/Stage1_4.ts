class Stage1_4 extends StageBase {
	public static readonly INSTANCE:Stage1_4 = new Stage1_4("1-4", 30);

    protected initEmitters() {
        let point1 = new egret.Point(540, 720);
        let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(TextureNames.FLOWER8, 150, 170).setParentEmitter(em1).renderOnStage(this);
        let up1_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setVelocity(20)
            )
        .setParentEmitter(em1)
        .setFreq(250)
        .setStartAngle(0)
        .setStep(360 / 6)
        .setNumber(6);
		let up1_3 = new EmitterRotateUpgrade().setParentEmitter(up1_2).setTPR(12);
        let up1_4 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setVelocity(25)
            )
        .setParentEmitter(em1)
        .setFreq(200)
        .setStartAngle(0)
        .setStep(360 / 6)
        .setNumber(6);
		let up1_5 = new EmitterRotateUpgrade().setParentEmitter(up1_4).setTPR(-12);
		
		let point2 = new egret.Point(360, 720);
        let em2 = new EmptyEmitter().setPos(point2);
        let up2_1 = new RenderUpgrade(TextureNames.FLOWER1, 120, 90).setParentEmitter(em2).renderOnStage(this);
        let up2_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
				.setVelocity(10)
				.addHandler(
                    new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setVelocity(0,0);
                        }
					)
                    .setTriggerTimes(1)
                    .setStartTicks(15)
                )
				.addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
							let x = SelfMachine.INSTANCE.getX();
        					let y = SelfMachine.INSTANCE.getY();
							let dx = x - missile.getX();
							let dy = y - missile.getY();
                            let dist = Math.sqrt(dx * dx + dy * dy);
							let vx = 12 * dx / dist;
        					let vy = 12 * dy / dist;
                            missile.setVelocity(vx, vy);
                        }
					)
                    .setTriggerTimes(1)
                    .setStartTicks(30)
                )
            )
        .setParentEmitter(em2)
        .setFreq(300)
		.setDelay(1000)
        .setStartAngle(0)
        .setStep(360 / 8)
        .setNumber(8);
		let up2_3 = new EmitterRotateUpgrade().setParentEmitter(up2_2).setTPR(6);

		let point3 = new egret.Point(720, 720);
        let em3 = new EmptyEmitter().setPos(point3);
        let up3_1 = new RenderUpgrade(TextureNames.FLOWER2, 120, 80).setParentEmitter(em3).renderOnStage(this);
        let up3_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
				.setVelocity(10)
				.addHandler(
                    new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setVelocity(0,0);
                        }
					)
                    .setTriggerTimes(1)
                    .setStartTicks(15)
                )
				.addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
							let x = SelfMachine.INSTANCE.getX();
        					let y = SelfMachine.INSTANCE.getY();
							let dx = x - missile.getX();
							let dy = y - missile.getY();
                            let dist = Math.sqrt(dx * dx + dy * dy);
							let vx = 12 * dx / dist;
        					let vy = 12 * dy / dist;
                            missile.setVelocity(vx, vy);
                        }
					)
                    .setTriggerTimes(1)
                    .setStartTicks(30)
                )
            )
        .setParentEmitter(em3)
        .setFreq(300)
		.setDelay(1000)
        .setStartAngle(0)
        .setStep(360 / 8)
        .setNumber(8);
		let up3_3 = new EmitterRotateUpgrade().setParentEmitter(up3_2).setTPR(-6);

	}
}