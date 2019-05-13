class RenderUpgrade extends EmitterUpgradeBase {

    protected _size:number;
    protected _texture:string;
	protected _img:egret.Bitmap;

	public constructor(size:number, texture:string) {
		super();
        this._size = size;
        this._texture = texture;
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	protected onAddToStage(event:egret.Event) {
        this.doRender();
    }

	protected doRender() {
		this.x = this._parent_emitter.x;
		this.y = this._parent_emitter.y;
		this._img = MyUtils.createBitmapByName(this._texture);
        this._img.width = this._size;
        this._img.height = this._size;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
		this._img.x = 0;
		this._img.y = 0;
        this.addChild(this._img);
	}

	public setDead() {
		this.removeChildren();
		this.parent.removeChild(this);
        super.setDead();
    }

	public setSize(size:number) {
		this._size = size;
	}

	public setTexture(texture:string) {
		this._texture = texture;
	}

	public stop() {
		super.stop();
		this._parent_emitter.stop();
		this.x = this._parent_emitter.x;
		this.y = this._parent_emitter.y;
	}

}