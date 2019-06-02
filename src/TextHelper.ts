class TextHelper {
	private static stageName:{[index:string]: string} = {};

	public static init() {
		TextHelper.stageName["1-1"] = "自机狙入门";
		TextHelper.stageName["1-2"] = "自机狙练习";
		TextHelper.stageName["1-3"] = "自机狙进阶";
		TextHelper.stageName["2-1"] = "雨";
		TextHelper.stageName["test"] = "流矢";
		TextHelper.stageName["test2"] = "耀斑";
	}

	public static getStageNameFromID(id:string) {
		return TextHelper.stageName[id];
	}

}