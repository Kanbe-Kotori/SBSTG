class MyUtils {
    public static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    public static cleanMissile(stage: StageBase) {
        let array1 = stage.array.slice(0);
        for (let j of array1) {
            j.setDead();
        }
    }

}