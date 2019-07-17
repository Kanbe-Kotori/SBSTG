class TextHelper {
	public static chapterName:string[] = [];
	public static stageList:Array<StageInfo> = [];

	public static help_text = 
		<Array<egret.ITextElement>>[
			{text: "在本游戏中，你将通过触摸控制一只小金鱼进行冒险。\n\n"},
			{text: "和其他常见的STG类游戏不同的是，"},
			{text: "你没有任何攻击能力", style: {"bold": true, "textColor": 0xff0000}},
			{text: "（毕竟你只是一只小金鱼）。而你的获胜条件是"},
			{text: "在一段时间内躲避屏幕上的所有弹幕", style: {"bold": true, "textColor": 0xff0000}},
			{text: "。没错，只要撞到任何一颗就会死（毕竟你只是一只小金鱼）。\n\n"},
			{text: "请注意，小金鱼的判定点只有"},
			{text: "小金鱼中心的黑点", style: {"bold": true, "textColor": 0xff0000}},
			{text: "，而可触摸操控范围则是小金鱼周围不大的一圈，也就是说，"},
			{text: "你可以通过触摸小金鱼右下方的地方来操作它，而不会被自己的手指挡住判定点。\n\n", style: {"bold": true, "textColor": 0xff0000}},
			{text: "祝你好运！\n\n"},
			{text: "Bug反馈：bug-report@nulladev.cn\n"},
			{text: "Nulladev开发组群：159628975"}
		];

	public static init() {
		TextHelper.chapterName[0] = "第一章 荷塘";
		TextHelper.chapterName[1] = "第二章 雨";
		TextHelper.chapterName[2] = "第三章 放飞自我";

		new StageInfo(
			"1-1",
			"初探",
			"本章节的所有关卡均包含自机狙。对于新手玩家而言，这种自机狙看起来会很头疼。这里推荐大家使用单向微移法。\n\n" + 
			"自机狙子弹在瞄准阶段之后，其飞行轨迹就不再改变，因此从子弹发射到打中这段时间内，玩家只要往某个方向微移一点，就可以离开自机狙的攻击路线，让子弹从玩家另一侧擦过。"
		);
		new StageInfo("1-2", "加特林", "还没写");
		new StageInfo("1-3", "旋涡", "还没写");
		new StageInfo("1-4", "加速", "还没写");
		new StageInfo("1-5", "反射", "还没写");
		new StageInfo("1-6", "爆裂", "还没写");
		new StageInfo("1-ex", "二阶狙", "本关为制作组放飞自我的产物，不是给普通玩家玩的，实在过不了建议放弃。");

		new StageInfo("2-1", "细雨", "还没写");
		new StageInfo("2-2", "雨中花", "还没写");
		new StageInfo("2-3", "大雨", "还没写");

		new StageInfo("test", "流矢", "本关为制作组放飞自我的产物，不是给普通玩家玩的，实在过不了建议放弃。");
		new StageInfo("test2", "耀斑", "本关为制作组放飞自我的产物，不是给普通玩家玩的，实在过不了建议放弃。");
		new StageInfo("test3", "爆发", "本关为制作组放飞自我的产物，不是给普通玩家玩的，实在过不了建议放弃。");
	}

	public static getStageNameFromID(id:string) {
		for(let i of TextHelper.stageList) {
			if(i._id == id) return i._name;
		}
		return "关卡名称未注册";
	}

	public static getStageInfoFromID(id:string) {
		for(let i of TextHelper.stageList) {
			if(i._id == id) return i._info;
		}
		return "关卡名称未注册";
	}

	public static getChapterName(index:number) {
		return TextHelper.chapterName[index];
	}

}

class StageInfo {
	_id:string;
	_name:string;
	_info:string;
	constructor(id:string, name:string, info:string) {
		this._id = id;
		this._name = name;
		this._info = info;
		TextHelper.stageList.push(this);
	}
}