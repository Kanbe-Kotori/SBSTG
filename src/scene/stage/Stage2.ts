class Stage2 extends StageBase {
    public static readonly INSTANCE:Stage2 = new Stage2("2", 30);

	private rain:Rain;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.rain = new Rain(20, 30, 300, 0.4, 0.6, 11);
    }

    public start() {
        this.rain.start();
        //this.sniper2.startWithDelay(2000);
        this.state = StageState.RUNNING;
    }

    public pause() {
        this.rain.stop();
        this.state = StageState.PAUSING;
    }

    public restart() {
        this.rain.stop();
        this.state = StageState.BEFORE_RUNNING;
        this.textfield.text = "3";
        this.timer.reset();
        this.timer.repeatCount = 3;
        this.timer.start();
    }

    public end() {
        this.rain.stop();
        this.state = StageState.END;
        MyUtils.cleanMissile(this);
    }
}