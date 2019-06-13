abstract class EmitterBase extends egret.Sprite {

	protected timer:egret.Timer;
    protected _freq = 250;
    protected _delay = 0;

    protected _delay_timer;

	public constructor() {
		super();
        SelfMachine.INSTANCE.currentStage.arrayController.push(this);
        this.timer = new egret.Timer(this._freq, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
	}

	public abstract onUpdate(event: egret.TimerEvent);

    /**
     * 游戏不开始，弹幕不发射
    */
    public start() {
        if (SelfMachine.INSTANCE.currentStage == null) {
            return;
        }
        if (this._delay != 0) {
            this._delay_timer = new egret.Timer(this._delay, 1);
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
        if (this._delay != 0 && this._delay_timer != null) {
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

    public setDelay(delay:number) {
        this._delay = delay;
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
        this.timer.delay = freq;
        return this;
    }

    public setPos(point:egret.Point) {
        this.x = point.x;
        this.y = point.y;
        return this;
    }
}