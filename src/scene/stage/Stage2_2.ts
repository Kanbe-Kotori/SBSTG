class Stage2_2 extends StageBase {
	public static readonly INSTANCE:Stage2_2 = new Stage2_2("2-2", 30);

    protected initEmitters() {
        let rain1 = new SideEmitterUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setVelocity(15)
                .setExtraPara(MissileUtils.RANDOM_VELOCITY_PARA, 20)
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
        .setNumber(5);

		let rain2 = new SideEmitterUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setVelocity(20)
				.setSize(36, 36)
                .setExtraPara(MissileUtils.RANDOM_VELOCITY_PARA, 30)
                .setTexture(TextureNames.MISSILE_BLUE)
                .addHandler(
                    new EdgeEventHandler(
                        function(missile:MissileBase) {
                            let side = missile.getEdge();
                            if (side == Side.LEFT) {
                                missile._img.x += Main.X;
                            } else if (side == Side.RIGHT) {
                                missile._img.x -= Main.X;
                            } else if (side == Side.BOTTOM) {
                                let theta = (1 + Math.random()) * Math.PI;
                                let missile1 = new RoundMissile()
                                    .setPos(MyUtils.createReasonablePos(missile.getPos()))
                                    .setVelocity(9 * Math.cos(theta), 9 * Math.sin(theta))
                                    .setTexture(TextureNames.MISSILE_STANDARD)
                                    .setSize(36, 36);
                                SelfMachine.INSTANCE.currentStage.addMissile(missile1);
                                missile.setDead();
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
        .setNumber(2);
	}
}