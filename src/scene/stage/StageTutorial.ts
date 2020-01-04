abstract class StageTutorial extends StageBase {

	private _text = "";

	public constructor(id:string, time:number, text:string) {
        super(id, time);
		this._text = text;
    }

	protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);

		this.pause();
		MsgBox.setCustomAction(
			() => {SelfMachine.INSTANCE.currentStage.restart();}
		);
		MsgBox.showMsgBox(this, this._text);
    }

}