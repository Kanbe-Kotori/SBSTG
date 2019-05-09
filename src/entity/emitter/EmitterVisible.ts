class EmitterVisible extends EmitterBase {

    protected _size:number;
    protected _texture:string;
	protected _img:egret.Bitmap;

	public constructor(point:egret.Point, size:number, texture:string) {
		super();
		this.x = point.x;
        this.y = point.y;
        this._size = size;
        this._texture = texture;
	}

	protected onAddToStage(event:egret.Event) {
		super.onAddToStage(event);
        this.doRender();
    }

	protected doRender() {
		if (this._size <= 0) {
			return;
		}
		this._img = MyUtils.createBitmapByName(this._texture);
        this._img.width = this._size;
        this._img.height = this._size;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this.addChild(this._img);
	}

	public setDead() {
		this.removeChildren();
		this.parent.removeChild(this);
        super.setDead();
    }

	public onUpdate(event: egret.TimerEvent) {
		//Do nothing
	}

}