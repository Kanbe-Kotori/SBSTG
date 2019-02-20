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
var Sniper = (function (_super) {
    __extends(Sniper, _super);
    /**
     * 新建一个标准自机狙发射器
     * @param size 发射器在屏幕上的大小
     * @param velocity 弹幕速度
     * @param freq 多少毫秒一发
     * @param color1 自身颜色
     * @param color2 弹幕颜色
    */
    function Sniper(point, size, velocity, freq, color1, color2) {
        var _this = _super.call(this) || this;
        _this.x = point.x;
        _this.y = point.y;
        _this._size = size;
        _this._velocity = velocity;
        _this._freq = freq;
        _this._color1 = color1;
        _this._color2 = color2;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Sniper.prototype.onAddToStage = function (event) {
        this.shape = new egret.Shape();
        this.timer = new egret.Timer(this._freq, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
        //this.timer.start();
        this.doRender();
    };
    Sniper.prototype.doRender = function () {
        this.shape.graphics.beginFill(this._color1, 0.5);
        this.shape.graphics.drawCircle(0, 0, this._size);
        this.shape.graphics.endFill();
        this.addChild(this.shape);
    };
    Sniper.prototype.onUpdate = function (event) {
        //console.info("tick");
        var targetPoint = this.localToGlobal(0, 0);
        var playerPoint = this.globalToLocal(SelfMachine.INSTANCE.getX(), SelfMachine.INSTANCE.getY());
        var dx = playerPoint.x / Math.sqrt(playerPoint.x * playerPoint.x + playerPoint.y * playerPoint.y);
        var dy = playerPoint.y / Math.sqrt(playerPoint.x * playerPoint.x + playerPoint.y * playerPoint.y);
        var missile = new StandardMissile(targetPoint, this._velocity * dx, this._velocity * dy, 8, this._color2);
        this.stage.addChild(missile);
    };
    Sniper.prototype.start = function () {
        this.timer.start();
    };
    Sniper.prototype.stop = function () {
        this.timer.stop();
    };
    Sniper.prototype.startWithDelay = function (delay) {
        var timer1 = new egret.Timer(delay, 1);
        timer1.addEventListener(egret.TimerEvent.TIMER, this.start, this);
        timer1.start();
    };
    return Sniper;
}(egret.Sprite));
__reflect(Sniper.prototype, "Sniper");
