class Stage2 extends StageBase {
    public static readonly INSTANCE:Stage2 = new Stage2("2", 30);

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
        let rain = new SideEmitterUpgrade(15, 20);
        rain.setFreq(250);
        rain.setStartAngle(0.45);
        rain.setEndAngle(0.55);
        rain.setNumber(10);
    }

}