abstract class EmitterBase {

    protected _posX;
    protected _posY;

	protected timer:egret.Timer;
    protected _freq = 250;
    protected _run_delay = 0;
    protected _delay_timer;

    protected _looper = 0;

	public constructor() {
        SelfMachine.INSTANCE.currentStage.arrayController.push(this);
        this.timer = new egret.Timer(50);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
	}

	public abstract onUpdate(event: egret.TimerEvent);

    protected shouldUpdate():boolean {
        this._looper++;
        if (this._looper >= this._freq / 50) {
            this._looper -= this._freq / 50;
            return true;
        }
        return false;
    }

    /**
     * 游戏不开始，弹幕不发射
    */
    public start() {
        if (SelfMachine.INSTANCE.currentStage == null) {
            return;
        }
        if (this._run_delay != 0) {
            this._delay_timer = new egret.Timer(50, this._run_delay / 50);
            this._delay_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.run, this);
            this._delay_timer.start();
        } else if (SelfMachine.INSTANCE.currentStage.state == StageState.RUNNING) {
            this.timer.start();
        }
    }

    protected run() {
        if (SelfMachine.INSTANCE.currentStage.state == StageState.RUNNING) {
            this.timer.start();
            this._delay_timer = null;
        }
    }

    public resume() {
        if (SelfMachine.INSTANCE.currentStage == null) {
            return;
        }
        if (this._run_delay != 0 && this._delay_timer != null) {
            this._delay_timer.start();
            return;
        }
        this.run();
    }

    public stop() {
        if (this.timer != null) {
            this.timer.stop();
        }
        if (this._delay_timer != null) {
            this._delay_timer.stop();
        }
    }

    public reset() {
        this._looper = 0;
        if (this.timer != null) {
            this.timer.stop();
        }
        if (this._delay_timer != null) {
            this._delay_timer.stop();
        }
    }

    public setDelay(delay:number) {
        this._run_delay = delay;
        return this;
    }

    public setDead() {
        this.stop();
        for (let i: number = 0; i < SelfMachine.INSTANCE.currentStage.arrayController.length; i++) {
			if (SelfMachine.INSTANCE.currentStage.arrayController[i] == this) {
				SelfMachine.INSTANCE.currentStage.arrayController.splice(i, 1);
				break;
			}
		}
    }

    public setFreq(freq:number) {
        this._freq = freq;
        return this;
    }

    public setPos(point:egret.Point) {
        this._posX = point.x;
        this._posY = point.y;
        return this;
    }

    public getPos() {
        return new egret.Point(this._posX, this._posY);
    }

    public getX() {
        return this._posX;
    }

    public getY() {
        return this._posY;
    }
}