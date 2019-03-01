abstract class ControllerVisible extends ControllerBase {
	public constructor() {
		super();
	}

	protected onAddToStage(event:egret.Event) {
		super.onAddToStage(event);
        this.doRender();
    }

	protected abstract doRender();

	public setDead() {
		this.parent.removeChild(this);
        super.setDead();
    }

}