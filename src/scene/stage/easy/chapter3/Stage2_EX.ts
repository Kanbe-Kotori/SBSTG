class Stage2_EX extends StageBase {
	protected initEmitters() {
        let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
            new CustomPath(
                launcher1,
                (t:number) => {
				    return new egret.Point(Math.random() * Main.X * 0.5 + (t % 10)/5 * Main.X * 0.5, Math.random() * 180 + Main.UPPER_Y);
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
				.setTotalVelocity(17)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            let size = Math.max(missile.getWidth() - 6, 210);
                            missile.resize(size, size);
                            missile.rotate(9);
                        }
                    ).setTriggerTimes(100)
                )
                //.setBottomLayer()
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
                .setTotalVelocity(15)
            )
            .setFreq(250)
            .setStartAngle(0)
            .setStep(360 / 32)
            .setNumber(32)
        );
	}
}