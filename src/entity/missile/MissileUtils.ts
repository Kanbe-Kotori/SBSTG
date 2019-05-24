class MissileUtils {

    public static readonly MISSILE_STANDARD = "STANDARD";
    public static readonly MISSILE_RANDOM_VELOCITY = "RANDOM_VELOCITY";
    public static readonly MISSILE_VARIABLE_SIZED = "VARIABLE_SIZED";

    public static createRingMissile(point:egret.Point, conf:MissileConfig, num:number) {
        let arrayMissile:Array<MissileBase> = new Array<MissileBase>();
        for (var theta = 0; theta <= Math.PI * 2; theta += Math.PI * 2 / (num - 1) ) {
            let missile = conf.createMissile().setPos(point).setVelocity(conf.getVelocity() * Math.cos(theta), conf.getVelocity() * Math.sin(theta));
            arrayMissile.push(missile);
        }
        return arrayMissile;
    }
    
}