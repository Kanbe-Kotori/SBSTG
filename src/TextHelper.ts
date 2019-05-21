class TextHelper {
	private static stageName:{[index:string]: string} = {};

	public static init() {
		TextHelper.stageName["1-1"] = "自机狙练习";
		TextHelper.stageName["1-2"] = "自机狙进阶";
		TextHelper.stageName["2-1"] = "雨";
		TextHelper.stageName["test"] = "测试关卡";
	}

	public static getStageNameFromID(id:string) {
		return TextHelper.stageName[id];
	}

}