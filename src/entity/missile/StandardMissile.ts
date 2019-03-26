class StandardMissile extends MissileBase {

    protected readonly _texture:string;

    /**
	 * 新建一个标准子弹
	 * @param point 子弹生成位置
	 * @param vx 子弹x方向初速
	 * @param vy 子弹y方向初速
     * @param size 子弹大小,通常指子弹半径
     * @param texture 子弹纹理
	 */
    public constructor(point:egret.Point, vx:number, vy:number, size:number, texture:string) {
        super(point, vx, vy, size);
        this._texture = texture;
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