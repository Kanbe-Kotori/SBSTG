class CustomPathUpgrade extends LauncherLogicBase {

	private _path:Function;

    public constructor(launcher:Launcher, path:Function) {
        super(launcher);
		this._path = path;
    }

    public onUpdate(event: egret.TimerEvent) {
		let time = SelfMachine.INSTANCE.currentStage.getCurrentTick();
		this._launcher.setPos(this._path(time));
    }

    public reset() {
		super.reset();
        this._launcher.setPos(this._path(0));
    }

}