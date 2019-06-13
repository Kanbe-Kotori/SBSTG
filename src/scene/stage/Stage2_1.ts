class Stage2_1 extends StageBase {
    public static readonly INSTANCE:Stage2_1 = new Stage2_1("2-1", 30);

    protected initEmitters() {
        let rain = new SideEmitterUpgrade(
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
        .setStartAngle(75)
        .setEndAngle(105)
        .setNumber(8);
    }

}