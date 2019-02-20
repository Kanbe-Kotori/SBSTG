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
var Emitter = (function (_super) {
    __extends(Emitter, _super);
    /**
     * 新建一个标准弹幕发射器
     * @param size 发射器在屏幕上的大小
     * @param velocity 弹幕速度
     * @param freq 多少毫秒一发
     * @param ang1 起始角度
     * @param ang2 终止角度
     * @param num 总共发射几条弹幕
     * @param color1 自身颜色
     * @param color2 弹幕颜色
    */
    function Emitter(point, size, velocity, freq, ang1, ang2, num, color1, color2) {
        var _this = _super.call(this) || this;
        _this.x = point.x;
        _this.y = point.y;
        _this._size = size;
        _this._velocity = velocity;
        _this._freq = freq;
        _this._ang1 = ang1;
        _this._ang2 = ang2;
        _this._num = num;
        _this._color1 = color1;
        _this._color2 = color2;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Emitter.prototype.onAddToStage = function (event) {
        this.shape = new egret.Shape();
        this.timer = new egret.Timer(this._freq, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
        //this.timer.start();
        this.doRender();
    };
    Emitter.prototype.doRender = function () {
        this.shape.graphics.beginFill(this._color1, 0.5);
        this.shape.graphics.drawCircle(0, 0, this._size);
        this.shape.graphics.endFill();
        this.addChild(this.shape);
    };
    Emitter.prototype.onUpdate = function (event) {
        //console.info("tick");
        for (var theta = Math.PI * this._ang1; theta <= Math.PI * this._ang2; theta += Math.PI * (this._ang2 - this._ang1) / (this._num - 1)) {
            var point = this.localToGlobal(0, 0);
            var missile = new StandardMissile(point, this._velocity * Math.cos(theta), this._velocity * Math.sin(theta), 8, this._color2);
            this.stage.addChild(missile);
        }
    };
    Emitter.prototype.start = function () {
        this.timer.start();
    };
    Emitter.prototype.stop = function () {
        this.timer.stop();
    };
    return Emitter;
}(egret.Sprite));
__reflect(Emitter.prototype, "Emitter");
