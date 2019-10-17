class Stage0_3 extends StageBase {
    protected initEmitters() {
		this._current_tick = -100;
		MsgBox.showMsgBox(this, 
            "这里写不下，请在倒计时结束后点击屏幕右下角的i按钮查看提示。"
        );
		let point1 = new egret.Point(Main.X * 0.5, 300);
		let em1 = new EmptyEmitter().setPos(point1);
        let up1_1 = new RenderUpgrade(TextureNames.FLOWER3, 80, 120).setParentEmitter(em1).setFreq(50).renderOnStage(this);
        let up1_2 = new SniperUpgrade(
            new MissileConfig(MissileUtils.MISSILE_ROUND)
                .setTexture(TextureNames.MISSILE_LIANZI)
                .setVelocity(10)
            )
        .setParentEmitter(em1)
        .setFreq(200);
	}
}