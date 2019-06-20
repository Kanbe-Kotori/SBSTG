abstract class MissileBase {

	protected _missile_width = 8;
    protected _missile_height = 8;
    protected _texture = TextureNames.MISSILE_STANDARD;

    protected _life:number;
    protected _total_life = -1;

    protected _posX = 0;
    protected _posY = 0;
    protected _vx = 0;
    protected _vy = 0;

    protected _handler:Array<MissileEventHandler> = [];

    public _img:egret.Bitmap;
    public isBottomLayer = false;

    public constructor() {
        this._life = 0;
    }

    public setSize(width:number, height:number) {
        this._missile_width = width;
        this._missile_height = height;
        return this;
    }

    public getWidth() {
        return this._missile_width;
    }

    public getHeight() {
        return this._missile_height;
    }

    public addHandler(handler:MissileEventHandler) {
        this._handler.push(handler);
        return this;
    }

    public setTexture(texture:string) {
        this._texture = texture;
        return this;
    }

    public setPos(point:egret.Point) {
        this._posX = point.x;
        this._posY = point.y;
        return this;
    }

    public setVelocity(vx:number, vy:number) {
        this._vx = vx;
        this._vy = vy;
        return this;
    }

    public getLife() {
        return this._life;
    }

    public addToStage(stage:StageBase) {
        let layer = this.isBottomLayer? DrawingLayer.BOTTOM_MISSILE : DrawingLayer.UPPER_MISSILE;
        this.initIMG();
        stage.addChildAtLayer(this._img, layer);
        stage.arrayMissile.push(this);
    }

    public setBottomLayer(bool:boolean) {
        this.isBottomLayer = bool;
		return this;
    }

    public abstract initIMG();

    /**
     * 子弹在每个tick都要进行的动作，例如位置变换。
     * 子弹tick时间通常为50ms。
     */
    public onUpdate(event: egret.TimerEvent) {
        this._life++;
        this._posX += this._vx;
        this._posY += this._vy;
        this._img.x = this._posX;
        this._img.y = this._posY;

        if (this.shouldSetDead()) {
            this.setDead();
        }
    }

    public static TickLogic(event: MissileTickEvent) {
        for (let i of event.getMissile()._handler) {
            if (i instanceof TickEventHandler) {
                i.trigger(event.getMissile());
            }
        }
    }

    public static EdgeLogic(event: MissileEdgeEvent) {
        for (let i of event.getMissile()._handler) {
            if (i instanceof EdgeEventHandler) {
                i.trigger(event.getMissile());
            }
        }
    }
    
    public hasSpecialLogic(type):boolean {
        if (this._handler == null) {
            return false;
        }
        for (let i of this._handler) {
            if (i instanceof type) {
                return true;
            }
        }
        return false;
    }

    /**
     * 检测该子弹是否需要消弹
     */
    protected abstract shouldSetDead():boolean;

    public setDead() {
        this._handler = null;
        if (this._img != null && this._img.parent != null)
            this._img.parent.removeChild(this._img);
        MyUtils.removeFromArray(this, SelfMachine.INSTANCE.currentStage.arrayMissile);
    }

    public getX() {
        return this._posX;
    }

    public getY() {
        return this._posY;
    }

    public getPos() {
        return new egret.Point(this._posX, this._posY);
    }

    /**
     * 检测该子弹是否与自机碰撞，自机对象从instance获取
     */
    public abstract isCollide():boolean;

    public getEdge():Side {
        if (this.getY() < Main.UPPER_Y) {
            return Side.TOP;
        } else if (this.getY() > Main.BELOW_Y) {
            return Side.BOTTOM;
        } else if (this.getX() < 0) {
            return Side.LEFT;
        } else if (this.getX() > Main.X) {
            return Side.RIGHT;
        }
        return null;
    }
}