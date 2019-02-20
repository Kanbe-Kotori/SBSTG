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
var StandardMissile = (function (_super) {
    __extends(StandardMissile, _super);
    function StandardMissile(point, vx, vy, size, color) {
        return _super.call(this, point, vx, vy, size, color) || this;
    }
    StandardMissile.prototype.shouldSetDead = function () {
        if (this.getX() < 0 || this.getX() > Main.X || this.getY() < Main.UPPER_Y || this.getY() > Main.BELOW_Y) {
            return true;
        }
        return false;
    };
    StandardMissile.prototype.doRender = function () {
        //console.log("render");
        this._shape.graphics.beginFill(this._color, 1);
        this._shape.graphics.drawCircle(0, 0, this._size);
        this._shape.graphics.endFill();
        this.addChild(this._shape);
    };
    StandardMissile.prototype.isCollide = function () {
        var dx = this.getX() - SelfMachine.INSTANCE.getX();
        var dy = this.getY() - SelfMachine.INSTANCE.getY();
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= SelfMachine.SIZE + this._size) {
            return true;
        }
        return false;
    };
    return StandardMissile;
}(MissileBase));
__reflect(StandardMissile.prototype, "StandardMissile");
