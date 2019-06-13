class Stage1_2 extends StageBase {
    public static readonly INSTANCE:Stage1_2 = new Stage1_2("1-2", 30);

    protected initEmitters() {
        let point1 = new egret.Point(540, 300);
        let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(TextureNames.FLOWER1, 160, 120).setParentEmitter(em1).renderOnStage(this);
        let up1_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setVelocity(15)
            )
        .setParentEmitter(em1)
        .setFreq(400)
        .setStartAngle(45)
        .setStep(90 / 10)
        .setNumber(11);

        let point2 = new egret.Point(108, 420);
        let em2 = new EmitterAroundPoint(point2, 2000, 50).randomTheta();
        let up2_1 = new RenderUpgrade(TextureNames.FLOWER3, 80, 120).setParentEmitter(em2).setFreq(50).renderOnStage(this);
        let up2_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setVelocity(20)
            )
        .setParentEmitter(em2)
        .setFreq(200)
        .setDelay(1000);

        let point3 = new egret.Point(324, 360);
        let em3 = new EmitterAroundPoint(point3, 2000, 50).randomTheta();
        let up3_1 = new RenderUpgrade(TextureNames.FLOWER3, 80, 120).setParentEmitter(em3).setFreq(50).renderOnStage(this);
        let up3_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setVelocity(20)
            )
        .setParentEmitter(em3)
        .setFreq(200)
        .setDelay(1000);

        let point4 = new egret.Point(756, 360);
        let em4 = new EmitterAroundPoint(point4, 2000, 50).setClockwise(false).randomTheta();
        let up4_1 = new RenderUpgrade(TextureNames.FLOWER3, 80, 120).setParentEmitter(em4).setFreq(50).renderOnStage(this);
        let up4_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setVelocity(20)
            )
        .setParentEmitter(em4)
        .setFreq(200)
        .setDelay(1000);

        let point5 = new egret.Point(972, 420);
        let em5 = new EmitterAroundPoint(point5, 2000, 50).setClockwise(false).randomTheta();
        let up5_1 = new RenderUpgrade(TextureNames.FLOWER3, 80, 120).setParentEmitter(em5).setFreq(50).renderOnStage(this);
        let up5_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setVelocity(20)
            )
        .setParentEmitter(em5)
        .setFreq(200)
        .setDelay(1000);
    }
    
}