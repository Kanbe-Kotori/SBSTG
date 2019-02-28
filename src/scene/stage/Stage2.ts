class Stage2 extends StageBase {
    public static readonly INSTANCE:Stage2 = new Stage2("2", 30);

	private rain:Rain;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.rain = new Rain(20, 30, 300, 0.4, 0.6, 11);
    }

    public start() {
        this.rain.start();
        this.missile_timer.start();
        this.state = StageState.RUNNING;
    }

    public pause() {
        this.rain.stop();
        this.missile_timer.stop();
        this.state = StageState.PAUSING;
    }

    public resume() {
        this.rain.start();
        this.timer.start();
        this.missile_timer.start();
        this.state = StageState.RUNNING;
    }

    public restart() {
        this.state = StageState.BEFORE_RUNNING;
        this.textfield.text = "3";
        this.timer.reset();
        this.timer.repeatCount = 3;
        this.timer.start();
    }

    public end() {
        this.rain.stop();
        this.timer.stop();
        this.missile_timer.stop();
        this.state = StageState.END;
        MyUtils.cleanMissile(this);
    }
}