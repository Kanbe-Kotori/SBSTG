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
var Stage1 = (function (_super) {
    __extends(Stage1, _super);
    function Stage1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stage1.prototype.onAddToStage = function (event) {
        _super.prototype.onAddToStage.call(this, event);
        var point1 = new egret.Point(this.stage.stageWidth * 0.5, 300);
        this.emitter1 = new Emitter(point1, 48, 20, 300, 0.25, 0.75, 11, 0xFF0000, 0xFF0000);
        this.addChild(this.emitter1);
        var point2 = new egret.Point(this.stage.stageWidth * 0.1, 300);
        this.sniper2 = new Sniper(point2, 48, 35, 250, 0x00FF00, 0x00FF00);
        this.addChild(this.sniper2);
        var point3 = new egret.Point(this.stage.stageWidth * 0.3, 300);
        this.sniper3 = new Sniper(point3, 48, 35, 250, 0x00FF00, 0x00FF00);
        this.addChild(this.sniper3);
        var point4 = new egret.Point(this.stage.stageWidth * 0.7, 300);
        this.sniper4 = new Sniper(point4, 48, 35, 250, 0x00FF00, 0x00FF00);
        this.addChild(this.sniper4);
        var point5 = new egret.Point(this.stage.stageWidth * 0.9, 300);
        this.sniper5 = new Sniper(point5, 48, 35, 250, 0x00FF00, 0x00FF00);
        this.addChild(this.sniper5);
    };
    Stage1.prototype.start = function () {
        this.emitter1.start();
        this.sniper2.startWithDelay(2000);
        this.sniper3.startWithDelay(2000);
        this.sniper4.startWithDelay(2000);
        this.sniper5.startWithDelay(2000);
    };
    Stage1.prototype.pause = function () {
        this.emitter1.stop();
        this.sniper2.stop();
        this.sniper3.stop();
        this.sniper4.stop();
        this.sniper5.stop();
    };
    Stage1.prototype.restart = function () {
        this.pause();
        this.isBegin = false;
        this.textfield.text = "3";
        this.timer.reset();
        this.timer.repeatCount = 3;
        this.timer.start();
    };
    Stage1.prototype.end = function () {
        this.pause();
        MyUtils.cleanMissile(this);
    };
    Stage1.INSTANCE = new Stage1("1", 30);
    return Stage1;
}(StageBase));
__reflect(Stage1.prototype, "Stage1");
