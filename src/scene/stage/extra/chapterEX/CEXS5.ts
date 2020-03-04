class CEXS5 extends StageBase {
	public constructor() {
        super("cexs5", 25);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 840);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_STANDARD)
                .setTotalVelocity(15)
            )
            .setFreq(250)
            .setStartAngle(0)
            .setStep(360 / 3)
            .setNumber(3)
            .setPeriod(24)
        );

		let launcher2 = LauncherFactory.normalLauncher();
		launcher2.addLogic(
			new CustomShooter(
				launcher2,
                (launcher:Launcher) => {
					for (let i = 0; i < 16; i++) {
						let theta = i / 8 * Math.PI;
						let pos = new egret.Point(SelfMachine.INSTANCE.getX() + 120 * Math.cos(theta), SelfMachine.INSTANCE.getY() + 120 * Math.sin(theta))
						let missile = new RoundMissile()
						.setTexture(i % 2 == 0? TextureNames.MISSILE_RED : TextureNames.MISSILE_BLUE)
						.setPos(pos)
						.setVelocity(2 * Math.cos(theta), 2 * Math.sin(theta))
						.addHandler(
							new TickEventHandler(
								(missile:MissileBase) => {
									missile.setTotalVelocity(-20);
								}
							)
							.setStartTicks(20)
							.setTriggerTimes(1)
						)
						.addHandler(
							new TickEventHandler(
								(missile:MissileBase) => {
									missile.setDead();
								}
							)
							.setStartTicks(25)
							.setTriggerTimes(1)
						);
						missile.addToStage();
					}
					let missile = new RoundMissile()
					.setRadius(0)
					.setTexture(TextureNames.MISSILE_RING_RED)
					.setPos(SelfMachine.INSTANCE.getPos())
					.addHandler(
						new TickEventHandler(
							(missile:MissileBase) => {
								missile.ignoreCollideCheck = false;
								for (let j = 0; j < 100; j++) {
									let theta = Math.random() * 2 * Math.PI;
									let v = 5 + 20 * Math.random();
									let missile1 = new RoundMissile()
									.setTexture(Math.random() >= 0.5? TextureNames.MISSILE_RED : TextureNames.MISSILE_BLUE)
									.setPos(missile.getPos())
									.setVelocity(v * Math.cos(theta), v * Math.sin(theta));
									missile1.addToStage();
								}

							}
						)
						.setStartTicks(25)
						.setTriggerTimes(1)
					)
					.addHandler(
						new TickEventHandler(
							(missile:MissileBase) => {
								let size = missile.getWidth() + 12;
								missile.resize(size, size);
							}
						)
						.setStartTicks(25)
						.setTriggerTimes(25)
					)
					.addHandler(
						new TickEventHandler(
							(missile:MissileBase) => {
								missile.rotate(18);
							}
						)
						.setStartTicks(25)
						.setTriggerTimes(55)
					)
					.addHandler(
						new TickEventHandler(
							(missile:MissileBase) => {
								missile.setDead();
							}
						)
						.setStartTicks(80)
						.setTriggerTimes(1)
					);
					missile.ignoreCollideCheck = true;
					missile.addToStage();
				}
			)
			.setFreq(2000)
		);
	}
}