class C3S1 extends StageBase {
    public constructor() {
        super("c3s1", 20);
    }

    protected initEmitters() {
        let launcher1 = LauncherFactory.normalLauncher();
        launcher1.addLogic(
            new SideShooter(
                launcher1,
                new RoundMissile()
                .setTexture(TextureNames.MISSILE_BLUE)
                .setTotalVelocity(10)
                .addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
                            let side = missile.getEdge();
                            if (side == Side.LEFT) {
                                missile.setPosX(missile.getX() + Main.X);
                            } else if (side == Side.RIGHT) {
                                missile.setPosX(missile.getX() - Main.X);
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
            .setNumber(5)
            .setExtraVelocity(5)
        );
    }

}