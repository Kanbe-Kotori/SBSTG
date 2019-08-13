class MissileUtils {

    public static readonly MISSILE_ROUND = "ROUND";
    public static readonly MISSILE_ELLIPTICAL = "ELLIPTICAL";

    public static readonly RANDOM_VELOCITY_PARA = 0;

    public static createRingMissile(point:egret.Point, conf:MissileConfig, num:number) {
        let arrayMissile:Array<MissileBase> = new Array<MissileBase>();
        for (var theta = 0; theta <= Math.PI * 2; theta += Math.PI * 2 / (num - 1) ) {
            let missile = conf.createMissile().setPos(point).setVelocity(conf.getVelocity() * Math.cos(theta), conf.getVelocity() * Math.sin(theta));
            arrayMissile.push(missile);
        }
        return arrayMissile;
    }
    
    public static getSniperAngle(point:egret.Point) {
        let dx = SelfMachine.INSTANCE.getX() - point.x;
        let dy = SelfMachine.INSTANCE.getY() - point.y;
        if (dx == 0) {
            return dy >= 0? Math.PI / 2 : - Math.PI / 2;
        } else if (dx > 0) {
            return Math.atan(dy / dx);
        } else {
            return Math.atan(dy / dx) + Math.PI;
        }
    }

    public static createEdgePoint() {
        let ran = Math.random() * 5040;
			if (ran <= 1080) {
				return new egret.Point(ran, 240);
			} else if (ran <= 2520) {
			    return new egret.Point(1080, ran - 840);
			} else if (ran <= 3600) {
				return new egret.Point(ran - 2520, 1680);
			} else {
				return new egret.Point(0, ran - 3360);
			}
    }
    
}