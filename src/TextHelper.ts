class TextHelper {
	public static chapterName:string[] = [];
	public static stageList:Array<StageInfo> = [];

	public static help_text = 
		"\t在本游戏中，你将通过触摸控制一只小金鱼进行冒险。\n\n" + 
		"\t和其他常见的STG，也就是俗称的打飞机类游戏不同的是，你没有任何攻击能力（毕竟你只是一只小金鱼）。\n\n" + 
		"\t你的获胜条件是在规定时间内躲避屏幕上的所有弹幕，没错，只要撞到任何一颗就会死（毕竟你只是一只小金鱼）。\n\n" + 
		"\t小金鱼的判定点是小金鱼中心的黑点，而可触摸操控范围则是小金鱼周围不大的一圈，也就是说，你可以通过触摸小金鱼右下方的地方来操作它，而不会被自己的手指挡住判定点。\n\n" +
		"\t祝你好运！\n\n" + 
		"\tBug反馈：bug-report@nulladev.cn\n" + 
		"\tNulladev开发组群：159628975";

	public static init() {
		TextHelper.chapterName[0] = "第一章 荷塘";
		TextHelper.chapterName[1] = "第二章 雨";
		TextHelper.chapterName[2] = "第三章 放飞自我";

		new StageInfo(
			"1-1",
			"初探",
			"本关是游戏的第一关，为了不把玩家一上来就劝退，所以做得不是太难。\n\n" + 
			"本关的所有弹幕均为自机狙，一个比较轻松的过关方法是从画面右下角向左（或从左下角向右）缓慢移动，这样可以避开所有的子弹。"
		);
		new StageInfo("1-2", "加特林", "222");
		new StageInfo("1-3", "旋涡", "333");
		new StageInfo("1-4", "加速", "");
		new StageInfo("1-5", "反射", "");
		new StageInfo("1-6", "爆裂", "");

		new StageInfo("2-1", "细雨", "");
		new StageInfo("2-2", "雨中花", "");
		new StageInfo("2-3", "大雨", "");

		new StageInfo("test", "流矢", "");
		new StageInfo("test2", "耀斑", "");
		new StageInfo("test3", "爆发", "");
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