class CustomPath extends LauncherLogicBase {

	private _path:Function;
    private _shouldResetPos:boolean = true;

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
        if (this._shouldResetPos)
        this._launcher.setPos(this._path(0));
    }

    public resetPos(b:boolean) {
        this._shouldResetPos = b;
        return this;
    }

}