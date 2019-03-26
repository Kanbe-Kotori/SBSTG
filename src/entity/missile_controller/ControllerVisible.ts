abstract class ControllerVisible extends ControllerBase {

	protected _img:egret.Bitmap;

	public constructor() {
		super();
	}

	protected onAddToStage(event:egret.Event) {
		super.onAddToStage(event);
        this.doRender();
    }

	protected abstract doRender();

	public setDead() {
		this.removeChild(this._img);
		this.parent.removeChild(this);
        super.setDead();
    }

}