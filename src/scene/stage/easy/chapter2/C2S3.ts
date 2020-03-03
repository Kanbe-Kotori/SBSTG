class C2S3 extends StageBase {
	public constructor() {
        super("c2s3", 20);
    }

    protected initEmitters() {
        let point1 = new egret.Point(540, 600);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 160, 120).setInitialPos(point1);
        launcher1.addLogic(
            new ScatterRotate(
                launcher1,
                new EllipticalMissile()
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setTotalVelocity(15)
				.addHandler(
                    new EdgeEventHandler(
                        (missile:MissileBase) => {
                            let side = missile.getEdge();
							let point = MyUtils.createReasonablePos(missile.getPos());
                            if (side == Side.LEFT || side == Side.RIGHT) {
								missile.setPos(point);
								missile.setVelocityX(-missile.getVelocityX());
								missile.setTotalVelocity(12);
								missile.setTexture(TextureNames.MISSILE_PETAL1);
							} else if (side == Side.TOP) {
								missile.setPos(point);
                                missile.setVelocityY(-missile.getVelocityY());
								missile.setTotalVelocity(12);
								missile.setTexture(TextureNames.MISSILE_PETAL1);
                            } else {
                                missile.setDead();
                            }
                        }
                    )
                )
            )
            .setFreq(200)
            .setStartAngle(0)
            .setStep(10)
            .setNumber(2)
            .setPeriod(Math.E)	//随便设置一个无理数
        );
    }
}