class Stage2_EX extends StageBase {
	protected initEmitters() {
        let em1 = new EmptyEmitter();
        let up1_1 = new CustomPathUpgrade(
            (t:number) => {
				return new egret.Point(Math.random() * Main.X * 0.5 + (t % 10)/5 * Main.X * 0.5, Math.random() * 180 + Main.UPPER_Y);
			}
        )
        .setParentEmitter(em1)
		.setFreq(250);

		let up1_2 = new RegularMissileUpgrade(
			new MissileConfig(MissileUtils.MISSILE_ROUND)
				.setSize(600, 600)
				.setVelocity(17)
				.setTexture(TextureNames.MISSILE_RING_RED)
                .addHandler(
                    new TickEventHandler(
                        (missile:MissileBase) => {
                            let size = Math.max(missile.getWidth() - 6, 210);
                            missile.setSize(size, size);
                            missile._img.width = size;
		                    missile._img.height = size;
		                    missile._img.anchorOffsetX = size / 2;
                            missile._img.anchorOffsetY = size / 2;
                            missile._img.rotation += 9;
                        }
                    ).setTriggerTimes(100)
                )
                //.setBottomLayer()
			)
        .setParentEmitter(em1)
        .setFreq(250)
        .setStartAngle(90)
        .setNumber(1);
        
		let up1_3 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
            .setTexture(TextureNames.MISSILE_RED)
            .setVelocity(15)
        )
        .setParentEmitter(em1)
        .setFreq(250)
        .setStartAngle(0)
        .setStep(360 / 32)
        .setNumber(32);
	}
}