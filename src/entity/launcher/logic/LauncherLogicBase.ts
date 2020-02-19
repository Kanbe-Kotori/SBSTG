abstract class LauncherLogicBase {

	protected readonly _launcher:Launcher;

	protected _timer:egret.Timer;
	protected _freq:number = 50;
	protected _run_delay = 0;
    protected _delay_timer:egret.Timer;

    protected _ticker = 0;

	public constructor(launcher:Launcher) {
		this._launcher = launcher;
		this._timer = new egret.Timer(50);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.update, this);
	}

    public setFreq(freq:number) {
        this._freq = freq;
        return this;
    }

	public setDelay(delay:number) {
        this._run_delay = delay;
        return this;
    }

	public getLauncher() {
		return this._launcher;
	}

	public start() {
        if (this._run_delay > 0) {
            this._delay_timer = new egret.Timer(50, this._run_delay / 50);
            this._delay_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.run, this);
            this._delay_timer.start();
        } else {
            this.run();
        }
    }

    protected run() {
        this._timer.start();
        this._delay_timer = null;
    }

	public resume() {
        if (this._run_delay > 0 && this._delay_timer != null) {
            this._delay_timer.start();
        } else {
        	this.run();
		}
    }

	public pause() {
        if (this._timer != null) {
            this._timer.stop();
        }
        if (this._delay_timer != null) {
            this._delay_timer.stop();
        }
	}

	public reset() {
        this.pause();
        this._ticker = 0;
    }

    public update(event: egret.TimerEvent) {
        if (this._ticker >= this._freq) {
            this._ticker -= this._freq;
            this.onUpdate(event);
        }
        this._ticker += 50;
    }

	public abstract onUpdate(event: egret.TimerEvent);

}