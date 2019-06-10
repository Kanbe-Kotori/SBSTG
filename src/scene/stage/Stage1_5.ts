class Stage1_5 extends StageBase {
    public static readonly INSTANCE:Stage1_5 = new Stage1_5("1-4", 30);

    protected initEmitters() {

        let point1 = new egret.Point(540, 600);
        let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(TextureNames.FLOWER8, 200, 320).setParentEmitter(em1).renderOnStage(this);
        let up1_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_BLUE)
				.addHandler(
                    new EdgeEventHandler(
                        function(missile:MissileBase) {
                            if (missile.getY() < Main.UPPER_Y + 720) {
								let missile1 = MissileUtils.createSniperMissile(
                                    missile.getPos(),
									new MissileConfig(MissileUtils.MISSILE_ROUND)
										.setVelocity(15)
										.setTexture(TextureNames.MISSILE_RED)
								);
        						SelfMachine.INSTANCE.currentStage.addMissile(missile1);
                            }
							missile.setDead();
                        }
                    ).setTriggerTimes(1)
                )
            )
        .setParentEmitter(em1)
        .setFreq(300)
        .setStartAngle(0)
        .setEndAngle(2)
        .setNumber(32);
		let up1_3 = new EmitterRotateUpgrade().setParentEmitter(up1_2);
		
	}
	
}