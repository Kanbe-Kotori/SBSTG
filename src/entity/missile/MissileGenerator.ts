class MissileGenerator {

    public static createSniperMissile(point:egret.Point, velocity:number, size:number, texture:string) {
        let x = SelfMachine.INSTANCE.getX();
        let y = SelfMachine.INSTANCE.getY();
        let dx = x - point.x;
        let dy = y - point.y;
        let vx = velocity * dx / Math.sqrt(dx * dx + dy * dy)
        let vy = velocity * dy / Math.sqrt(dx * dx + dy * dy)
        let missile = new StandardMissile(point, vx, vy, size, texture);
        return missile;
    }

    public static createRingMissile(point:egret.Point, velocity:number, size:number, texture:string, num:number) {
        let arrayMissile:Array<MissileBase> = new Array<MissileBase>();
        for (var theta = 0; theta <= Math.PI * 2; theta += Math.PI * 2 / (num - 1) ) {
            let missile = new StandardMissile(point, velocity * Math.cos(theta), velocity * Math.sin(theta), 8, texture);
            arrayMissile.push(missile);
        }
        return arrayMissile;
    }
    
}