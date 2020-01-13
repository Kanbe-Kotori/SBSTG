class Stage2_1 extends StageBase {

    protected initEmitters() {
        let rain = new SideShooter(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setVelocity(15)
                .setExtraPara(MissileUtils.RANDOM_VELOCITY_PARA, 20)
                .setTexture(TextureNames.MISSILE_BLUE)
                .addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
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