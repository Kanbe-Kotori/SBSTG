class StandardMissile extends MissileBase {

    public constructor(point:egret.Point, vx:number, vy:number, size:number, color:number) {
        super(point, vx, vy, size, color);
    }

    protected shouldSetDead() {
        if (this.getX() < 0 || this.getX() > SelfMachine.INSTANCE.currentStage.width
            || this.getY() < SelfMachine.INSTANCE.currentStage.height * Main.UPPER_Y
            || this.getY() > SelfMachine.INSTANCE.currentStage.height * Main.BELOW_Y) {
            return true;
        }
        return false;
    }

    protected doRender() {
        //console.log("render");
        this._shape.graphics.beginFill(this._color, 1);
        this._shape.graphics.drawCircle(0, 0, this._size);
        this._shape.graphics.endFill();
        this.addChild(this._shape);
    }

    public isCollide() {
        let dx:number = this.getX() - SelfMachine.INSTANCE.getX();
        let dy:number = this.getY() - SelfMachine.INSTANCE.getY();
        let dist:number = Math.sqrt(dx*dx + dy*dy);
        if (dist <= SelfMachine.SIZE + this._size) {
            return true;
        }
        return false;
    }

}