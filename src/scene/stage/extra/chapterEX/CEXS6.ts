class CEXS6 extends StageBase {
	public constructor() {
        super("cexs6", 30);
    }

    protected initEmitters() {
		let launcher1 = LauncherFactory.normalLauncher();
		launcher1.addLogic(
			new CustomShooter(
                launcher1,
                (launcher:Launcher) => {
					let tick = SelfMachine.INSTANCE.currentStage.getCurrentTick();
					let clock = tick % 100 >= 25;
					let left = new RoundMissile()
					.setTexture(TextureNames.MISSILE_RING_RED)
					.setSize(240, 240)
					.setPos(new egret.Point(120, Main.UPPER_Y))
					.setVelocity(0, 20)
					.addHandler(
						new TickEventHandler(
							(missile:MissileBase) => {
								missile.rotate(clock?9:-9);
							}
						)
					)
					left.addToStage();

					let right = new RoundMissile()
					.setTexture(TextureNames.MISSILE_RING_RED)
					.setSize(240, 240)
					.setPos(new egret.Point(960, Main.UPPER_Y))
					.setVelocity(0, 20)
					.addHandler(
						new TickEventHandler(
							(missile:MissileBase) => {
								missile.rotate(clock?18:-18);
							}
						)
					)
					right.addToStage();

					for(let i = 0; i < 9; i++) {
						let missile = new RoundMissile()
						.setTexture(TextureNames.MISSILE_RED)
						.setTotalVelocity(0)
						.setPos(CEXS6.getPos(new egret.Point(left.getX(), left.getY() + left.getWidth() / 2), new egret.Point(right.getX(), right.getY() + right.getWidth() / 2), i, 8))
						.addHandler(
							new TickEventHandler(
								(missile:MissileBase) => {
									let lx1 = left.getX() + left.getWidth() / 2 * Math.sin(MyUtils.ang2rad((clock?9:-9)*left.getLife()));
									let ly1 = left.getY() + left.getWidth() / 2 * Math.cos(MyUtils.ang2rad((clock?9:-9)*left.getLife()));
									let rx1 = right.getX() + right.getWidth() / 2 * Math.sin(MyUtils.ang2rad((clock?18:-18)*right.getLife()));
									let ry1 = right.getY() + right.getWidth() / 2 * Math.cos(MyUtils.ang2rad((clock?18:-18)*right.getLife()));
									let point1 = CEXS6.getPos(new egret.Point(lx1, ly1), new egret.Point(rx1, ry1), i, 8);
									let dx = point1.x - missile.getX();
									let dy = point1.y - missile.getY();
									missile.setVelocity(dx, dy);
								}
							)
						)
						.addHandler(
							new EdgeEventHandler(
								(missile:MissileBase) => {
									let side = missile.getEdge();
									if (side == Side.BOTTOM) {
										missile.setDead();
									}
								}
							)
						)
						missile.addToStage();
					}

					for(let i = 0; i < 9; i++) {
						let missile = new RoundMissile()
						.setTexture(TextureNames.MISSILE_RED)
						.setTotalVelocity(0)
						.setPos(CEXS6.getPos(new egret.Point(left.getX(), left.getY() - left.getWidth() / 2), new egret.Point(right.getX(), right.getY() - right.getWidth() / 2), i, 8))
						.addHandler(
							new TickEventHandler(
								(missile:MissileBase) => {
									let lx2 = left.getX() - left.getWidth() / 2 * Math.sin(MyUtils.ang2rad((clock?9:-9)*left.getLife()));
									let ly2 = left.getY() - left.getWidth() / 2 * Math.cos(MyUtils.ang2rad((clock?9:-9)*left.getLife()));
									let rx2 = right.getX() - right.getWidth() / 2 * Math.sin(MyUtils.ang2rad((clock?18:-18)*right.getLife()));
									let ry2 = right.getY() - right.getWidth() / 2 * Math.cos(MyUtils.ang2rad((clock?18:-18)*right.getLife()));
									let point1 = CEXS6.getPos(new egret.Point(lx2, ly2), new egret.Point(rx2, ry2), i, 8);
									let dx = point1.x - missile.getX();
									let dy = point1.y - missile.getY();
									missile.setVelocity(dx, dy);
								}
							)
						)
						.addHandler(
							new EdgeEventHandler(
								(missile:MissileBase) => {
									let side = missile.getEdge();
									if (side == Side.BOTTOM) {
										missile.setDead();
									}
								}
							)
						)
						missile.addToStage();
					}
				}
			)
			.setFreq(2500)
		)
	}

	public static getPos(point1:egret.Point, point2:egret.Point, i:number, total:number):egret.Point {
		let x = point1.x * (1 - i/total) + point2.x * i/total;
		let y = point1.y * (1 - i/total) + point2.y * i/total;
		return new egret.Point(x, y);
	}
}