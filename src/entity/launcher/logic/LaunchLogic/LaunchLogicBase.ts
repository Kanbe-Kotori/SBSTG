abstract class LaunchLogicBase extends LauncherLogicBase {
	protected _conf:MissileConfig;

	public constructor(launcher:Launcher, conf:MissileConfig) {
		super(launcher);
		this._conf = conf;
	}

	public getConf() {
		return this._conf;
	}
}