abstract class EmitterBase extends egret.Sprite {

	protected timer:egret.Timer;
    protected _freq = 300;

	public constructor() {
		super();
        SelfMachine.INSTANCE.currentStage.arrayController.push(this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.timer = new egret.Timer(this._freq, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
	}

    protected onAddToStage(event:egret.Event) {}

	public abstract onUpdate(event: egret.TimerEvent);

    /**
     * 游戏不开始，弹幕不发射
    */
    public start() {
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

    public startWithDelay(delay:number) {
        let timer1 = new egret.Timer(delay, 1);
        timer1.addEventListener(egret.TimerEvent.TIMER, this.start, this);
        timer1.start();
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
}