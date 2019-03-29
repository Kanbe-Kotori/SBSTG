class Stage2 extends StageBase {
    public static readonly INSTANCE:Stage2 = new Stage2("2", 30);

	private rain:Rain;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.rain = new Rain(15, 20, 250, 0.45, 0.55, 8, TextureNames.MISSILE_WATER, 10);
    }

}