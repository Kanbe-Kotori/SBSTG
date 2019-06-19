class Stage1_3 extends StageBase {
    public static readonly INSTANCE:Stage1_3 = new Stage1_3("1-3", 30);

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(TextureNames.FLOWER8, 150, 170).setParentEmitter(em1).renderOnStage(this);
        let up1_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_PETAL4)
				.setVelocity(15)
            )
        .setParentEmitter(em1)
        .setFreq(300)
        .setStartAngle(0)
        .setStep(360 / 32)
        .setNumber(32);
        let up1_3 = new EmitterRotateUpgrade().setParentEmitter(up1_2).setTPR(19.2);

        let em2 = new EmitterAroundEmitter(em1, 5000, 240);
        em2.setTheta(0);
        let up2_1 = new RenderUpgrade(TextureNames.FLOWER1, 120, 90).setParentEmitter(em2).setFreq(50).renderOnStage(this);
        let up2_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setVelocity(20)
            )
        .setParentEmitter(em2)
        .setNumber(3)
        .setStep(120)
        .setDiv(1)
        .setFreq(200);

        let em3 = new EmitterAroundEmitter(em1, 5000, 240);
        em3.setTheta(2/3);
        let up3_1 = new RenderUpgrade(TextureNames.FLOWER1, 120, 90).setParentEmitter(em3).setFreq(50).renderOnStage(this);
        let up3_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setVelocity(20)
            )
        .setParentEmitter(em3)
        .setNumber(3)
        .setStep(120)
        .setDiv(1)
        .setFreq(200);

        let em4 = new EmitterAroundEmitter(em1, 5000, 240);
        em4.setTheta(4/3);
        let up4_1 = new RenderUpgrade(TextureNames.FLOWER1, 120, 90).setParentEmitter(em4).setFreq(50).renderOnStage(this);
        let up4_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setVelocity(20)
            )
        .setParentEmitter(em4)
        .setNumber(3)
        .setStep(120)
        .setDiv(1)
        .setFreq(200);

		let em5 = new EmitterAroundEmitter(em1, 5000, 240);
        em5.setTheta(1/3);
		em5.setClockwise(false);
        let up5_1 = new RenderUpgrade(TextureNames.FLOWER2, 120, 80).setParentEmitter(em5).setFreq(50).renderOnStage(this);
        let up5_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setVelocity(20)
            )
        .setParentEmitter(em5)
        .setNumber(3)
        .setStep(120)
        .setDiv(1)
        .setFreq(200);

		let em6 = new EmitterAroundEmitter(em1, 5000, 240);
        em6.setTheta(1);
		em6.setClockwise(false);
        let up6_1 = new RenderUpgrade(TextureNames.FLOWER2, 120, 80).setParentEmitter(em6).setFreq(50).renderOnStage(this);
        let up6_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setVelocity(20)
            )
        .setParentEmitter(em6)
        .setNumber(3)
        .setStep(120)
        .setDiv(1)
        .setFreq(200);

		let em7 = new EmitterAroundEmitter(em1, 5000, 240);
        em7.setTheta(5/3);
		em7.setClockwise(false);
        let up7_1 = new RenderUpgrade(TextureNames.FLOWER2, 120, 80).setParentEmitter(em7).setFreq(50).renderOnStage(this);
        let up7_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL1)
                .setVelocity(20)
            )
        .setParentEmitter(em7)
        .setNumber(3)
        .setStep(120)
        .setDiv(1)
        .setFreq(200);
    }
    
}