class LocalData {
	public static readonly UNFINISHED = "UNFINISHED";
	public static readonly SKIPPED = "SKIPPED";
	public static readonly FINISHED = "FINISHED";

	public static registerStage(stg:StageBase) {
		let str = "stage" + stg.getUniqueID();
		if (egret.localStorage.getItem(str) == undefined) {
			egret.localStorage.setItem(str, LocalData.UNFINISHED);
		}
	}

	public static getStageData(stg:StageBase):STAGE_DATA {
		let str = "stage" + stg.getUniqueID();
		switch (egret.localStorage.getItem(str)) {
			case LocalData.FINISHED:
				return STAGE_DATA.FINISHED;
			case LocalData.SKIPPED:
				return STAGE_DATA.SKIPPED;
			case LocalData.UNFINISHED:
			default:
				return STAGE_DATA.UNFINISHED;
		}
	}

	private static getStr(data:STAGE_DATA) {
		switch (data) {
			case STAGE_DATA.UNFINISHED:
				return LocalData.UNFINISHED;
			case STAGE_DATA.SKIPPED:
				return LocalData.SKIPPED;
			case STAGE_DATA.FINISHED:
				return LocalData.FINISHED;
			default:
				return null;
		}
	}

	public static setStage(stage_id:string, data:STAGE_DATA) {
		let str = "stage" + stage_id;
		egret.localStorage.setItem(str, LocalData.getStr(data));
	}

	public static isFirstTime() {
		if (egret.localStorage.getItem("first") == undefined) {
			egret.localStorage.setItem("first", "false");
			return true;
		}
		return false;
	}
}

enum STAGE_DATA {
	UNFINISHED,
	FINISHED,
	SKIPPED
}