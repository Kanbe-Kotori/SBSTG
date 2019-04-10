class StageTemp extends StageBase {
    public static readonly INSTANCE:StageTemp = new StageTemp("temp", 30);

	private explosion:Explosion;
	private rain:Rain;

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        this.explosion = new Explosion(
			0, Main.X,
			Main.UPPER_Y, Main.Y * 0.5,
			15, 25);
		this.rain = new Rain(15, 15);
		this.rain.setFreq(1000);
        this.rain.setStartAngle(0.5);
        this.rain.setEndAngle(0.5);
		this.rain.setMissileSize(128);
		this.rain.setMissileTexture(TextureNames.MISSILE_RING);
    }

}