class Launcher {
	protected readonly arrayLogic:Array<LauncherLogicBase> = new Array<LauncherLogicBase>();

	protected _initial_pos:egret.Point;
	protected _current_pos:egret.Point;

	public constructor() {
        SelfMachine.INSTANCE.currentStage.arrayLauncher.push(this);
	}

	public addLogic(logic:LauncherLogicBase) {
		this.arrayLogic.push(logic);
		return this;
	}

	public setInitialPos(point:egret.Point) {
		this._initial_pos = point;
		this._current_pos = point;
		return this;
	}

    public start() {
        /*if (SelfMachine.INSTANCE.currentStage == null) {
            return;
        }*/
		for (let i of this.arrayLogic) {
            i.start();
        }
    }

    public resume() {
        for (let i of this.arrayLogic) {
			i.resume();
        }
    }

    public pause() {
        for (let i of this.arrayLogic) {
			i.pause();
        }
    }

	public reset() {
		this.pause();
		this._current_pos = this._initial_pos;
		for (let i of this.arrayLogic) {
			i.reset();
        }
	}

    public setDead() {
        this.pause();
		MyUtils.removeObjectFromArray(this, SelfMachine.INSTANCE.currentStage.arrayLauncher);
    }

    public setPos(point:egret.Point) {
        this._current_pos = point;
    }

    public getPos() {
        return new egret.Point(this._current_pos.x, this._current_pos.y);
    }

    public getX() {
        return this._current_pos.x;
    }

    public getY() {
        return this._current_pos.y;
    }
}