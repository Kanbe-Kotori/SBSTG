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

	public static getStage(stg:StageBase) {
		let str = "stage" + stg.getUniqueID();
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
}

enum STAGE_DATA {
	NOT_PASSED,
	PASSED,
	SKIPPED
}