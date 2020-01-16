class Launcher {
	protected readonly arrayLogic:Array<LauncherLogicBase> = new Array<LauncherLogicBase>();

	protected _initial_pos = new egret.Point();
	protected _current_pos = new egret.Point();

	public constructor() {
        SelfMachine.INSTANCE.currentStage.arrayLauncher.push(this);
	}

	public addLogic(logic:LauncherLogicBase) {
		this.arrayLogic.push(logic);
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

    public setInitialPos(point:egret.Point) {
		this._initial_pos = point;
        return this.setPos(point);
	}

    public setPos(point:egret.Point) {
        this._current_pos = point;
        this.updateRender();
        return this;
    }

    private updateRender() {
        for (let i of this.arrayLogic) {
            if (i instanceof RenderLogic) {
                (<RenderLogic>i).updatePos();
            }
        }
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