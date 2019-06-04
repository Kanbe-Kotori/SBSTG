class StandardMissile extends MissileBase {

    protected shouldSetDead() {
        if (this.getY() < Main.UPPER_Y || this.getY() > Main.BELOW_Y || this.getX() < 0 || this.getX() > SelfMachine.INSTANCE.currentStage.width) {
            if (!this.hasSpecialLogic(EdgeEventHandler)) {
                return true;
            } else {
                let event:MissileEdgeEvent = new MissileEdgeEvent();
                this.dispatchEvent(event);
                return false;
            }
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

}