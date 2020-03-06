class TextHelper {

	public static welcome_text = "欢迎来到小金鱼的世界！由于您是第一次打开本游戏，因此请先查看游戏帮助。";
	public static warning_text = "警告：内部测试版ver2.01，第二章还没做完，第三章难度还没歧化，有些关卡难度失调，有bug。";

	public static help_text = 
		<Array<egret.ITextElement>>[
			{text: "在本游戏中，你将控制一条小金鱼进行一次紧♂张而刺♂激的冒险。\n\n"},
			{text: "和其他常见的STG类游戏不同的是，"},
			{text: "你没有任何攻击能力", style: {"bold": true, "textColor": 0xff0000}},
			{text: "（毕竟你只是一条小金鱼）。而你的获胜条件是"},
			{text: "在上方的倒计时结束前躲避屏幕上的所有弹幕", style: {"bold": true, "textColor": 0xff0000}},
			{text: "。没错，和车万类似，只要撞到任何一颗就会死（毕竟你只是一条小金鱼）。\n\n"},
			{text: "你可以通过拖动"},
			{text: "屏幕的任意位置", style: {"bold": true, "textColor": 0xff0000}},
			{text: "来控制小金鱼的移动。需要特别说明的是，小金鱼的中弹判定范围"},
			{text: "只有小金鱼中心的黑点", style: {"bold": true, "textColor": 0xff0000}},
			{text: "，并不是整条鱼，所以其实比想象中要简单很多。如果你是一名车万玩家，那这个游戏应该难不倒你。\n\n"},
			{text: "有些关卡虽然看起来杂乱无章，但其实有些小技巧可以帮助你快速通关。如果你卡在某一关很久，那么可以试试点击"},
			{text: "关卡右下角", style: {"bold": true, "textColor": 0xff0000}},
			{text: "的提示按钮，里面一些（我写的）小提示也许能够帮到你。或者实在不行还可以跳过嘛。\n\n"},
			{text: "祝你好运！\n\n", style: {"bold": true, "textColor": 0xff0000}},
		];

	public static about_text = 
		<Array<egret.ITextElement>>[
			{text: "这里是游戏开发者，nulladev开发组组长chitose。游戏断断续续写了很久，终于算是写完了。以后可能还会陆陆续续加一些新的关卡，但架构上不会有太大的变动了。\n\n"},
			{text: "虽然说本人忝为开发组组长，但nulladev是个很松散的组织，我也没刻意去找人合作，结果整个游戏开发其实是我一个人完成的（笑。"},
			{text: "独立游戏开发，难免会有Bug和设计不合理的地方，还希望大家多多包涵并及时向我反馈，我很重视大家的意见。\n\n"},
			{text: "策划：chitose@nulladev\n"},
			{text: "开发：chitose@nulladev\n"},
			{text: "美工：nyx@nulladev\n"},
			{text: "测试：nulladev的各位，and you\n"},
			{text: "Bug反馈：bug-report@nulladev.cn\n\n"},
			{text: "如果你对游戏有自己的看法，请加玩家群：859853778\n"},
			{text: "如果你在开发、美工、策划方面有一定经验，也欢迎加入Nulladev开发组。群号：159628975。"}
		];

	public static initStageText() {
		StageData.tutorial1.title = "学习移动";
		StageData.tutorial2.title = "判定点";
		StageData.tutorial3.title = "认识弹幕1";
		StageData.tutorial4.title = "认识弹幕2";
		StageData.tutorial5.title = "认识弹幕3";
		StageData.tutorial6.title = "学习跳过";

		StageData.stage1_1.title = "1-1 初探";
		StageData.stage1_2.title = "1-2 莲子";
		StageData.stage1_3.title = "1-3 旋转";
		StageData.stage1_4.title = "1-4 瞄准";
		StageData.stage1_5.title = "1-5 绽放";
		StageData.stage1_6.title = "1-6 爆裂";
		StageData.stage1_7.title = "1-ex 跟踪";

		StageData.stage2_1.title = "2-1 白给";
		StageData.stage2_2.title = "2-2 快与慢";
		StageData.stage2_3.title = "2-3 反射";

		StageData.stage3_1.title = "3-1 细雨";
		StageData.stage3_2.title = "3-2";
		StageData.stage3_3.title = "3-3 狂风";
		StageData.stage3_4.title = "3-4 旋涡";
		StageData.stage3_5.title = "3-5 冰雹";
		StageData.stage3_6.title = "3-6 飞花";
		StageData.stage3_7.title = "3-ex 天火";

		StageData.stage1_1h.title = "1-1H 下马威";
		StageData.stage1_2h.title = "1-2H 莲子霰弹";
		StageData.stage1_3h.title = "1-3H 加特林";
		StageData.stage1_4h.title = "1-4H 花瓣扫射";
		StageData.stage1_5h.title = "1-5H 冲击波";
		StageData.stage1_6h.title = "1-6H 花朵炸弹";
		StageData.stage1_7h.title = "1-EX 快速制导";

		StageData.stage2_1h.title = "2-1H 瞬间白给";
		StageData.stage2_2h.title = "2-2H 追云逐月";
		StageData.stage2_3h.title = "2-3H 三面埋伏";
		StageData.stage2_7h.title = "2-EX 喷涌";

		StageData.stage3_1h.title = "3-1H 暴雨";
		StageData.stage3_7h.title = "3-EX 星陨";

		StageData.stageEX_2.title = "ex-2 滴水成冰";
		StageData.stageEX_5.title = "ex-5 阴阳交错";

		StageData.tutorial1.tutorial_text = "在本游戏中，玩家可以通过拖动游戏画面的任何部分，来1:1地移动自机位置。点击屏幕右下角的i按钮可以查看当前关卡的小贴士。";
		StageData.tutorial2.tutorial_text = "本关学习自机的判定点。在本游戏中，玩家只有金鱼中间的黑点中弹才算游戏失败，因此本关站着不动即可过关。";
		StageData.tutorial3.tutorial_text = "本关认识弹幕中最常见的一类——固定弹，即无论如何都不发生变化的弹幕。请点击右下角的i按钮查看帮助。";
		StageData.tutorial4.tutorial_text = "本关认识弹幕类型中的随机弹，即在一定限制下随机生成的弹幕。请继续点击i按钮查看帮助。";
		StageData.tutorial5.tutorial_text = "本关认识弹幕类型中的萌新杀手——自机狙，但其实掌握技巧就很很躲。请仍然点击i按钮查看帮助。";
		StageData.tutorial6.tutorial_text = "本关请您尝试位于选关和死亡界面的关卡跳过功能。请放心，不会有收费或者广告的。（当然，想硬打也可以）";
		StageData.stage1_1.tutorial_text = "欢迎来到正式关卡！从本关开始本弹出框就不会再出现了，但右下角的i按钮仍然可用，如果卡关了记得去看看！";
		StageData.stage1_1h.tutorial_text = "欢迎来到困难关卡！从本关开始你将可以感受到车万玩家为什么可以出门不带伞（开玩笑的）";

		StageData.tutorial1.help_text = "这里是关卡的帮助文本，会有一些过关的小技巧，可以帮助你更容易地过关。每一关的帮助文本都不同，如果卡关了记得常来看看。";
		StageData.tutorial2.help_text = "虽然在帮助中已经写过了，但我估计没人看，所以这里再说一遍。\n\n" +
			"小金鱼的中弹判定范围只有中心的黑点，并不是整条鱼，所以本关中看起来花里胡哨的弹幕根本打不到你。"
		StageData.tutorial5.help_text = "自机狙属于不掌握技巧就很难应付的类型，因此是STG类游戏中劝退新人的第一道难关。这里教大家一个通用解法，单向微移法。\n\n" +
			"由于自机狙子弹在瞄准之后，飞行轨迹就不再改变，因此玩家只需要从屏幕的一角向另一个方向缓慢移动，就可以让所有子弹从玩家另一侧擦过。";

		StageData.stage1_1.help_text = "本关乍一看虽然非常恐怖，但如果你有看过教程关《认识弹幕3》中的单向微移法，本关就是完全白给。如果没看过的，给我老老实实回去看啦~";
		StageData.stage1_2.help_text = "本关和1-1解法类似，但在微移躲自机狙（莲子）时，也要注意把握好穿过慢速花瓣固定弹的时机。\n\n" + 
			"由于莲子自机狙是逐渐减速的，因此在屏幕下方进行规避会稍微简单一些。"
		StageData.stage1_3.help_text = "本关的弹幕包括紫色固定弹，粉色自机狙和蓝色白给弹，其中蓝色弹不乱走的话是不会击中你哒，只需要注意微移躲自机狙的时候不要被紫色固定弹击中。";
		StageData.stage1_4.help_text = "本关在设计时就觉得有点迷。。虽然最后发现可以躲在版底强扭，但我一开始想的是绕屏幕转圈引自机狙，结果由于需要多次穿越紫色弹幕所以反而更难了。\n\n" + 
			"如果你是车万狗的话，本关应该难不倒你。但假如实在过不去的话，建议跳过本关。";
		StageData.stage1_5.help_text = "本关逐渐扩大的自机狙可以选择微移擦弹，也可以选择快速移动躲开。但前者容易走太慢暴毙，后者容易撞流矢翻车，要权衡利弊。" + 
			"一点题外话，如果是更新之前玩过本游戏的老玩家的话，应该发现这一关彻底改了，因为之前实在凑不出关卡了。";
		StageData.stage1_6.help_text = "本关由粉色自机狙，蓝色随机弹和紫色固定弹构成，和1-3类似，在微移躲自机狙的同时要注意飞来的流矢。";
		StageData.stage1_7.help_text = "看到这一关，有些车万狗可能已经产生幻视了。没错，本关的灵感来源就是永夜抄中灵梦的符卡——回霊「夢想封印 侘」。\n\n" +
			"作为第一个EX关卡，本关难度可能偏高，建议普通玩家不要自暴自弃，实在过不了就放弃吧。"

		StageData.stage2_1.help_text = "本关属于制作组的怜悯，目的是让玩家认识固定弹的白给关，注意好粉弹的空隙即可。";

/*
		new StageInfo(
			"2-1",
			"细雨",
			"本章节的所有关卡均包含来自上方的随机弹。请时刻留心四周（而不仅仅是上方），以防被其他方向的子弹封位。\n\n" + 
			"友情提示：本关在版底躲避弹幕比较危险，因为自机如果在版底被封位将无路可退，而在屏幕中心区域伺机上穿会容易很多。"
		);

		new StageInfo(
			"2-2",
			"大雨",
			"爆菊弹一向是各种STG游戏中的恶心点，因此建议躲在上半区，不要和大雨点溅出来的脏水来个亲密接触。"
		);

		new StageInfo(
			"2-3",
			"狂风",
			"下雨的时候刮风是我一直以来最讨厌的天气，因为即使打伞也会被各种角度的风刮过来的雨淋成落汤鸡。\n\n" +
			"雨弹越往下，横向速度就越不确定，活动轨迹就越难以预测。老老实实在屏幕中段和它们保持距离吧。"
		);

		new StageInfo(
			"2-4",
			"旋涡",
			"本关是制作组黔驴技穷凑出的一关，不仅没什么亮点还有点瞎。"
		);

		new StageInfo(
			"2-5",
			"冰雹",
			"天下武功，唯快不破。你要做的事只有一件，那就是看准时机穿越快速下落的冰雹，犹豫就会败北。（我编不下去了）"
		);

		new StageInfo(
			"2-6",
			"飞花",
			"不知道该写什么，我自己都过不去。"
		);

		new StageInfo(
			"2-ex",
			"天火",
			"虽然火雨看起来很吓人，其实瑟缩在版底注意不要被封位就好了，难度并没有像看起来那么高。不过毕竟是EX关卡，再怎么也不会完全白给。\n\n" +
			"这一关本来是想仿爆符『千兆耀斑』，但是有些搞砸了。。"
		);
		*/
	}

}