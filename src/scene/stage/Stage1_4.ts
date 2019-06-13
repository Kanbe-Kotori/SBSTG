class Stage1_4 extends StageBase {
	public static readonly INSTANCE:Stage1_4 = new Stage1_4("1-4", 30);

    protected initEmitters() {

		let handler1 = new TickEventHandler(
						function(missile:MissileBase) {
                            missile.setVelocity(0,0);
                        }
					).setTriggerTimes(1);

		let handler2 = new TickEventHandler(
                        function(missile:MissileBase) {
							let x = SelfMachine.INSTANCE.getX();
        					let y = SelfMachine.INSTANCE.getY();
							let dx = x - missile.getX();
							let dy = y - missile.getY();
							let vx = 18 * dx / Math.sqrt(dx * dx + dy * dy);
        					let vy = 18 * dy / Math.sqrt(dx * dx + dy * dy);
                            missile.setVelocity(vx, vy);
                        }
					).setTriggerTimes(1);

        let point1 = new egret.Point(540, 900);
        let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(TextureNames.FLOWER8, 200, 200).setParentEmitter(em1).renderOnStage(this);
        let up1_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_STANDARD)
				.setVelocity(24)
				.addHandler(handler1.clone().setStartTicks(10))
				.addHandler(handler2.clone().setStartTicks(30))
            )
        .setParentEmitter(em1)
        .setFreq(300)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(16);
		let up1_3 = new EmitterRotateUpgrade().setParentEmitter(up1_2).setRad(2 / 6 / 20);
		
		let point2 = new egret.Point(360, 900);
        let em2 = new EmptyEmitter().setPos(point2);
        let up2_1 = new RenderUpgrade(TextureNames.FLOWER1, 120, 90).setParentEmitter(em2).renderOnStage(this);
        let up2_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
				.setVelocity(10)
				.addHandler(handler1.clone().setStartTicks(15))
				.addHandler(handler2.clone().setStartTicks(30))
            )
        .setParentEmitter(em2)
        .setFreq(300)
		.setDelay(1000)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(12);
		let up2_3 = new EmitterRotateUpgrade().setParentEmitter(up2_2).setRad(2 / 6 / 20);

		let point3 = new egret.Point(720, 900);
        let em3 = new EmptyEmitter().setPos(point3);
        let up3_1 = new RenderUpgrade(TextureNames.FLOWER2, 120, 80).setParentEmitter(em3).renderOnStage(this);
        let up3_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
				.setVelocity(10)
				.addHandler(handler1.clone().setStartTicks(15))
				.addHandler(handler2.clone().setStartTicks(30))
            )
        .setParentEmitter(em3)
        .setFreq(300)
		.setDelay(1000)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(12);
		let up3_3 = new EmitterRotateUpgrade().setParentEmitter(up3_2).setRad(2 / 6 / 20);

		let point4 = new egret.Point(540, 720);
		let em4 = new EmptyEmitter().setPos(point4);
        let up4_1 = new RenderUpgrade(TextureNames.FLOWER3, 110, 170).setParentEmitter(em4).renderOnStage(this);
		let up4_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_LIANZI)
            )
        .setParentEmitter(em4)
        .setFreq(250)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(8);
		let up4_3 = new EmitterRotateUpgrade().setParentEmitter(up4_2).setRad(2 / 12 / 20);
	}
}