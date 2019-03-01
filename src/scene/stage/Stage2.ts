class Stage2 extends StageBase {
    public static readonly INSTANCE:Stage2 = new Stage2("2", 30);

	private rain:Rain;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.rain = new Rain(20, 30, 300, 0.4, 0.6, 11);
    }

}