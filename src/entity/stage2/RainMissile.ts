class RainMissile extends StandardMissile {

    public constructor(point:egret.Point, vx:number, vy:number) {
        super(point, vx, vy, 8, 0x0000FF);
    }

    protected shouldSetDead() {
        if (this.getY() < SelfMachine.INSTANCE.currentStage.height * Main.UPPER_Y || this.getY() > SelfMachine.INSTANCE.currentStage.height * Main.BELOW_Y) {
            return true;
        }
        return false;
    }

	protected onUpdate(event: egret.TimerEvent) {
       super.onUpdate(event);
	   if (this.getX() < 0) {
		   this._shape.x += SelfMachine.INSTANCE.currentStage.width;
	   } else if(this.getX() > SelfMachine.INSTANCE.currentStage.width) {
           this._shape.x += SelfMachine.INSTANCE.currentStage.width;
       }
    }

}