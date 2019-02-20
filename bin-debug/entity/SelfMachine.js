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
var SelfMachine = (function (_super) {
    __extends(SelfMachine, _super);
    function SelfMachine() {
        var _this = _super.call(this) || this;
        _this.isTouching = false;
        _this.distance = new egret.Point();
        _this.currentStage = null;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    SelfMachine.prototype.onAddToStage = function (event) {
        //console.info("player added");
        this.doRender();
        this.img.touchEnabled = true;
        this.img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.img.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this.timer = new egret.Timer(50, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
        this.timer.start();
    };
    SelfMachine.prototype.doRender = function () {
        this.img = MyUtils.createBitmapByName("self_machine_png");
        this.img.width = SelfMachine.WIDTH;
        this.img.height = SelfMachine.HEIGHT;
        this.img.anchorOffsetX = this.img.width / 2;
        this.img.anchorOffsetY = this.img.height / 2;
        this.img.x = this.stage.stageWidth / 2;
        this.img.y = this.stage.stageHeight / 2;
        this.addChild(this.img);
        this.shape = new egret.Shape();
        this.shape.x = this.stage.stageWidth / 2;
        this.shape.y = this.stage.stageHeight / 2;
        this.shape.graphics.beginFill(0xFF0000, 1);
        this.shape.graphics.drawCircle(0, 0, SelfMachine.SIZE);
        this.shape.graphics.endFill();
        this.addChild(this.shape);
    };
    SelfMachine.prototype.mouseDown = function (evt) {
        this.isTouching = true;
        this.distance.x = evt.stageX - this.shape.x;
        this.distance.y = evt.stageY - this.shape.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    SelfMachine.prototype.mouseMove = function (evt) {
        if (this.isTouching) {
            var ax = evt.stageX - this.distance.x;
            ax = Math.max(ax, SelfMachine.SIZE);
            ax = Math.min(ax, Main.X - SelfMachine.SIZE);
            var ay = evt.stageY - this.distance.y;
            ay = Math.max(ay, Main.UPPER_Y + SelfMachine.SIZE);
            ay = Math.min(ay, Main.BELOW_Y - SelfMachine.SIZE);
            this.shape.x = ax;
            this.shape.y = ay;
            this.img.x = ax;
            this.img.y = ay;
        }
    };
    SelfMachine.prototype.mouseUp = function (evt) {
        this.isTouching = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    SelfMachine.prototype.getX = function () {
        return this.img.x;
    };
    SelfMachine.prototype.getY = function () {
        return this.img.y;
    };
    SelfMachine.prototype.onUpdate = function (event) {
        for (var _i = 0, _a = SelfMachine.INSTANCE.currentStage.array; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.isCollide()) {
                //alert("你死了!");
                console.log("nisile");
                MyUtils.cleanMissile(this.currentStage);
                this.currentStage.restart();
                break;
            }
        }
    };
    SelfMachine.INSTANCE = new SelfMachine();
    SelfMachine.WIDTH = 128;
    SelfMachine.HEIGHT = 128;
    SelfMachine.SIZE = 8;
    return SelfMachine;
}(egret.Sprite));
__reflect(SelfMachine.prototype, "SelfMachine");
