class Stage2_1 extends StageBase {
    public static readonly INSTANCE:Stage2_1 = new Stage2_1("2-1", 30);

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        let rain = new SideEmitterUpgrade(15, 20);
        rain.setFreq(250);
        rain.setStartAngle(0.45);
        rain.setEndAngle(0.55);
        rain.setNumber(10);
    }

}