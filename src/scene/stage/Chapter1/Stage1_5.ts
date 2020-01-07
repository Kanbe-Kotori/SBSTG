class Stage1_5 extends StageBase {

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let em1 = new Launcher().setPos(point1);
        let up1_1 = 
            new CustomPathUpgrade(
                (t:number) => {return new egret.Point(540 + 300 * Math.sin(t * Math.PI / 80), 600);}
            )
            .setParentEmitter(em1);
        let up1_2 = new RenderLogic(TextureNames.FLOWER8, 150, 170).setParentEmitter(em1).setFreq(50).renderOnStage(this);
        let up1_3 = new Scatter(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL3)
                .setVelocity(20)
            )
        .setParentEmitter(em1)
        .setFreq(400)
        .setStartAngle(45)
        .setStep(90 / 5)
        .setNumber(6);
        let up1_4 = new Scatter(
           new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_PETAL4)
				.setVelocity(15)
				.addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
                            if (missile.getEdge() == Side.TOP) {
								let point = MyUtils.createReasonablePos(missile.getPos());
                                let theta = MissileUtils.getSniperAngle(point) + MyUtils.ang2rad(2) * (2 * Math.random() - 1);
                                let missile1 = 
                                    new EllipticalMissile()
                                        .setSize(30, 36)
                                        .setTexture(Math.random() > 0.5? TextureNames.MISSILE_PETAL1 : TextureNames.MISSILE_PETAL2)
                                        .setPos(point)
                                        .setVelocity(10 * Math.cos(theta), 10 * Math.sin(theta))
                                        .addHandler(
                                            new TickEventHandler(
                                                (missile:MissileBase) => {
                                                    missile.setTotalVelocity(missile.getVelocity() + 0.5);
                                                }
                                            )
                                        );
                                missile1.addToStage(SelfMachine.INSTANCE.currentStage);
                            }
							missile.setDead();
                        }
                    ).setTriggerTimes(1)
                )
            )
        .setParentEmitter(em1)
        .setFreq(300)
        .setStartAngle(0)
        .setStep(360 / 24)
        .setNumber(24);
        let up1_5 = new ScatterRotate().setParentEmitter(up1_4).setTPR(14.4);
	}
	
}