class Stage2_1 extends StageBase {
    public static readonly INSTANCE:Stage2_1 = new Stage2_1("2-1", 30);

    protected initEmitters() {
        let rain = new SideEmitterUpgrade(new MissileConfig(MissileUtils.MISSILE_RANDOM_VELOCITY).setVelocity(15).setExtraPara(0,20).setTexture(TextureNames.MISSILE_WATER));
        rain.setFreq(250);
        rain.setStartAngle(0.45);
        rain.setEndAngle(0.55);
        rain.setNumber(10);
    }

}