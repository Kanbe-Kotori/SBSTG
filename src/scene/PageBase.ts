abstract class PageBase extends egret.Sprite {

	protected constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    }

    protected onAddToStage(event:egret.Event) {
        this.width = Main.X;
        this.height = Main.Y;
        this.doRender();
    }

    protected onRemove(event:egret.Event) {
		this.removeChildren();
	}

    protected abstract doRender();

}