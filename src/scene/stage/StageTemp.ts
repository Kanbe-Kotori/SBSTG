class StageTemp extends StageBase {
    public static readonly INSTANCE:StageTemp = new StageTemp("temp", 30);

	private explosion:Explosion;
	private rain:Rain;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.explosion = new Explosion(
			0, Main.X,
			Main.UPPER_Y, Main.Y * 0.5,
			15, 25, 300, 8, TextureNames.MISSILE_RING, 24);
		this.rain = new Rain(15, 15, 1000, 0.5, 0.5, 128, "smjb3_png", 1);

    }

}