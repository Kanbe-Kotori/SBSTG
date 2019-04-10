abstract class ControllerBase extends egret.Sprite {

    protected _missile_velocity = 20;
    protected _missile_size = 8;
    protected _missile_texture = TextureNames.MISSILE_STANDARD;
    protected _freq = 300;
	protected timer:egret.Timer;

	public constructor() {
		super();
        SelfMachine.INSTANCE.currentStage.arrayController.push(this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.timer = new egret.Timer(this._freq, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
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

    public setMissileSize(size:number) {
        this._missile_size = size;
    }

    public setMissileVelocity(velocity:number) {
        this._missile_velocity = velocity;
    }

    public setMissileTexture(missile_texture:string) {
        this._missile_texture = missile_texture;
    }

    public setFreq(freq:number) {
        this._freq = freq;
        this.timer.delay = freq;
    }
	
}