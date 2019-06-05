class MissileUtils {

    public static readonly MISSILE_STANDARD = "STANDARD";

    public static readonly RANDOM_VELOCITY_PARA = 0;

    public static createRingMissile(point:egret.Point, conf:MissileConfig, num:number) {
        let arrayMissile:Array<MissileBase> = new Array<MissileBase>();
        for (var theta = 0; theta <= Math.PI * 2; theta += Math.PI * 2 / (num - 1) ) {
            let missile = conf.createMissile().setPos(point).setVelocity(conf.getVelocity() * Math.cos(theta), conf.getVelocity() * Math.sin(theta));
            arrayMissile.push(missile);
        }
        return arrayMissile;
    }
    
    public static createSniperMissile(point:egret.Point, conf:MissileConfig) {
        let x = SelfMachine.INSTANCE.getX();
        let y = SelfMachine.INSTANCE.getY();
        let dx = x - point.x;
        let dy = y - point.y;
        let v = conf.getVelocity();
        let vx = v * dx / Math.sqrt(dx * dx + dy * dy)
        let vy = v * dy / Math.sqrt(dx * dx + dy * dy)
        let missile = conf.createMissile().setPos(point).setVelocity(vx, vy);
        return missile;
    }
    
}