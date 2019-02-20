abstract class MissileBase extends egret.Sprite {

	protected _size:number;

    protected _vx:number;
    protected _vy:number;
    protected _color:number;
    protected _shape:egret.Shape;

    protected timer:egret.Timer;

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
        this.timer = new egret.Timer(50, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
        this.timer.start();
        SelfMachine.INSTANCE.currentStage.array.push(this);
        this.doRender();
    }

    protected abstract doRender();

    protected onUpdate(event: egret.TimerEvent) {
        this._shape.x += this._vx;
        this._shape.y += this._vy;
        if (this.shouldSetDead()) {
            this.setDead();
        }
        event.updateAfterEvent();
    }

    protected abstract shouldSetDead():boolean;

    public setDead() {
        if (this.contains(this._shape)) {
            this.removeChild(this._shape);
        }
        this.timer.stop();
        for (let i: number = 0; i < SelfMachine.INSTANCE.currentStage.array.length; i++) {
			if (SelfMachine.INSTANCE.currentStage.array[i] == this) {
				SelfMachine.INSTANCE.currentStage.array.splice(i, 1);
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

    public abstract isCollide():boolean;
}