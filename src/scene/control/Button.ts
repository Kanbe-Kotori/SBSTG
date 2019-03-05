class Button extends egret.Sprite {

	protected _width:number;
	protected _height:number;
	protected _texture:string;
	protected _pos:egret.Point;
	protected _action:Function;

	protected img:egret.Bitmap;

	/**
	 * 新建一个按钮，未setAction请不要addChild。
	 * @param width 按钮宽度
	 * @param height 按钮高度
	 * @param pos 按钮中心坐标
	 * @param texture 按钮材质名称，不用加下划线png
	 */
	public constructor(width:number, height:number, pos:egret.Point, texture:string) {
		super();
		this._width = width;
		this._height = height;
		this._pos = pos;
		this._texture = texture;
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	public setAction(action:Function) {
		this._action = action;
	}

	protected onAddToStage(event:egret.Event) {
        //console.info("btn added");
        this.doRender();
        this.img.touchEnabled = true;
        this.img.addEventListener(egret.TouchEvent.TOUCH_TAP, this._action, this);
    }

    protected doRender() {
        this.img = MyUtils.createBitmapByName(this._texture + "_png");
        this.img.width = this._width;
        this.img.height = this._height;
        this.img.anchorOffsetX = this.img.width/2;
        this.img.anchorOffsetY = this.img.height/2;
        this.img.x = this._pos.x;
        this.img.y = this._pos.y;
        this.addChild(this.img);
    }
	
    public static return() {
        let current = SelfMachine.INSTANCE.currentStage;
        current.end();
        Main.getMain().removeChild(current);
        Main.getMain().addChild(PageMain.INSTANCE);
    }

	public static restart() {
		let current = SelfMachine.INSTANCE.currentStage;
		current.restart();
	}

}