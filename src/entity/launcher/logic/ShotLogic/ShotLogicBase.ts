abstract class ShotLogicBase extends LauncherLogicBase {
	protected _missile_prototype:MissileBase;

	public constructor(launcher:Launcher, prototype:MissileBase) {
		super(launcher);
		this._missile_prototype = prototype;
	}

	public createMissile() {
		return this._missile_prototype.clone().setPos(this._launcher.getPos());
	}
}