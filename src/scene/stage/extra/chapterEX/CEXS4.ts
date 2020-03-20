class CEXS4 extends StageBase {
	public constructor() {
        super("cexs4", 30);
    }

    protected initEmitters() {
		let point1 = new egret.Point(540, 720);
        let launcher1 = LauncherFactory.texturedLauncher(TextureNames.MISSILE_RING, 160, 160).setInitialPos(point1);
        launcher1.addLogic(
            new CustomShooter(
                launcher1,
                (launcher:Launcher) => {
                    let num = 8 * Math.random();
                    num -= num % 1;
                    CEXS4.createLine(240, 0 + 45 * num, true);
                    CEXS4.createLine(300, 0 + 45 * num, true);
                    CEXS4.createLine(360, 0 + 45 * num, false);

                    CEXS4.createLine(240, 45 + 45 * num, true);
                    CEXS4.createLine(300, 45 + 45 * num, true);
                    CEXS4.createLine(360, 45 + 45 * num, true);

                    CEXS4.createLine(240, 90 + 45 * num, false);
                    CEXS4.createLine(300, 90 + 45 * num, true);
                    CEXS4.createLine(360, 90 + 45 * num, false);

                    CEXS4.createLine(240, 135 + 45 * num, false);
                    CEXS4.createLine(300, 135 + 45 * num, false);
                    CEXS4.createLine(360, 135 + 45 * num, true);

                    CEXS4.createLine(240, 180 + 45 * num, true);
                    CEXS4.createLine(300, 180 + 45 * num, false);
                    CEXS4.createLine(360, 180 + 45 * num, false);

                    CEXS4.createLine(240, 225 + 45 * num, false);
                    CEXS4.createLine(300, 225 + 45 * num, true);
                    CEXS4.createLine(360, 225 + 45 * num, true);

                    CEXS4.createLine(240, 270 + 45 * num, true);
                    CEXS4.createLine(300, 270 + 45 * num, false);
                    CEXS4.createLine(360, 270 + 45 * num, true);

                    CEXS4.createLine(240, 315 + 45 * num, false);
                    CEXS4.createLine(300, 315 + 45 * num, false);
                    CEXS4.createLine(360, 315 + 45 * num, false);
                }
            )
            .setFreq(2500)
        )
        /*launcher1.addLogic(
            new CustomShooter(
                launcher1,
                (launcher:Launcher) => {
                    for (let i = 0; i < 3; i++) {
                        let flag = Math.random() > 0.5;
                        for (let j = 0; j <= 20; j++) {
                            if (flag && j >= 7 && j <= 14) {
                                continue;
                            }
                            let point = Test.getRelativePoint(300 + 120 * i, MissileUtils.getSniperAngle(launcher.getPos()), 160, j);
                            let missile = new RoundMissile()
                            .setTexture(TextureNames.MISSILE_STANDARD)
                            .setPos(new egret.Point(540, 720))
                            .setVelocity(point.x / 10, point.y / 10);
                            missile.addToStage();
                        }
                    }
                }
            )
            .setFreq(2500)
            .setDelay(2000)
        )*/
    }

    public static createLine(dist:number, ang:number, con:boolean) {
        ang = MyUtils.ang2rad(ang);
        let tick = SelfMachine.INSTANCE.currentStage.getCurrentTick();
        let clock = tick % 100 >= 25;
        for (let i = 0; i <= 20; i++) {
            if (!con && i >= 7 && i <= 14) {
                continue;
            }
            let point = CEXS4.getRelativePoint(dist, ang, 160, i);
            let dv = (Math.sqrt(point.x * point.x + point.y * point.y) / 5) / 10;
            let missile = new RoundMissile()
            .setTexture(TextureNames.MISSILE_STANDARD)
            .setPos(new egret.Point(540, 720))
            .setVelocity(point.x / 5, point.y / 5)
            .addHandler(
                new TickEventHandler(
                    (missile:MissileBase) => {
                        missile.setTotalVelocity(missile.getVelocity() - dv);
                    }
                )
                .setTriggerTimes(10)
            )
            .addHandler(
                new TickEventHandler(
                    (missile:MissileBase) => {
                        let num = missile.getLife() - 20;
                        let point1 = CEXS4.getRelativePoint(dist + 6 * num, clock? ang + num * MyUtils.ang2rad(6) : ang - num * MyUtils.ang2rad(6), 160 + 5 * num, i);
                        let dx = 540 + point1.x - missile.getX();
						let dy = 720 + point1.y - missile.getY();
						missile.setVelocity(dx, dy);
                    }
                )
                .setStartTicks(20)
            )
            .addHandler(
                new EdgeEventHandler(
                    (missile:MissileBase) => {
                        let dx = 540 - missile.getX();
						let dy = 720 - missile.getY();
                        let d = Math.sqrt(dx * dx + dy * dy);
                        if (d > 960)
                            missile.setDead();
                    }
                )
            )
            .addHandler(
                new TickEventHandler(
                    (missile:MissileBase) => {
                        if (missile.getY() < Main.UPPER_Y) {
                            missile.resize(0, 0);
                        } else {
                            missile.resize(24, 24);
                        }
                    }
                )
            );
            missile.addToStage();
        }
    }

    public static getRelativePoint(dist:number, ang:number, length:number, i:number) {
        let centre_x = dist * Math.cos(ang);
        let centre_y = dist * Math.sin(ang);
        let dx = centre_x + length * Math.sin(ang) * (2 * i - 20) / 40;
        let dy = centre_y - length * Math.cos(ang) * (2 * i - 20) / 40;
        return new egret.Point(dx, dy);
    }
	
}