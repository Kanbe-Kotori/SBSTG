class C3S7H extends StageBase {
    public constructor() {
        super("c3s7h", 25);
    }

	protected initEmitters() {
        let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
            new CustomPath(
                launcher1,
                (t:number) => {
				    return new egret.Point(90 + Math.random() * 360 + (t % 10)/5 * 540, Math.random() * 180 + Main.UPPER_Y);
			    }
            )
            .setFreq(250)
        );
		
		launcher1.addLogic(
            new Scatter(
                launcher1,
			    new RoundMissile()
                .setTexture(TextureNames.MISSILE_RING_RED)
				.setSize(600, 600)
				.setTotalVelocity(30)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            let size = Math.max(missile.getWidth() - 8, 150);
                            missile.resize(size, size);
                            missile.rotate(9);
                        }
                    ).setTriggerTimes(100)
                )
                .setBottomLayer(true)
			)
            .setFreq(250)
            .setStartAngle(90)
            .setNumber(1)
        );
        
		launcher1.addLogic(
            new Scatter(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_RED)
                .setTotalVelocity(20)
            )
            .setFreq(250)
            .setStartAngle(0)
            .setStep(360 / 32)
            .setNumber(32)
        );

        let launcher2 = LauncherFactory.normalLauncher();
        launcher2.addLogic(
            new CustomShooter(
                launcher2,
                (launcher:Launcher) => {
                    for (let i = 0; i < 9; i++) {
                        let missile = new RoundMissile()
                        .setSize(64, 64)
                        .setTexture(TextureNames.MISSILE_STANDARD)
                        .setPos(new egret.Point(60 + 120 * i, Main.UPPER_Y))
                        .setVelocity(0, 10)
                        .addHandler(
                            new TickEventHandler(
                                (missile:MissileBase) => {
                                    missile.setTotalVelocity(missile.getVelocity() + 2);
                                }
                            )
                            .setTriggerTimes(30)
                        )
                        missile.addToStage();
                    }
                }
            )
            .setDelay(5000)
            .setFreq(5000)
        );
	}
}