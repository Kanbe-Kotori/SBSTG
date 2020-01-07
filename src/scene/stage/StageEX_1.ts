class StageEX_1 extends StageBase {

    protected initEmitters() {
        let em1 = new Launcher();
        let up1_1 = new TeleportingUpgrade(
			0, Main.X,
			Main.UPPER_Y, Main.Y * 0.5)
		.setParentEmitter(em1)
        .setFreq(200);
		let up1_2 = new Scatter(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
            )
        .setParentEmitter(em1)
        .setFreq(200)
        .setStartAngle(0)
        .setStep(360 / 24)
        .setNumber(24);
		let up1_3 = new SideEmitterUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setVelocity(15)
                .setSize(256, 256)
                .setTexture(TextureNames.MISSILE_RING)
                .setBottomLayer()
                /*.addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            missile._img.rotation -= 9;
                        }
                    ).setTriggerTimes(100)
                )*/
            )
        .setParentEmitter(em1)
		.setFreq(800)
        .setStartAngle(90)
        .setEndAngle(90);
    }

}