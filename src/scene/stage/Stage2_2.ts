class Stage2_2 extends StageBase {
	public static readonly INSTANCE:Stage2_2 = new Stage2_2("2-2", 30);

    protected initEmitters() {
        let rain1 = new SideEmitterUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(14)
                .setExtraPara(MissileUtils.RANDOM_VELOCITY_PARA, 18)
                .setTexture(TextureNames.MISSILE_BLUE)
                .addHandler(
                    new EdgeEventHandler(
                        function(missile:MissileBase) {
                            let side = missile.getEdge();
                            if (side == Side.LEFT) {
                                missile._img.x += Main.X;
                            } else if (side == Side.RIGHT) {
                                missile._img.x -= Main.X;
                            } else {
                                missile.setDead();
                            }
                        }
                    )
                )
            )
        .setFreq(250)
        .setStartAngle(0.4)
        .setEndAngle(0.6)
        .setNumber(6);

		let rain2 = new SideEmitterUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(18)
				.setSize(16)
                .setExtraPara(MissileUtils.RANDOM_VELOCITY_PARA, 24)
                .setTexture(TextureNames.MISSILE_BLUE)
                .addHandler(
                    new EdgeEventHandler(
                        function(missile:MissileBase) {
                            let side = missile.getEdge();
                            if (side == Side.LEFT) {
                                missile._img.x += Main.X;
                            } else if (side == Side.RIGHT) {
                                missile._img.x -= Main.X;
                            } else {
                                missile.setDead();
                            }
                        }
                    )
                )
            )
        .setFreq(250)
        .setStartAngle(0.45)
        .setEndAngle(0.55)
        .setNumber(3);
	}
}