abstract class PageBase extends egret.DisplayObjectContainer {

	protected constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    protected onAddToStage(event:egret.Event) {
        this.width = Main.X;
        this.height = Main.Y;
        this.doRender();
    }

    protected abstract doRender();

}