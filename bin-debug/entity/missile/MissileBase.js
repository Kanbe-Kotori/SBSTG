var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MissileBase = (function (_super) {
    __extends(MissileBase, _super);
    /**
     * 新建一个子弹
     * @param point 子弹生成位置
     * @param vx 子弹x方向初速
     * @param vy 子弹y方向初速
     * @param size 子弹大小
     * @param color 子弹颜色
     */
    function MissileBase(point, vx, vy, size, color) {
        var _this = _super.call(this) || this;
        _this.x = point.x;
        _this.y = point.y;
        _this._vx = vx;
        _this._vy = vy;
        _this._size = size;
        _this._color = color;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MissileBase.prototype.onAddToStage = function (event) {
        this._shape = new egret.Shape();
        this.timer = new egret.Timer(50, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
        this.timer.start();
        SelfMachine.INSTANCE.currentStage.array.push(this);
        this.doRender();
    };
    MissileBase.prototype.onUpdate = function (event) {
        this._shape.x += this._vx;
        this._shape.y += this._vy;
        if (this.shouldSetDead()) {
            this.setDead();
        }
        event.updateAfterEvent();
    };
    MissileBase.prototype.setDead = function () {
        if (this.contains(this._shape)) {
            this.removeChild(this._shape);
        }
        this.timer.stop();
        for (var i = 0; i < SelfMachine.INSTANCE.currentStage.array.length; i++) {
            if (SelfMachine.INSTANCE.currentStage.array[i] == this) {
                SelfMachine.INSTANCE.currentStage.array.splice(i, 1);
                break;
            }
        }
    };
    MissileBase.prototype.getX = function () {
        return this.localToGlobal(this._shape.x, this._shape.y).x;
    };
    MissileBase.prototype.getY = function () {
        return this.localToGlobal(this._shape.x, this._shape.y).y;
    };
    return MissileBase;
}(egret.Sprite));
__reflect(MissileBase.prototype, "MissileBase");
