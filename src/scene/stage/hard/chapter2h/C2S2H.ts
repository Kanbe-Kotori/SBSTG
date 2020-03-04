class C2S2H extends StageBase {
    public constructor() {
        super("c2s2h", 20);
    }

    protected initEmitters() {
        let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(10) // 顺时针慢蛋速度
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(360 / 12) //12
            .setNumber(12)
            .setPeriod(18) //30
        );

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(10) // 逆时针慢蛋速度
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(360 / 12)
            .setNumber(12)
            .setPeriod(-18)
        );

		launcher1.addLogic(
            new Scatter(
                launcher1,
			    new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(40) //50红色快蛋速度
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 0.5); //速度衰减
                        }
					)
					.setTriggerTimes(30)
				)
            )
            .setNumber(36)
            .setStep(360 / 36)
            .setFreq(600)
        );

		launcher1.addLogic(
            new Scatter(
                launcher1,
			    new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(5) //50蓝色快蛋速度
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 1);
                        }
					)
					.setTriggerTimes(30)
				)
            )
            .setDelay(400)
            .setStartAngle(360 / 2 / 36)
            .setNumber(36)
            .setStep(360 / 36)
            .setFreq(600)
        );

        launcher1.addLogic(
			new ScatterRotate(
                launcher1,
			    new RoundMissile()
                .setTexture(TextureNames.MISSILE_GREEN)
                .setSize(128, 128)
                .setTotalVelocity(10)
				.addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() + 2);
                        }
					)
					.setTriggerTimes(20)
				)
                .addHandler(
					new TickEventHandler(
						(missile:MissileBase) => {
                            missile.setTotalVelocity(missile.getVelocity() - 2);
                        }
					)
                    .setStartTicks(20)
					.setTriggerTimes(20)
				)
            )
            .setDelay(6000)
            .setStartAngle(30) //初始角度修改
            .setNumber(24)
            .setStep(360 / 24)
            .setFreq(4000)
            .setPeriod(192)
		)
	}
}