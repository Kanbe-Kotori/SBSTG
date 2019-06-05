class ButtonWithText extends Button {

	protected _text:string;
	protected textfield:egret.TextField;

    protected _color = 0xFFFFFF

	public constructor(width:number, height:number, pos:egret.Point, texture:string, text:string) {
		super(width, height, pos, texture);
		this._text = text;
	}

	protected doRender() {
		super.doRender();
		this.textfield = new egret.TextField();
        this.textfield.width = this.img.width;
        this.textfield.height = this.img.height;
        this.textfield.x = this.img.x;
        this.textfield.y = this.img.y;
		this.textfield.anchorOffsetX = this.img.width/2;
        this.textfield.anchorOffsetY = this.img.height/2;
        this.textfield.size = 50;
        this.textfield.text = this._text;
        this.textfield.textColor = this._color;
        this.textfield.textAlign = egret.HorizontalAlign.CENTER;
        this.textfield.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.textfield);
	}

    public setColor(color:number) {
        this._color = color;
    }
}