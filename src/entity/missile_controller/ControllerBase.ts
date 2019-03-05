abstract class ControllerBase extends egret.Sprite {

	protected timer:egret.Timer;

	public constructor() {
		super();
        SelfMachine.INSTANCE.currentStage.arrayController.push(this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

    protected onAddToStage(event:egret.Event) {}

	protected abstract onUpdate(event: egret.TimerEvent);

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
	
}