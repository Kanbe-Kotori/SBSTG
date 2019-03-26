class MissileGenerator {

    public static createSniperMissile(point:egret.Point, velocity:number, size:number) {
        let x = SelfMachine.INSTANCE.getX();
        let y = SelfMachine.INSTANCE.getY();
        let dx = x - point.x;
        let dy = y - point.y;
        let vx = velocity * dx / Math.sqrt(dx * dx + dy * dy)
        let vy = velocity * dy / Math.sqrt(dx * dx + dy * dy)
        let missile = new StandardMissile(point, vx,vy, size, Names.MISSILE_NAME_1);
        return missile;
    }
    
}