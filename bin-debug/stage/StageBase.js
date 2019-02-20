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
var StageBase = (function (_super) {
    __extends(StageBase, _super);
    function StageBase(name, time) {
        var _this = _super.call(this, name) || this;
        _this.array = new Array();
        _this.isBegin = false;
        _this._time = time;
        return _this;
    }
    StageBase.prototype.onAddToStage = function (event) {
        _super.prototype.onAddToStage.call(this, event);
        this.timer = new egret.Timer(1000, 3);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerUpdate, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerEnd, this);
        this.timer.start();
        this.addChild(SelfMachine.INSTANCE);
        SelfMachine.INSTANCE.currentStage = this;
    };
    StageBase.prototype.doRender = function () {
        var sky = MyUtils.createBitmapByName("game_sky_png");
        this.addChild(sky);
        sky.width = this.stage.stageWidth;
        sky.height = this.stage.stageHeight;
        sky.alpha = 1;
        this.textfield = new egret.TextField();
        this.textfield.width = 600;
        this.textfield.height = 120;
        this.textfield.x = 540;
        this.textfield.y = 120;
        this.textfield.size = 50;
        this.textfield.text = "3";
        this.textfield.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.textfield);
    };
    StageBase.prototype.onTimerUpdate = function (event) {
        var num = parseInt(this.textfield.text);
        var str = "";
        if (num > 1 || this.isBegin)
            str = (num - 1) + "";
        else
            str = "Begin!";
        this.textfield.text = str;
        //console.log(this.array.length);
    };
    StageBase.prototype.onTimerEnd = function (event) {
        if (!this.isBegin) {
            this.textfield.text = "";
            this.start();
            this.isBegin = true;
            this.textfield.text = this._time + "";
            this.timer.reset();
            this.timer.repeatCount = this._time;
            this.timer.start();
        }
        else {
            this.win();
        }
    };
    StageBase.prototype.win = function () {
        //TODO
        this.end();
        this.textfield.text = "niyingle";
    };
    return StageBase;
}(PageBase));
__reflect(StageBase.prototype, "StageBase");
