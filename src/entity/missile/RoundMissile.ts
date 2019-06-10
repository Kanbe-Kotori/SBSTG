class RoundMissile extends MissileBase {

    public setRadius(r:number) {
        return this.setSize(2 * r, 2 * r);
    }

    protected shouldSetDead() {
        if (this.getY() < Main.UPPER_Y || this.getY() > Main.BELOW_Y || this.getX() < 0 || this.getX() > Main.X) {
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
        this._img.width = this._missile_width;
        this._img.height = this._missile_height;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this.addChild(this._img);
    }

    public isCollide() {
        let dx:number = this.getX() - SelfMachine.INSTANCE.getX();
        let dy:number = this.getY() - SelfMachine.INSTANCE.getY();
        let dist:number = Math.sqrt(dx*dx + dy*dy);
        if (dist <= SelfMachine.SIZE + this._missile_width / 2) {
            return true;
        }
        return false;
    }

}