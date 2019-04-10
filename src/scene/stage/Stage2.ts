class Stage2 extends StageBase {
    public static readonly INSTANCE:Stage2 = new Stage2("2", 30);

	private rain:Rain;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.rain = new Rain(15, 20);
        this.rain.setFreq(250);
        this.rain.setStartAngle(0.45);
        this.rain.setEndAngle(0.55);
        this.rain.setNumber(10);
    }

}