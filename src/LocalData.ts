class LocalData {
	public static readonly NOT_PASSED = "NOT_PASSED";
	public static readonly SKIPPED = "SKIPPED";
	public static readonly PASSED = "PASSED";

	public static registerStage(stg:StageBase) {
		let str = "stage" + stg.getUniqueID();
		if (egret.localStorage.getItem(str) == undefined) {
			egret.localStorage.setItem(str, LocalData.NOT_PASSED);
		}
	}

	public static getStage(stage_id:string):STAGE_DATA {
		let str = "stage" + stage_id;
		switch (egret.localStorage.getItem(str)) {
			case LocalData.PASSED:
				return STAGE_DATA.PASSED;
			case LocalData.SKIPPED:
				return STAGE_DATA.SKIPPED;
			case LocalData.NOT_PASSED:
			default:
				return STAGE_DATA.NOT_PASSED;
		}
	}

	private static getStr(data:STAGE_DATA) {
		switch (data) {
			case STAGE_DATA.NOT_PASSED:
				return LocalData.NOT_PASSED;
			case STAGE_DATA.SKIPPED:
				return LocalData.SKIPPED;
			case STAGE_DATA.PASSED:
				return LocalData.PASSED;
			default:
				return null;
		}
	}

	public static setStage(stage_id:string, data:STAGE_DATA) {
		let str = "stage" + stage_id;
		egret.localStorage.setItem(str, LocalData.getStr(data));
	}
}

enum STAGE_DATA {
	NOT_PASSED,
	PASSED,
	SKIPPED
}