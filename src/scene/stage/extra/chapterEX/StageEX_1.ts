class StageEX_1 extends StageBase {

    protected initEmitters() {
        let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
            new Flash(
                launcher1,
                0, Main.X,
                Main.UPPER_Y, Main.Y * 0.5
            )
            .setFreq(200)
        );

		launcher1.addLogic(
            new Scatter(
                launcher1,
                new RoundMissile()
                .setTotalVelocity(15)
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(360 / 24)
            .setNumber(24)
        );

		launcher1.addLogic(
            new SideShooter(
                launcher1,
                new RoundMissile()
                .setSize(256, 256)
                .setTexture(TextureNames.MISSILE_RING)
                .setTotalVelocity(15)
                .setBottomLayer(true)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile.rotate(-9);
                        }
                    ).setTriggerTimes(100)
                )
            )
            .setFreq(800)
            .setStartAngle(90)
            .setEndAngle(90)
        );
    }

}