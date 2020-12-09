class TextHelper {

	public static welcome_text = "感谢您下载本游戏！本游戏为泛STG类游戏，如果您没玩过类似游戏，建议先查看游戏帮助和教程；如果您是老越共了，请无视这段话。";
	public static warning_text = "欢迎来到小金鱼历险记的世界！很抱歉游戏还没完全完成，但由于开发者迫切地想要知道玩家对难度的看法，所以接下来全靠你们了。";

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

	public static game_info_text = 
		<Array<egret.ITextElement>>[
			{text: "游戏名：小金鱼历险记\n"},
			{text: "软著号：2019SR1107678\n"},
			{text: "版本号：release-2.2.0\n"},
			{text: "更新日期：2020.4.13\n"},
			{text: "开发：Nulladev开发组\n"},
			{text: "策划：chitose@nulladev\n"},
			{text: "开发：chitose@nulladev\n"},
			{text: "美工：nyx@nulladev\n"},
			{text: "测试：nulladev的各位，and you\n\n"},
			{text: "本游戏代码完全开源，开源地址：github.com/NullaDev/SBSTG，代码禁止商用还请注意。\n\n"},
			{text: "如果你在游戏中遇到Bug，请发邮件到bug-report@nulladev.cn进行反馈，并在邮件中注明bug出现位置和复现情况，最好带上截图。\n\n"},
			{text: "本游戏玩家群：859853778(暂时没什么人)"}
		];

	public static developer_text = 
		<Array<egret.ITextElement>>[
			{text: "这里是游戏开发者，nulladev开发组组长chitose。关于这个游戏，其实我有很多想说的话，这里就分享一些给大家。\n"},
			{text: "实际上这个游戏最初是我第一次接触egret引擎时写的练手用demo，本来一度想要放弃了，幸而此时遇到了美工nyx，因此又断断续续写了很久，终于写到了现在的规模。\n"},
			{text: "至于以后嘛，我估计可能还会陆陆续续加一些新的关卡，但架构上不会有太大的变动了。\n"},
			{text: "由于这个游戏的底层是我一行一行写的，这个游戏实际上可扩展性还是很强的，可以看做是手机端LuaSTG，因此希望给本游戏增加新关卡的热心玩家(真的有吗)可以发邮件到chitose@nulladev.cn联系我。\n\n"},
			{text: "虽然说本人忝为开发组组长，但nulladev本质上是一些游戏爱好者讨论游戏和编程(shuiqun)的组织，因此整个游戏的开发部分其实是我一个人完成的。"},
			{text: "如果您在游戏中发现Bug或难度设计不合理的地方，还希望大家多多包涵并及时向我反馈，联系方式见“游戏信息”，我很重视大家的意见。\n"},
			{text: "如果您想要加入Nulladev开发组，并且在开发、美工、策划方面有一定经验，请加n组组群：159628975。\n"}
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
		StageData.stage1_4.title = "1-4 花火";
		StageData.stage1_5.title = "1-5 冲击";
		StageData.stage1_6.title = "1-6 爆裂";
		StageData.stage1_7.title = "1-ex 跟踪";

		StageData.stage2_1.title = "2-1 白给";
		StageData.stage2_2.title = "2-2 飞絮";
		StageData.stage2_3.title = "2-3 反射";
		StageData.stage2_4.title = "2-4 快慢";
		StageData.stage2_5.title = "2-5 横跳";
		StageData.stage2_6.title = "2-6 绽放";
		StageData.stage2_7.title = "2-7 喷涌";

		StageData.stage3_1.title = "3-1 细雨";
		StageData.stage3_2.title = "3-2 落雪";
		StageData.stage3_3.title = "3-3 水华";
		StageData.stage3_4.title = "3-4 旋涡";
		StageData.stage3_5.title = "3-5 夹击";
		StageData.stage3_6.title = "3-6 飞花";
		StageData.stage3_7.title = "3-ex 天火";

		StageData.stage1_1h.title = "1-1H 下马威";
		StageData.stage1_2h.title = "1-2H 流矢霰弹";
		StageData.stage1_3h.title = "1-3H 花吹雪";
		StageData.stage1_4h.title = "1-4H 星桥火树";
		StageData.stage1_5h.title = "1-5H 二重冲击";
		StageData.stage1_6h.title = "1-6H 花朵加农";
		StageData.stage1_7h.title = "1-EX 多重制导";

		StageData.stage2_1h.title = "2-1H 瞬间白给";
		StageData.stage2_2h.title = "2-2H 飞絮落花";
		StageData.stage2_3h.title = "2-3H 三面埋伏";
		StageData.stage2_4h.title = "2-4H 追云逐月";
		StageData.stage2_5h.title = "2-5H 反复横跳";
		StageData.stage2_6h.title = "2-6H 死亡绽放";
		StageData.stage2_7h.title = "2-EX 花团锦簇";

		StageData.stage3_1h.title = "3-1H 决河倾";
		StageData.stage3_2h.title = "3-2H 珠径雨";
		StageData.stage3_3h.title = "3-3H 赤潮";
		StageData.stage3_4h.title = "3-4H 百慕大";
		StageData.stage3_5h.title = "3-5H 万花丛中";
		StageData.stage3_6h.title = "3-6H 风雨落花";
		StageData.stage3_7h.title = "3-EX 星陨";

		StageData.stageEX_1.title = "ex-1 波与粒子";
		StageData.stageEX_2.title = "ex-2 滴水成冰";
		StageData.stageEX_3.title = "ex-3 流水西归";
		StageData.stageEX_4.title = "ex-4 九宫八卦";
		StageData.stageEX_5.title = "ex-5 阴阳交错";

		StageData.tutorial1.tutorial_text = "在本游戏中，玩家可以通过拖动游戏画面的任何部分，来1:1地移动自机位置。点击屏幕右下角的i按钮可以查看当前关卡的小贴士。";
		StageData.tutorial2.tutorial_text = "本关学习自机的判定点。在本游戏中，玩家只有金鱼中间的黑点中弹才算游戏失败，因此本关站着不动即可过关。";
		StageData.tutorial3.tutorial_text = "本关认识弹幕中最常见的一类——固定弹，即无论如何都不发生变化的弹幕。请点击右下角的i按钮查看帮助。";
		StageData.tutorial4.tutorial_text = "本关认识弹幕类型中的随机弹，即在一定限制下随机生成的弹幕。请继续点击i按钮查看帮助。";
		StageData.tutorial5.tutorial_text = "本关认识弹幕类型中的萌新杀手——自机狙，但其实掌握技巧就很很躲。请仍然点击i按钮查看帮助。";
		StageData.tutorial6.tutorial_text = "本关请您尝试位于选关和死亡界面的关卡跳过功能。请放心，不会有收费或者广告的。（当然，如果想试试硬打也可以）";
		StageData.stage1_1.tutorial_text = "欢迎来到正式关卡！从本关开始本弹出框就不会再出现了，但右下角的i按钮仍然可用，如果卡关了记得去看看！";
		StageData.stage1_1h.tutorial_text = "欢迎来到困难关卡！可以说，这才是游戏真正的开始。请不要妄想一次通过，反复尝试攻略吧。";
		StageData.stageEX_1.tutorial_text = "欢迎来到额外关卡！额外关卡难度并不比困难更高，它们只是一系列与主题无关的、很多都是从别处借鉴而来的弹幕，请尽情游玩吧。";

		StageData.tutorial1.help_text = "这里是关卡的帮助文本，会有一些过关的小技巧，可以帮助你更容易地过关。由于帮助文本都是游戏制作者亲自写的，因此每一关的文本都不同，如果卡关了记得常来看看。"
		+ "\n\n不过这关真的没什么好说的就是啦。";

		StageData.tutorial2.help_text = "虽然在帮助中已经写过了，但我估计没人玩游戏真的会去看帮助(笑)，所以这里还是再说一遍。"
		+ "\n\n本游戏作为弹幕类游戏，与通常的打飞机游戏最大的区别在于，中弹判定范围只有自机中心的黑点(换言之，并不是整条鱼)，所以本关中看起来花里胡哨的弹幕根本打不到你。"

		StageData.tutorial3.help_text = "所谓固定弹，即和自机位置没有任何关系，亦没有任何随机性的子弹，甚至每次重开关卡位置都不变。"
		+ "\n\n因此，固定弹的破解要点在于多打几遍，记住弹幕的形状，并且(通过背板)提前得知弹幕袭来的方向，并且找到安全的位置。"

		StageData.tutorial4.help_text = "随机弹是一种射出时速度和方向都不固定的子弹，因此也是一种很拼运气的子弹，有时运气不好就会被随机弹完全堵死，这很正常。"
		+ "\n\n俗话说得好，固定弹固定撞，随机弹随机封，这边建议亲亲多尝试几次呢。";

		StageData.tutorial5.help_text = "自机狙属于不掌握技巧就很难应付的类型，因此是STG类游戏中劝退新人的第一道难关。这里教大家一个通用解法，单向微移法。"
		+ "\n\n由于自机狙子弹在瞄准之后，飞行轨迹就不再改变，因此玩家只需要从屏幕的一角向另一个方向缓慢移动，就可以让所有子弹从玩家另一侧擦过。";

		StageData.tutorial6.help_text = "其实这关打起来没什么技巧啦，就是靠底力和一丁点运气。"
		+ "\n\n其实我把这关放在这里的原因就是难度过于鸡肋，因为对于STG老手来说这关真的很简单，但对于没有STG基础的萌新来说又太难，所有实在没有地方放，只好丢在这里。";

		StageData.stage1_1.help_text = "本关虽然乍一看非常恐怖，但其实所有屏幕上的子弹都是单数自机狙，如果你会单向微移法的话，本关就是完全白给。"
		+ "\n\n如果不会的话，你肯定跳教程了，请重新打开教程关《认识弹幕3》查看右下角帮助。"
		+ "\n\n本关设计者：chitose";
		StageData.stage1_2.help_text = "本关和上一关解法类似。由于莲子是逐渐减速的，因此在屏幕下方进行规避会稍微简单一些。"
		+ "\n\n需要特别注意的是，在屏幕下方微移躲自机狙时，请注意把握好穿过慢速花瓣固定弹的时机。"
		+ "\n\n本关设计者：chitose";
		StageData.stage1_3.help_text = "本关像加特林一样的发射器发射的弹幕包括紫色固定弹，粉色自机狙和蓝色白给弹。所谓白给弹，又名偶数自机狙，如果你不乱走的话是不会击中你哒。"
		+ "因此，本关只需要注意在版底微移时，不要被（很瞎眼的）紫色固定弹击中。"
		+ "\n\n本关设计者：chitose";
		StageData.stage1_4.help_text = "和前几关中连续发射的自机狙有所不同，本关中的自机狙是离散的，所以不需要用微移法。"
		+ "\n\n本关的解法是在弹幕扩散开的瞬间大幅位移，并找好红弹的缝隙穿过去。相对而言，本关比较吃基本功，技巧性并不高。"
		+ "\n\n本关设计者：chitose";
		StageData.stage1_5.help_text = "本关狙击角度逐渐扩大的自机狙可以选择微移擦弹，也可以选择快速移动躲开。但前者容易走太慢暴毙，后者容易撞流矢翻车，要权衡利弊。"
		+ "\n\n本关制作者：chitose"
		+ "\n\n本关设计者：花花";
		StageData.stage1_6.help_text = "那么，如果你是一名STG新手，经过前几关的磨炼之后应该开始适应这种华丽的弹幕游戏了吧，所以这一关稍微加一点难度。"
		+ "\n\n本关由粉色自机狙，蓝色随机弹和紫色固定弹构成，和1-3类似，在微移躲自机狙的找准穿固定弹的时机，同时要注意飞来的流矢。"
		+ "\n\n本关设计者：chitose";
		StageData.stage1_7.help_text = "本关作为第一个ex关卡，难度比之前的（白给）关可能稍高，实在过不了就跳过吧。"
		+ "\n\n如果非要击破的话，本关一定不能微移，而是要在版底大幅度反复横跳，二阶自机狙可不会轻易白给。"
		+ "\n\n本关制作者：chitose"
		+ "\n\n本关设计者：zun(笑)";

		StageData.stage2_1.help_text = "欢迎来到第二章！本章节中的所有关卡均为固定弹关卡，换句话说，本关中所有子弹的位置都是固定的，因此可能会出现安定点。"
		+ "\n\n如标题所说，本关是让玩家认识固定弹的白给关。请注意，不要同时穿蓝色弹和粉色弹，这相当危险。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_2.help_text = "和之前的关卡相比，本关的弹幕相当慢，因此在版底避弹时只需要集中注意力盯住自机附近的一小块区域。"
		+ "\n\n当然你也可以选择跟着发射器旋转(东方跟着转)，其实也挺简单的，说到底这也只是easy难度嘛。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_3.help_text = "和之前的关卡相比，这一关稍微有一点难度，主要是因为比较吃基本功，没有什么逃课小技巧。"
		+ "\n\n本关的难点在于玩家需要眼观三路，提前走到弹幕稀薄的地带，否则很容易被封位。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_4.help_text = "如果你注意观察就会发现，本关中看起来很凶残的加速弹和减速弹其实发射角度是固定的。"
		+ "\n\n因此，你只需要站在加减速弹打不着的的角度范围内，左右小幅移动躲紫色弹就可以了，其中有些位置甚至可以安定很久。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_5.help_text = "本关的解法正如标题所说，无论在屏幕中部还是下方，总之左右反复横跳就对了，其实是相当爽快的一关。"
		+ "\n\n记住，左右横跳的时候要快准狠，千万别犹豫！"
		+ "\n\n本关制作者：chitose"
		+ "\n\n本关设计者：忘了哪里看到的自制LuaSTG关卡";
		StageData.stage2_6.help_text = "说到底Easy难度的关卡设计起来就是麻烦，既要让STG新手也能相对轻松过关，又要保证画面相对华丽，实在是太累人了。"
		+ "\n\n因此，本关是我绞尽脑汁想出的，看起来很难实际上白给的关卡，快录屏分享给小伙伴们炫耀一下吧(大雾"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_7.help_text = "关于难度的说明同1-ex。再怎么说，ex关卡作为让STG新手向Hard难度逐渐过渡的垫脚石，也不能太简单是不是。"
		+ "\n\n本关设计者：chitose";

		StageData.stage3_1.help_text = "本章节的所有关卡均包含来自上方的随机弹。请时刻留心四周（而不仅仅是上方），以防被其他方向的子弹封位。" 
		+ "\n\n友情提示：本关在版底躲避弹幕比较危险，因为自机如果在版底被封位将无路可退，而在屏幕中心区域伺机上穿会容易很多。"
		+ "\n\n本关设计者：chitose";
		StageData.stage3_2.help_text = "本关和上一关非常类似，但相比之下弹幕要密集的多也慢得多。因此，本关的推荐解法也和上一关类似，自机在屏幕上方开局，并且跟着子弹的步伐向下拉，然后找机会上穿。"
		+ "\n\n(我先，都是我先，明明都是我先来的..."
		+ "\n\n本关设计者：chitose";
		StageData.stage3_3.help_text = "每次看到这种泛着油光的飘满绿色不明物质的水体，其实我都会感觉相当恶心...本关纯底力关，大家加油。"
		+ "\n\n本关制作者：chitose"
		+ "\n\n本关设计者：花花";
		StageData.stage3_4.help_text = "这一关属于那种相当瞎眼的关卡，玩久了就会像被催眠一样整个头都是晕的。因此这里建议大家沿着中线小幅上下躲避，尽量不要跟着旋涡转。"
		+ "\n\n本关设计者：chitose";
		StageData.stage3_5.help_text = "本关俗称“老奶奶过马路”，不少游戏中应该都有类似关卡。"
		+ "\n\n本关被封位几率较小，因此不需要关注全局，只需要集中注意力盯住自机附近的一小块区域。自机位置推荐在屏幕中心，上下左右小幅运动避弹。"
		+ "\n\n本关制作者：chitose";
		StageData.stage3_6.help_text = "子弹类型博览会(bushi。相当瞎眼的底力关，祝你好运。"
		+ "\n\n本关设计者：chitose";
		StageData.stage3_7.help_text = "关于难度的说明同1-ex。如果你能通关全部三个ex关卡，那么可以尝试一下打hard了。"
		+ "\n\n本关制作者：chitose"
		+ "\n\n本关设计者：zun(笑)";

		StageData.stage1_1h.help_text = "鉴于能打hard的人水平应该都不需要看提示了，这个难度下这里就用来碎碎念吧。"
		+ "\n\n据说国内真正了解东方project和STG的只有600人，而我绝对算不上其中之一。不过我也希望能借这个游戏让更多人接触到STG和东方圈子。"
		+ "\n\n本关设计者：chitose";
		StageData.stage1_2h.help_text = "这一关其实历史非常悠久了，当我第一次做出这个游戏的原型，甚至还没有选关和胜利界面的时候，屏幕上用来测试的就是这一关。"
		+ "\n\n如果各位有兴趣看看这个游戏最初长什么德行，可以去本游戏的taptap论坛上看看。"
		+ "\n\n本关设计者：chitose";
		StageData.stage1_3h.help_text = "这一关历史比1-2稍微短一点，但印象中也已经跟随了我很多个版本没有被删掉。"
		+ "\n\n这期间机制越加越多，但这一关始终牢牢占住1-3的位置，也许是因为这关确实很好看吧。"
		+ "\n\n本关设计者：chitose";
		StageData.stage1_4h.help_text = "和1-3不同，这一关在过去设计得很差，完全就是凑数关。重制时我在几个版本之间反复纠结了很多次，最后还是选择了这个设计。"
		+ "\n\n这个设计的灵感来源是花朵盛开时好像喷火一样，结果没想到写着写着就变成真的烟花了..."
		+ "\n\n本关设计者：chitose";
		StageData.stage1_5h.help_text = "上个版本的1-5关卡甚至比1-4还要差，因为之前实在凑不出关卡了，其实手感很差扭起来也很糟，完全属于硬加难度了。"
		+ "\n\n然后在b站闲逛的时候，无意中看到了花花的CS自制弹幕，感觉这张符卡有点像逐渐绽放的一瓣莲花花瓣，就顺手抄了下来，顺便混进了他的粉丝群。"
		+ "\n\n本关设计者：花花";
		StageData.stage1_6h.help_text = "说来惭愧，这一关其实并不完全是我设计出来的，而是参考了uuz「完全墨染的樱花」，作了一些调整和简化最终完成的。"
		+ "\n\n说实话，虽然我STG玩的很糟，但原版中先扭再爆的花实在是让人很瞎（而且很难写），于是就改成了现在这样。"
		+ "\n\n本关设计者：chitose";
		StageData.stage1_7h.help_text = "看到这一关，有些车万狗可能已经产生幻视了。没错，这一关就是本人车万入坑作，th08中灵梦的符卡——回霊「夢想封印 侘」。"
		+ "\n\n总之非常感谢某个酒鬼程序员对本游戏的大力支持(笑)"
		+ "\n\n本关设计者：zun(笑)";

		StageData.stage2_1h.help_text = "这一关与其说是符卡，在设计上其实不如说更接近非符一点，因为完全没有任何设计原型或者灵感在里边，缺乏感情的一关。"
		+ "\n\n其实我也不是什么STG老玩家，因此有些关卡设计得不是很好...而这关正是其中典型。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_2h.help_text = "古诗云：\n年年二月暮，\n散乱杂飞花。\n雨过微风起，\n狂飘千万家。"
		+ "\n\n春天就该是绚烂的季节..我本想这么说的，奈何本人花粉过敏。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_3h.help_text = "古有项羽垓下之围十面埋伏，今有小金鱼在池塘里惨遭三面子弹反射板围攻...开个玩笑。"
		+ "\n\n类似的关卡设计已经在不少STG游戏中出现过了，但仍然是相当经典、有趣的关卡设计，很好。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_4h.help_text = "这一关的设计初衷是想做出加速弹和减速弹交错前进，让人眼花缭乱的那种感觉。"
		+ "\n\n事实证明我失败了。本关的难点所在并不是那些角度固定的加速弹和减速弹，而是密密麻麻的紫色固定弹，感觉很糟。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_5h.help_text = "如果说2-5还算是成功的设计，能让人玩的很爽快的话，这一关就是完完全全的败笔。"
		+ "\n\n由于同一关卡在简单难度和困难难度的设计必须是统一的，而我实在不知道2-5该怎么改，所以做成了这个德行，真是抱歉。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_6h.help_text = "这一关是我最最最讨厌的交叉弹，但真的很漂亮，仿佛盛开的死亡之花。"
		+ "\n\n本着“好不容易当一次策划还不快恶心恶心玩家”的原则，本关被添加到了游戏当中(笑)。"
		+ "\n\n本关设计者：chitose";
		StageData.stage2_7h.help_text = "实话实说，本关最初设计原型：蓝妈终符——幻神「飯綱権現降臨」，相信各位越共也看得出来。"
		+ "\n\n但是，这一关在难度调整的过程中越改越离谱，最后完全变成了大量风车弹的堆砌，完全看不出原型了。因此，我大概可以勉强这样说："
		+ "\n\n本关设计者：chitose";

		StageData.stage3_1h.help_text = "下雨一直是我最讨厌的天气，因为即使打伞也会被各种角度的风刮来的雨浇成落汤鸡，更何况还要注意四处飞溅的泥点子。" 
		+ "\n\n据说车万人下雨都不用打伞，到家以后全身只有一个点是干的(笑)。"
		+ "\n\n本关设计者：chitose";
		StageData.stage3_2h.help_text = "比起纷纷扬扬飘洒的雪花，个人认为还是冰雹更有冲击力(物理)。"
		+ "\n\n试想一下，鸡蛋大小的冰雹，带着一往无前的气势从天而降，砸烂汽车玻璃，并在车身上留下大大小小的弹坑。美工对此表示：“爽！”"
		+ "\n\n本关设计者：chitose";
		StageData.stage3_3h.help_text = "比起公园里那些泛着油光的飘满绿色不明物质的水体，其实更恶心的是红绿相间还夹杂着死鱼烂虾的赤潮。"
		+ "\n\n本关尽力模拟出了那种又红又绿的水体，希望能够恶心到大家。"
		+ "\n\n本关设计者：花花";
		StageData.stage3_4h.help_text = "从小我们就从各种十万个为什么或者百科全书上听说过百慕大的可怕之处，但其中原因众说纷纭。有些说是磁场，有些说是暗礁，还有些说是暗流。"
		+ "\n\n虽然我不认为这些东西能够对现代的核潜艇产生什么影响，不过总之这一关的漩涡还是相当可怕的。"
		+ "\n\n本关设计者：chitose";
		StageData.stage3_5h.help_text = "“老奶奶过马路”超级升级版，飙车老爷爷好评追加中！"
		+ "\n\n其实这一关的难点在于，飙车老爷爷的出现大幅减少了躲避过马路老奶奶的路线数量，并且很容易让玩家出现瞬间的手脑控制失调。"
		+ "\n\n本关制作者：chitose";
		StageData.stage3_6h.help_text = "大型子弹类型博览会(bushi。相当瞎眼的底力关，祝你好运。"
		+ "\n\n本关设计者：chitose";
		StageData.stage3_7h.help_text = "虽然火雨看起来很吓人，其实瑟缩在版底注意不要被封位就好了，难度并没有像看起来那么高，只是相当看人品。"
		+ "\n\n这一关本来是想仿乌鸦的爆符『千兆耀斑』，但是有些搞砸了..."
		+ "\n\n本关设计者：zun(笑)";

		StageData.stageEX_1.help_text = "据说，每一个刚刚接触到自制STG的初学者都会做出一个他们自己的「波与粒子的境界」，就好像每个MAD初学者都会做一个仿青空一样。"
		+ "\n\n(此处应有：滑与稽的境界.gif"
		+ "\n\n本关制作者：kaguya"
		+ "\n\n本关设计者：zun(笑)";
		StageData.stageEX_2.help_text = "想象一下，你正处在一个昏暗而寒冷的洞穴中，岩石般坚硬的寒冰把你围在了一个狭窄的圈子中间。"
		+ "\n\n突然，前一秒还在滴答滴答的水珠也冻成了坚冰，像子弹一样朝你袭来..."
		+ "\n\n果然我不太擅长讲鬼故事呢。"
		+ "\n\n本关设计者：chitose";
		StageData.stageEX_3.help_text = "“百川东到海，何时复西归。”古人曾经这样感叹时间的一去不返。然而此时此刻，就让我们来感受一下时光倒流，奔流的河水向源头席卷而来的恐惧吧。"
		+ "\n\n本关制作者：chitose"
		+ "\n\n本关设计者：花花";
		StageData.stageEX_4.help_text = "“易有太极，是生两仪，两仪生四象，四象生八卦，八卦定吉凶，吉凶生大业。”"
		+ "\n\n类似于八卦阵中的生门，本关逐渐扩散开的八卦中只有三爻全阴的坤卦可以穿过，让小金鱼好好学习一下易经吧。"
		+ "\n\n本关设计者：chitose";
		StageData.stageEX_5.help_text = "实在不知道该写什么，等花花来帮我写..."
		+ "\n\n本关制作者：chitose"
		+ "\n\n本关设计者：花花";

		/*
		"本关在设计时就觉得有点迷。。虽然最后发现可以躲在版底强扭，但我一开始想的是绕屏幕转圈引自机狙，结果由于需要多次穿越紫色弹幕所以反而更难了。\n\n" + 
		"如果你是车万狗的话，本关应该难不倒你。但假如实在过不去的话，建议跳过本关。";
		*/
	}

}