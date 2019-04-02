abstract class Popup extends PageBase {

	protected _shape:egret.Shape;

	protected constructor(name:string) {
        super(name);
    }

    protected onAddToStage(event:egret.Event) {
        super.onAddToStage(event);
    }

    protected doRender() {
        this._shape = new egret.Shape();
        this._shape.x = 0;
        this._shape.y = 0;
        this._shape.graphics.beginFill(0x7F7F7F, 0.5);
		this._shape.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        this._shape.graphics.endFill();
        this.addChild(this._shape);

		//do sth
    }

}