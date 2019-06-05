abstract class MissileBase extends egret.Sprite {

	protected _size = 8;
    protected _texture = TextureNames.MISSILE_STANDARD;

    protected _life:number;
    protected _total_life = -1;

    protected _vx = 0;
    protected _vy = 0;

    protected _handler:Array<MissileEventHandler> = [];

    public _img:egret.Bitmap;
    public isBottomLayer = false;

    public constructor() {
        super();
        this._life = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.addEventListener(MissileEvent.TICK,this.SpecialLogic1,this);
        this.addEventListener(MissileEvent.EDGE,this.SpecialLogic2,this);
    }

    public setSize(size:number) {
        this._size = size;
        return this;
    }

    public getSize() {
        return this._size;
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
        this.x = point.x;
        this.y = point.y;
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

    public setBottomLayer(bool:boolean) {
        this.isBottomLayer = bool;
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
        this._life++;
        this._img.x += this._vx;
        this._img.y += this._vy;
        if (this.hasSpecialLogic(TickEventHandler)) {
            let event = new MissileTickEvent();
            this.dispatchEvent(event);
        }
        if (this._handler.length > 0) {
            let clone = this._handler.slice(0);
            for (let i: number = 0; i < this._handler.length; i++) {
			    if (this._handler[i].shouldSetDead()) {
                    MyUtils.removeFromArray(this._handler[i], clone);
			    }
		    }
            this._handler = clone;
        }
        if (this.shouldSetDead()) {
            this.setDead();
        }
    }

    public SpecialLogic1(event: MissileTickEvent) {
        for (let i of this._handler) {
            if (i instanceof TickEventHandler) {
                i.trigger(this);
            }
        }
    }

    public SpecialLogic2(event: MissileEdgeEvent) {
        for (let i of this._handler) {
            if (i instanceof EdgeEventHandler) {
                i.trigger(this);
            }
        }
    }
    
    protected hasSpecialLogic(type):boolean {
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
        this.removeChildren();
        this.parent.removeChild(this);
        MyUtils.removeFromArray(this, SelfMachine.INSTANCE.currentStage.arrayMissile);
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