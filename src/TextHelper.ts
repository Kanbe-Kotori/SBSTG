class TextHelper {
	public static chapterName:string[] = [];
	public static stageList:Array<StageInfo> = [];

	public static help_text = 
		<Array<egret.ITextElement>>[
			{text: "在本游戏中，你将控制一只小金鱼进行一次紧♂张而刺♂激的冒险。\n\n"},
			{text: "和其他常见的STG类游戏不同的是，"},
			{text: "你没有任何攻击能力", style: {"bold": true, "textColor": 0xff0000}},
			{text: "（毕竟你只是一只小金鱼）。而你的获胜条件是"},
			{text: "在一段时间内躲避屏幕上的所有弹幕", style: {"bold": true, "textColor": 0xff0000}},
			{text: "。没错，只要撞到任何一颗就会死（毕竟你只是一只小金鱼）。\n\n"},
			{text: "你可以拖动"},
			{text: "屏幕的任意位置", style: {"bold": true, "textColor": 0xff0000}},
			{text: "来控制小金鱼的移动。需要特别说明的是，小金鱼的中弹判定范围"},
			{text: "只有小金鱼中心的黑点", style: {"bold": true, "textColor": 0xff0000}},
			{text: "，并不是整条鱼，所以其实比想象中要简单很多。如果你是一名车万玩家，那这个游戏应该难不倒你。\n\n"},
			{text: "如果对于过关的思路感到困惑，那么"},
			{text: "关卡右下角", style: {"bold": true, "textColor": 0xff0000}},
			{text: "的提示也许能够帮到你。\n\n"},
			{text: "祝你好运！\n\n", style: {"bold": true, "textColor": 0xff0000}},
			{text: "Bug反馈：bug-report@nulladev.cn\n"},
			{text: "Nulladev开发组群：159628975"}
		];

	public static init() {
		TextHelper.chapterName[0] = "第一章 荷塘";
		TextHelper.chapterName[1] = "第二章 雨";
		TextHelper.chapterName[2] = "第三章 其他";

		new StageInfo(
			"1-1",
			"初探",
			"本章节的所有关卡均包含自机狙。对于新手玩家而言，这种自机狙看起来会很头疼。这里推荐大家使用单向微移法。\n\n" + 
			"自机狙子弹在瞄准阶段之后，其飞行轨迹就不再改变，因此从子弹发射到打中这段时间内，玩家只要往某个方向微移一点，就可以离开自机狙的攻击路线，让子弹从玩家另一侧擦过。"
		);
		new StageInfo(
			"1-2",
			"加特林",
			"本关和1-1解法类似，但在微移躲自机狙（莲子）时，也要注意把握好穿过慢速花瓣固定弹的时机。\n\n" + 
			"由于莲子弹是逐渐减速的，因此在屏幕下方进行移动会稍微简单一些。"
		);
		new StageInfo(
			"1-3",
			"旋转",
			"想要通过本关，除前两关所用到的微移技巧外，还要掌握折返技巧，否则自机将很快被逼入死角。\n\n" + 
			"折返的技巧要领为：在微移快要到达屏幕边缘时，快速往前进方向移动一大步，使自机狙的角度发生大幅度改变从而出现空隙，这一步叫做“引弹”。之后快速穿过空隙，即可向反方向继续微移。"
		);
		new StageInfo(
			"1-4",
			"加速",
			"本关的推荐解法为绕屏幕转圈引自机狙，但由于需要多次穿越紫色弹幕所以有点难度。\n\n" + 
			"如果你是车万狗的话，本关应该难不倒你。但假如实在过不去的话，建议跳过本关。"
		);
		new StageInfo(
			"1-5",
			"反射",
			"本关可能需要多次使用折返技巧，除此以外没什么可说的。自机狙这种东西只是看起来唬人，本质上都是白给。"
		);
		new StageInfo(
			"1-6",
			"爆裂",
			"由于本人文笔实在有限，所以除了 “果断穿，别犹豫” 之类的套话以外，真的不知道该说什么了，大家自己努力吧。\n\n"
		);
		new StageInfo(
			"1-ex",
			"二阶狙",
			"看到这一关，有些车万狗可能已经产生幻视了。没错，本关的灵感来源就是永夜抄中灵梦的符卡——回霊「夢想封印 侘」。\n\n" +
			"本关难度可能略高，建议普通玩家不要自暴自弃，实在过不了就放弃吧。");

		new StageInfo("2-1", "细雨", "还没写");
		new StageInfo("2-2", "雨花", "还没写");
		new StageInfo("2-3", "大雨", "还没写");
		new StageInfo("2-4", "狂风", "还没写");
		new StageInfo("2-5", "旋涡", "还没写");

		new StageInfo("ex-1", "流矢", "本关为制作组放飞自我的产物，不是给普通玩家玩的，实在过不了建议放弃。");
		new StageInfo("ex-2", "耀斑", "本关为制作组放飞自我的产物，不是给普通玩家玩的，实在过不了建议放弃。");
		new StageInfo("ex-3", "爆发", "本关为制作组放飞自我的产物，不是给普通玩家玩的，实在过不了建议放弃。");
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