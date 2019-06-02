class Stage1_3 extends StageBase {
    public static readonly INSTANCE:Stage1_3 = new Stage1_3("1-3", 30);

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(200, "smjb2_png").setParentEmitter(em1).renderOnStage(this);
        let up1_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setTexture(TextureNames.MISSILE_WATER)
            )
        .setParentEmitter(em1)
        .setFreq(300)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(36);

        let em2 = new EmitterAroundEmitter(em1, 3000, 240);
        em2.setTheta(0);
        let up2_1 = new RenderUpgrade(100, "smjb_png").setParentEmitter(em2).setFreq(50).renderOnStage(this);
        let up2_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(13)
            )
        .setParentEmitter(em2)
        .setFreq(200);

        let em3 = new EmitterAroundEmitter(em1, 3000, 240);
        em3.setTheta(2/3);
        let up3_1 = new RenderUpgrade(100, "smjb_png").setParentEmitter(em3).setFreq(50).renderOnStage(this);
        let up3_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(13)
            )
        .setParentEmitter(em3)
        .setFreq(200);

        let em4 = new EmitterAroundEmitter(em1, 3000, 240);
        em4.setTheta(4/3);
        let up4_1 = new RenderUpgrade(100, "smjb_png").setParentEmitter(em4).setFreq(50).renderOnStage(this);
        let up4_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(13)
            )
        .setParentEmitter(em4)
        .setFreq(200);

		let em5 = new EmitterAroundEmitter(em1, 3000, 240);
        em5.setTheta(1/3);
		em5.setClockwise(false);
        let up5_1 = new RenderUpgrade(100, "smjb4_png").setParentEmitter(em5).setFreq(50).renderOnStage(this);
        let up5_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(13)
            )
        .setParentEmitter(em5)
        .setFreq(200);

		let em6 = new EmitterAroundEmitter(em1, 3000, 240);
        em6.setTheta(1);
		em6.setClockwise(false);
        let up6_1 = new RenderUpgrade(100, "smjb4_png").setParentEmitter(em6).setFreq(50).renderOnStage(this);
        let up6_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(13)
            )
        .setParentEmitter(em6)
        .setFreq(200);

		let em7 = new EmitterAroundEmitter(em1, 3000, 240);
        em7.setTheta(5/3);
		em7.setClockwise(false);
        let up7_1 = new RenderUpgrade(100, "smjb4_png").setParentEmitter(em7).setFreq(50).renderOnStage(this);
        let up7_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_STANDARD)
                .setVelocity(13)
            )
        .setParentEmitter(em7)
        .setFreq(200);
    }
    
}