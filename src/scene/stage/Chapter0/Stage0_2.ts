class Stage0_2 extends StageBase {
    protected initEmitters() {
		MsgBox.showMsgBox(this, 
            "本关的过关方法是：不要动！具体原因见关卡提示。"
        );
		let point1 = new egret.Point(Main.X * 0.5, 300);
		let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(TextureNames.FLOWER1, 120, 90).setParentEmitter(em1).renderOnStage(this);
        let up1_2 = new RegularMissileUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ELLIPTICAL)
                .setSize(30, 36)
                .setTexture(TextureNames.MISSILE_PETAL2)
                .setVelocity(15)
            )
        .setParentEmitter(em1)
        .setFreq(400)
        .setStartAngle(0)
        .setStep(4)
        .setNumber(90);
	}
}