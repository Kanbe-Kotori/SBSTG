abstract class MissileBase extends egret.Sprite {

	protected _size:number;

    protected _vx:number;
    protected _vy:number;
    protected _color:number;
    protected _shape:egret.Shape;

	/**
	 * 新建一个子弹
	 * @param point 子弹生成位置
	 * @param vx 子弹x方向初速
	 * @param vy 子弹y方向初速
     * @param size 子弹大小
	 * @param color 子弹颜色
	 */
    public constructor(point:egret.Point, vx:number, vy:number, size:number, color:number) {
        super();
        this.x = point.x;
        this.y = point.y;
        this._vx = vx;
        this._vy = vy;
        this._size = size;
        this._color = color;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    protected onAddToStage(event:egret.Event) {
        this._shape = new egret.Shape();
        SelfMachine.INSTANCE.currentStage.arrayMissile.push(this);
        this.doRender();
    }

    protected abstract doRender();

    public onUpdate() {
        this._shape.x += this._vx;
        this._shape.y += this._vy;
        if (this.shouldSetDead()) {
            this.setDead();
        }
    }

    /**
     * 检测该子弹是否需要消弹
     */
    protected abstract shouldSetDead():boolean;

    public setDead() {
        this.removeChild(this._shape);
        this.parent.removeChild(this);
        for (let i: number = 0; i < SelfMachine.INSTANCE.currentStage.arrayMissile.length; i++) {
			if (SelfMachine.INSTANCE.currentStage.arrayMissile[i] == this) {
				SelfMachine.INSTANCE.currentStage.arrayMissile.splice(i, 1);
				break;
			}
		}
    }

    public getX() {
        return this.localToGlobal(this._shape.x, this._shape.y).x;
    }

    public getY() {
        return this.localToGlobal(this._shape.x, this._shape.y).y;
    }

    /**
     * 检测该子弹是否与自机碰撞，自机对象从instance获取
     */
    public abstract isCollide():boolean;
}