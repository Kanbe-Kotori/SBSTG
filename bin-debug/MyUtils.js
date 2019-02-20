var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MyUtils = (function () {
    function MyUtils() {
    }
    MyUtils.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    MyUtils.cleanMissile = function (stage) {
        var array1 = stage.array.slice(0);
        for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
            var j = array1_1[_i];
            j.setDead();
        }
    };
    return MyUtils;
}());
__reflect(MyUtils.prototype, "MyUtils");
