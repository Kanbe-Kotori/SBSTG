class MyUtils {
    public static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    public static cleanMissile(stage: StageBase) {
        let array1 = stage.arrayMissile.slice(0);
        for (let j of array1) {
            j.setDead();
        }
    }

    public static cleanController(stage: StageBase) {
        let array1 = stage.arrayController.slice(0);
        for (let j of array1) {
            j.setDead();
        }
    }

    public static removeFromArray(object:any, array:Array<any>) {
        for (let i: number = 0; i < array.length; i++) {
			if (array[i] == object) {
				array.splice(i, 1);
				break;
			}
		}
    }

    public static createReasonablePos(point:egret.Point) {
        point.x = Math.max(0, point.x);
        point.x = Math.min(Main.X, point.x);
        point.y = Math.max(Main.UPPER_Y, point.y);
        point.y = Math.min(Main.BELOW_Y, point.y);
        return point;
    }

    public static ang2rad(ang:number) {
        return ang / 180 * Math.PI;
    }

    public static rad2ang(rad:number) {
        return rad * 180 / Math.PI;
    }

}

enum Side {
    TOP, BOTTOM, LEFT, RIGHT
}