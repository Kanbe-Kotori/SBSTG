abstract class MissileBase extends egret.Sprite {

	protected _size = 8;
    protected _texture = TextureNames.MISSILE_STANDARD;

    protected _vx = 0;
    protected _vy = 0;

    protected _rotate_speed:number = 0;

    protected _img:egret.Bitmap;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    public setSize(size:number) {
        this._size = size;
        return this;
    }

    public setRotate(rotate:number) {
        this._rotate_speed = rotate;
        return this;
    }

    public setTexture(texture:string) {
        this._texture = texture;
        return this;
    }

    public setPos(point:egret.Point) {
        this.x = point.x;
        this.y = point.y;
        return this;
    }

    public setVelocity(vx:number, vy:number) {
        this._vx = vx;
        this._vy = vy;
        return this;
    }

    protected onAddToStage(event:egret.Event) {
        //SelfMachine.INSTANCE.currentStage.arrayMissile.push(this);
        this.doRender();
    }

    protected abstract doRender();

    /**
     * 子弹在每个tick都要进行的动作，例如位置变换。
     * 子弹tick时间通常为50ms。
     */
    public onUpdate(event: egret.TimerEvent) {
        this._img.x += this._vx;
        this._img.y += this._vy;
        this._img.rotation += this._rotate_speed;
        if (this.shouldSetDead()) {
            this.setDead();
        }
    }

    /**
     * 检测该子弹是否需要消弹
     */
    protected abstract shouldSetDead():boolean;

    public setDead() {
        this.removeChildren();
        this.parent.removeChild(this);
        for (let i: number = 0; i < SelfMachine.INSTANCE.currentStage.arrayMissile.length; i++) {
			if (SelfMachine.INSTANCE.currentStage.arrayMissile[i] == this) {
				SelfMachine.INSTANCE.currentStage.arrayMissile.splice(i, 1);
				break;
			}
		}
    }

    public getX() {
        return this.localToGlobal(this._img.x, this._img.y).x;
    }

    public getY() {
        return this.localToGlobal(this._img.x, this._img.y).y;
    }

    /**
     * 检测该子弹是否与自机碰撞，自机对象从instance获取
     */
    public abstract isCollide():boolean;
}