abstract class PageBase extends egret.DisplayObjectContainer {

    protected readonly _name:string;

	protected constructor(name:string) {
        super();
        this._name = name;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    protected onAddToStage(event:egret.Event) {
        this.width = Main.X;
        this.height = Main.Y;
        this.doRender();
    }

    protected abstract doRender();

}