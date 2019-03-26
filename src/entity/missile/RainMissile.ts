class RainMissile extends StandardMissile {

    public constructor(point:egret.Point, vx:number, vy:number) {
        super(point, vx, vy, 8, TextureNames.MISSILE_1);
    }

    protected shouldSetDead() {
        if (this.getY() < SelfMachine.INSTANCE.currentStage.height * Main.UPPER_Y || this.getY() > SelfMachine.INSTANCE.currentStage.height * Main.BELOW_Y) {
            return true;
        }
        return false;
    }

	public onUpdate() {
       super.onUpdate();
	   if (this.getX() < 0) {
		   this._img.x += SelfMachine.INSTANCE.currentStage.width;
	   } else if(this.getX() > SelfMachine.INSTANCE.currentStage.width) {
           this._img.x += SelfMachine.INSTANCE.currentStage.width;
       }
    }

}