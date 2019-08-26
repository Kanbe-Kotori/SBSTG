class LocalData {
	public static readonly UNFINISHED = "UNFINISHED";
	public static readonly SKIPPED = "SKIPPED";
	public static readonly FINISHED = "FINISHED";

	public static getStageData(stg:StageBase):STAGE_DATA {
		let str = "stage" + stg.getUniqueID();
		switch (egret.localStorage.getItem(str)) {
			case LocalData.FINISHED:
				return STAGE_DATA.FINISHED;
			case LocalData.SKIPPED:
				return STAGE_DATA.SKIPPED;
			case LocalData.UNFINISHED:
				return STAGE_DATA.UNFINISHED;
			default:
				egret.localStorage.setItem(str, LocalData.UNFINISHED);
				return STAGE_DATA.UNFINISHED;
		}
	}

	private static data2str(data:STAGE_DATA) {
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

	public static setStageData(stg:StageBase, data:STAGE_DATA) {
		let str = "stage" + stg.getUniqueID();
		egret.localStorage.setItem(str, LocalData.data2str(data));
	}

	public static isFirstTime() {
		if (egret.localStorage.getItem("first_time") != "no") {
			egret.localStorage.setItem("first_time", "no");
			return true;
		}
		return false;
	}

	public static clear() {
		egret.localStorage.clear();
	}
}

enum STAGE_DATA {
	UNFINISHED,
	FINISHED,
	SKIPPED
}