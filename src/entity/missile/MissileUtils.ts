class MissileUtils {

    public static readonly MISSILE_STANDARD = "STANDARD";
    public static readonly MISSILE_VARIABLE_SIZED = "VARIABLE_SIZED";

    public static readonly RANDOM_VELOCITY_PARA = 0;
    public static readonly ROTATE_SPEED_PARA = 1;
    public static readonly SIZE_FINAL_PARA = 2;
    public static readonly SIZE_CHANGE_PARA = 3;

    public static createRingMissile(point:egret.Point, conf:MissileConfig, num:number) {
        let arrayMissile:Array<MissileBase> = new Array<MissileBase>();
        for (var theta = 0; theta <= Math.PI * 2; theta += Math.PI * 2 / (num - 1) ) {
            let missile = conf.createMissile().setPos(point).setVelocity(conf.getVelocity() * Math.cos(theta), conf.getVelocity() * Math.sin(theta));
            arrayMissile.push(missile);
        }
        return arrayMissile;
    }
    
}