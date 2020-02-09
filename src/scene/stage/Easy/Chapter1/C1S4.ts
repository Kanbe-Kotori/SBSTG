class C1S4 extends StageBase {
    public constructor() {
        super("c1s4", 20);
    }

    protected initEmitters() {
        let point1 = new egret.Point(540, 720);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER8, 150, 170).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(20)
            )
            .setFreq(150)
            .setStartAngle(0)
            .setStep(360 / 6)
            .setNumber(6)
            .setPeriod(12)
        );

        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_PETAL4)
                .setTotalVelocity(20)
            )
            .setFreq(150)
            .setStartAngle(0)
            .setStep(360 / 6)
            .setNumber(6)
            .setPeriod(-12)
        );
		
		let point2 = new egret.Point(360, 720);
        let launcher2 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 120, 90).setInitialPos(point2);
        launcher2.addLogic(
            new ScatterRotate(
                launcher2,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
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
            .setFreq(300)
            .setDelay(1000)
            .setStartAngle(0)
            .setStep(360 / 6)
            .setNumber(6)
            .setPeriod(4)
        );

		let point3 = new egret.Point(720, 720);
        let launcher3 = LauncherFactory.texturedLauncher(TextureNames.FLOWER2, 120, 90).setInitialPos(point3);
        launcher3.addLogic(
            new ScatterRotate(
                launcher3,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setTotalVelocity(15)
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
            .setFreq(300)
            .setDelay(1000)
            .setStartAngle(0)
            .setStep(360 / 6)
            .setNumber(6)
            .setPeriod(-4)
        );

	}
}