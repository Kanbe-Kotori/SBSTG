class CEXS1 extends StageTutorial {
	public constructor() {
        super("cexs1", 30);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 690);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.FLOWER1, 160, 120).setInitialPos(point1);
		launcher1.addLogic(
			new CustomShooter(
				launcher1,
                (launcher:Launcher) => {
                    for(let i = 0; i < 7; i++){
                        let v = 30;
                        let dett = SelfMachine.INSTANCE.currentStage.getCurrentTick() / 20;
                        let theta = i * 2 * Math.PI / 7 + dett * dett;
                        let missile = new EllipticalMissile()
                        .setSize(30, 36)
                        .setTexture(TextureNames.MISSILE_PETAL2)
                        .setPos(launcher.getPos())
                        .setVelocity(v * Math.cos(theta), v * Math.sin(theta))
                        missile.addToStage();
                    }
				}
			)
			.setFreq(50)
		)
	}
}