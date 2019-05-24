class StandardMissile extends MissileBase {


    //如果从左边出去，就从右边飞回来
    protected isLRConn = false;

    protected shouldSetDead() {
        if (this.getY() < Main.UPPER_Y || this.getY() > Main.BELOW_Y) {
            return true;
        }
        
        if (this.getX() < 0 || this.getX() > SelfMachine.INSTANCE.currentStage.width) {
            return !this.isLRConn;
        }
        return false;
    }

    protected doRender() {
        //console.log("render");
        this._img = MyUtils.createBitmapByName(this._texture);
        this._img.width = 2 * this._size;
        this._img.height = 2 * this._size;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this.addChild(this._img);
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

    public onUpdate(event: egret.TimerEvent) {
       super.onUpdate(event);
       if (!this.isLRConn) {
           return;
       }
	   if (this.getX() < 0) {
		   this._img.x += SelfMachine.INSTANCE.currentStage.width;
	   } else if(this.getX() > SelfMachine.INSTANCE.currentStage.width) {
           this._img.x += SelfMachine.INSTANCE.currentStage.width;
       }
    }

    public setLRConn() {
        this.isLRConn = true;
        return this;
    }

}