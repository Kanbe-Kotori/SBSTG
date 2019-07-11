class Stage2_2 extends StageBase {

    protected initEmitters() {
        let rain = new SideEmitterUpgrade(
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

		let point2 = new egret.Point(Main.X * 0.4, 420);
		let em2 = new EmptyEmitter().setPos(point2);
        let up2_1 = new RenderUpgrade(TextureNames.FLOWER1, 120, 90).setParentEmitter(em2).renderOnStage(this);
        let up2_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setVelocity(15)
        )
        .setParentEmitter(em2)
        .setNumber(7)
        .setStep(30)
        .setDiv(1)
        .setFreq(300);

		let point3 = new egret.Point(Main.X * 0.6, 420);
		let em3 = new EmptyEmitter().setPos(point3);
        let up3_1 = new RenderUpgrade(TextureNames.FLOWER1, 120, 90).setParentEmitter(em3).renderOnStage(this);
        let up3_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setVelocity(15)
        )
        .setParentEmitter(em3)
        .setNumber(7)
        .setStep(30)
        .setDiv(1)
        .setFreq(300);
    }

}