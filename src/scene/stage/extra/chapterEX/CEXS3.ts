class CEXS3 extends StageBase {
	public constructor() {
        super("cexs3", 30);
    }

    protected initEmitters() {
		let func = (launcher:Launcher) => {
            let tick = SelfMachine.INSTANCE.currentStage.getCurrentTick();
            let correctedTick = tick - tick % (10 * 20);
            if (tick % (10 * 20) > 5 * 20) {
                return;
            }
            let v = 10 + Math.random() * 10;
            let dx = launcher.getX() - 540;
            let dy = launcher.getY() - 900;
            let theta:number;
            if (dx == 0) {
                theta = dy >= 0? Math.PI / 2 : - Math.PI / 2;
            } else if (dx > 0) {
                theta = Math.atan(dy / dx);
            } else {
                theta = Math.atan(dy / dx) + Math.PI;
            }
            let thetaV = theta + (2 * Math.random() - 1) * MyUtils.ang2rad(5);
            let missile = new RoundMissile()
            .setTexture(TextureNames.MISSILE_BLUE)
            .setPos(launcher.getPos())
            .setVelocity(v * Math.cos(thetaV), v * Math.sin(thetaV))
            .addHandler(
                new EdgeEventHandler(
                    (missile:MissileBase) => {
                        let side = missile.getEdge();
                        let point = MyUtils.createReasonablePos(missile.getPos());
                        if (side == Side.LEFT || side == Side.RIGHT) {
                            missile.setPos(point);
                            missile.setVelocityX(-missile.getVelocityX());
                        } else {
                            missile.setPos(point);
                            missile.setVelocityY(-missile.getVelocityY());
                        }
                    }
                )
                .setTriggerTimes(2)
            )
            .addHandler(
                new TickEventHandler(
                    (missile:MissileBase) => {
                        if (SelfMachine.INSTANCE.currentStage.getCurrentTick() == correctedTick + 20 * 5) {
                            missile.setTotalVelocity(-0.8 * missile.getVelocity());
                            missile.setTexture(TextureNames.MISSILE_STANDARD);
                        }
                    }
                )
            )
            .addHandler(
                new TickEventHandler(
                    (missile:MissileBase) => {
                        if (SelfMachine.INSTANCE.currentStage.getCurrentTick() >= correctedTick + 20 * 5) {
                            let v = missile.getVelocity() * 0.99;
                            if (v > 4) {
                                missile.setTotalVelocity(v);
                            } else {
                                missile.setDead();
                            }
                        }
                    }
                )
            )
            missile.addToStage();
        }

        for (let i = 0; i < 6; i++) {
            let initTheta = i / 6 * 2 * Math.PI;
            let launcher = LauncherFactory.texturedLauncher(TextureNames.MISSILE_BLUE, 64, 64).setInitialPos(new egret.Point(540 + 300 * Math.cos(initTheta), 900 + 300 * Math.sin(initTheta)));
            launcher.addLogic(
                new CustomPath(
                    launcher,
                    (tick:number) => {
                        let theta = initTheta - Math.abs(tick % (10 * 20) - 5 * 20) * MyUtils.ang2rad(1.8);
                        return new egret.Point(540 + 300 * Math.cos(theta), 900 + 300 * Math.sin(theta));
                    }
                )
            );
            launcher.addLogic(
                new CustomShooter(launcher,func).setFreq(100)
            );
        }
	}
}