class Stage1_4 extends StageBase {

    protected initEmitters() {
        let point1 = new egret.Point(540, 720);
        let em1 = new Launcher().setPos(point1);
        let up1_1 = new RenderLogic(TextureNames.FLOWER8, 150, 170).setParentEmitter(em1).renderOnStage(this);
        let up1_2 = new Scatter(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setVelocity(20)
            )
        .setParentEmitter(em1)
        .setFreq(150)
        .setStartAngle(0)
        .setStep(360 / 6)
        .setNumber(6);
		let up1_3 = new ScatterRotate().setParentEmitter(up1_2).setTPR(12);
        let up1_4 = new Scatter(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setVelocity(20)
            )
        .setParentEmitter(em1)
        .setFreq(150)
        .setStartAngle(0)
        .setStep(360 / 6)
        .setNumber(6);
		let up1_5 = new ScatterRotate().setParentEmitter(up1_4).setTPR(-12);
		
		let point2 = new egret.Point(360, 720);
        let em2 = new Launcher().setPos(point2);
        let up2_1 = new RenderLogic(TextureNames.FLOWER1, 120, 90).setParentEmitter(em2).renderOnStage(this);
        let up2_2 = new Scatter(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
				.setVelocity(15)
				.addHandler(
                    new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 1);
                        }
					)
                    .setTriggerTimes(15)
                )
				.addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
							let x = SelfMachine.INSTANCE.getX();
        					let y = SelfMachine.INSTANCE.getY();
							let dx = x - missile.getX();
							let dy = y - missile.getY();
                            let dist = Math.sqrt(dx * dx + dy * dy);
							let vx = 10 * dx / dist;
        					let vy = 10 * dy / dist;
                            missile.setVelocity(vx, vy);
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
                )
            )
        .setParentEmitter(em2)
        .setFreq(300)
		.setDelay(1000)
        .setStartAngle(0)
        .setStep(360 / 6)
        .setNumber(6);
		let up2_3 = new ScatterRotate().setParentEmitter(up2_2).setTPR(4);

		let point3 = new egret.Point(720, 720);
        let em3 = new Launcher().setPos(point3);
        let up3_1 = new RenderLogic(TextureNames.FLOWER2, 120, 80).setParentEmitter(em3).renderOnStage(this);
        let up3_2 = new Scatter(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
				.setVelocity(15)
				.addHandler(
                    new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 1);
                        }
					)
                    .setTriggerTimes(15)
                )
				.addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
							let x = SelfMachine.INSTANCE.getX();
        					let y = SelfMachine.INSTANCE.getY();
							let dx = x - missile.getX();
							let dy = y - missile.getY();
                            let dist = Math.sqrt(dx * dx + dy * dy);
							let vx = 10 * dx / dist;
        					let vy = 10 * dy / dist;
                            missile.setVelocity(vx, vy);
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
                )
            )
        .setParentEmitter(em3)
        .setFreq(300)
		.setDelay(1000)
        .setStartAngle(0)
        .setStep(360 / 6)
        .setNumber(6);
		let up3_3 = new ScatterRotate().setParentEmitter(up3_2).setTPR(-4);

	}
}