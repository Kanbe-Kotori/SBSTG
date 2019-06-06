class TextHelper {
	private static stageName:{[index:string]: string} = {};
	public static help_text = "\t在本游戏中，你将通过触摸控制一只小金鱼进行冒险。\n\n" + 
		"\t和其他常见的STG，也就是俗称的打飞机类游戏不同的是，你没有任何攻击能力（毕竟你只是一只小金鱼）。\n\n" + 
		"\t你的获胜条件是在规定时间内躲避屏幕上的所有弹幕，没错，只要撞到任何一颗就会死（毕竟你只是一只小金鱼）。\n\n" + 
		"\t小金鱼的判定点是小金鱼中心的黑点，而可触摸操控范围则是小金鱼周围不大的一圈，也就是说，你可以通过触摸小金鱼右下方的地方来操作它，而不会被自己的手指挡住判定点。\n\n" +
		"\t祝你好运！\n\n" + 
		"\tBug反馈：bug-report@nulladev.cn\n" + 
		"\tNulladev开发组群：159628975";

	public static init() {
		TextHelper.stageName["1-1"] = "自机狙入门";
		TextHelper.stageName["1-2"] = "自机狙练习";
		TextHelper.stageName["1-3"] = "自机狙进阶";
		TextHelper.stageName["1-4"] = "还是自机狙";
		TextHelper.stageName["2-1"] = "雨";
		TextHelper.stageName["2-2"] = "大雨";
		TextHelper.stageName["test"] = "流矢";
		TextHelper.stageName["test2"] = "耀斑";
	}

	public static getStageNameFromID(id:string) {
		return TextHelper.stageName[id];
	}

}