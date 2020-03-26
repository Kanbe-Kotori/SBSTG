class RoundMissile extends MissileBase {

    public setRadius(r:number) {
        return this.setSize(2 * r, 2 * r);
    }

    protected shouldSetDead() {
        let r = this._missile_width / 2;
        if (this.getY() < Main.UPPER_Y - r || this.getY() > Main.BELOW_Y + r || this.getX() < -r || this.getX() > Main.X + r) {
            if (!this.hasSpecialLogic(EdgeEventHandler)) {
                return true;
            } else {
                let event:MissileEdgeEvent = new MissileEdgeEvent(this);
                SelfMachine.INSTANCE.currentStage.dispatchEvent(event);
                return false;
            }
        }
        return false;
    }

    public initIMG() {
        this.img = MyUtils.createBitmapByName(this._texture);
        this.img.width = this._missile_width * 1.15;
        this.img.height = this._missile_height * 1.15;
        this.img.anchorOffsetX = this.img.width/2;
        this.img.anchorOffsetY = this.img.height/2;
        this.img.x = this._posX;
        this.img.y = this._posY;
    }

    public isCollide() {
        if (this.ignoreCollideCheck) {
            return false;
        }
        let dx:number = this.getX() - SelfMachine.INSTANCE.getX();
        let dy:number = this.getY() - SelfMachine.INSTANCE.getY();
        let dist:number = Math.sqrt(dx*dx + dy*dy);
        if (dist <= SelfMachine.SIZE + this._missile_width / 2) {
            return true;
        }
        return false;
    }

    public clone():MissileBase {
        let missile = new RoundMissile()
            .setSize(this._missile_width, this._missile_height)
            .setTexture(this._texture)
            .setBottomLayer(this.isBottomLayer)
            .setPos(new egret.Point(this._posX, this._posY))
            .setVelocity(this._vx, this._vy);
        for(let i of this._handler) {
            missile.addHandler(i.clone());
        }
        return missile;
    }

}