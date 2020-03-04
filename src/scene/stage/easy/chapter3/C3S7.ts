class C3S7 extends StageBase {
    public constructor() {
        super("c3s7", 25);
    }

	protected initEmitters() {
        let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
            new CustomPath(
                launcher1,
                (t:number) => {
				    return new egret.Point(90 + Math.random() * 360 + (t % 16)/8 * 540, Math.random() * 180 + Main.UPPER_Y);
			    }
            )
            .setFreq(400)
        );
		
		launcher1.addLogic(
            new Scatter(
                launcher1,
			    new RoundMissile()
                .setTexture(TextureNames.MISSILE_RING_RED)
				.setSize(600, 600)
				.setTotalVelocity(20)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            let size = Math.max(missile.getWidth() - 7, 180);
                            missile.resize(size, size);
                            missile.rotate(9);
                        }
                    ).setTriggerTimes(100)
                )
                //.setBottomLayer()
			)
            .setFreq(400)
            .setStartAngle(90)
            .setNumber(1)
        );
        
		launcher1.addLogic(
            new Scatter(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_RED)
                .setTotalVelocity(15)
            )
            .setFreq(400)
            .setStartAngle(0)
            .setStep(360 / 32)
            .setNumber(32)
        );
	}
}