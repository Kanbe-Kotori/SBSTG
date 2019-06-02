class Stage2_1 extends StageBase {
    public static readonly INSTANCE:Stage2_1 = new Stage2_1("2-1", 30);

    protected initEmitters() {
        let rain = new SideEmitterUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(15)
                .setExtraPara(MissileUtils.RANDOM_VELOCITY_PARA, 20)
                .setTexture(TextureNames.MISSILE_BLUE)
            )
        .setFreq(250)
        .setStartAngle(0.45)
        .setEndAngle(0.55)
        .setNumber(10);
    }

}