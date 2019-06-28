abstract class MissileUpgradeBase extends EmitterUpgradeBase {
	protected _conf:MissileConfig;

	public constructor(conf:MissileConfig) {
		super();
		this._conf = conf;
	}

	public getConf() {
		return this._conf;
	}
}