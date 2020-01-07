class RenderLogic extends LauncherLogicBase {

    protected _texture_width:number;
	protected _texture_height:number
    protected _texture:string;
	protected _img:egret.Bitmap;

	public constructor(launcher:Launcher, texture:string, width:number, height:number) {
		super(launcher);
        this._texture_width = width;
		this._texture_height = height;
        this._texture = texture;
		this.render(SelfMachine.INSTANCE.currentStage);
		//this._freq = 1000;
	}

	protected setPos(point:egret.Point) {
		if (this._img != null) {
			this._img.x = point.x;
			this._img.y = point.y;
		}
        return this;
    }

	protected createIMG() {
		this._img = MyUtils.createBitmapByName(this._texture);
        this._img.width = this._texture_width;
        this._img.height = this._texture_height;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
		this.setPos(this._launcher.getPos());
	}

	public onUpdate(event: egret.TimerEvent) {
		this._img.x = this._launcher.getX();
		this._img.y = this._launcher.getY();
    }

	public setTexture(texture:string) {
		this._texture = texture;
		return this;
	}

	public reset() {
		super.reset();
		this.setPos(this._launcher.getPos());
	}

	protected render(stage:StageBase) {
		this.createIMG();
		stage.addChildAtLayer(this._img, DrawingLayer.EMITTER);
	}

}