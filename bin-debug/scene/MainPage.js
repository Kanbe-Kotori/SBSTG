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
var MainPage = (function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        return _super.call(this, "main_page") || this;
    }
    MainPage.prototype.onAddToStage = function (event) {
        _super.prototype.onAddToStage.call(this, event);
    };
    MainPage.prototype.doRender = function () {
        var sky = MyUtils.createBitmapByName("main_page");
        this.addChild(sky);
        sky.width = this.stage.stageWidth;
        sky.height = this.stage.stageHeight;
        sky.alpha = 1;
    };
    return MainPage;
}(PageBase));
__reflect(MainPage.prototype, "MainPage");
