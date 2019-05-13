abstract class EmitterBase extends egret.Sprite {

	protected timer:egret.Timer;
    protected _freq = 250;
    protected _delay = 0;

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
            let timer1 = new egret.Timer(this._delay, 1);
            timer1.addEventListener(egret.TimerEvent.TIMER, this.resume, this);
            timer1.start();
        } else if (SelfMachine.INSTANCE.currentStage.state == StageState.RUNNING) {
            this.timer.start();
        }
    }

    public resume() {
        if (SelfMachine.INSTANCE.currentStage == null) {
            return;
        }
        if (SelfMachine.INSTANCE.currentStage.state == StageState.RUNNING) {
            this.timer.start();
        }
    }

    public stop() {
        this.timer.stop();
    }

    public setDelay(delay:number) {
        this._delay = delay;
    }

    public setDead() {
        if (this.timer != null) {
            this.timer.stop();
        }
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
    }

    public setPos(point:egret.Point) {
        this.x = point.x;
        this.y = point.y;
    }
}