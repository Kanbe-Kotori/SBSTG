abstract class StageTutorial extends StageBase {

	public tutorial_text = "";

	public constructor(id:string, time:number) {
        super(id, time);
    }

	protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);

		this.pause();
		MsgBox.setCustomAction(
			() => {SelfMachine.INSTANCE.currentStage.restart();}
		);
		MsgBox.showMsgBox(this, this.tutorial_text);
    }

}