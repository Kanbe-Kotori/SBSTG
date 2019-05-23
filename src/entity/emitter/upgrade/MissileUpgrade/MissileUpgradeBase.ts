abstract class MissileUpgradeBase extends EmitterUpgradeBase {
	protected _conf:MissileConfig;

	public constructor(conf:MissileConfig) {
		super();
		this._conf = conf;
	}
}