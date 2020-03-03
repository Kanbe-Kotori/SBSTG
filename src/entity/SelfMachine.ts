class SelfMachine extends egret.Sprite {
    public static readonly INSTANCE:SelfMachine = new SelfMachine();
    public static readonly WIDTH = 61;
    public static readonly HEIGHT = 166;
    public static readonly SIZE = 8;

    private _img:egret.Bitmap;  //自机图标
    private _shape:egret.Shape; //自机判定点

    public currentStage:StageBase = null;
    public currentChapter:PageChapter = null;
    public UNDEAD:boolean = false;

    private constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.leaveStage,this);
    }

    private onAddToStage(event:egret.Event) {
        this.doRender();
    }

    private doRender() {
        this._img = MyUtils.createBitmapByName(TextureNames.SELF_MACHINE);
        this._img.width = SelfMachine.WIDTH;
        this._img.height = SelfMachine.HEIGHT;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this._img.x = Main.X/2;
        this._img.y = Main.Y/2;
        this.addChild(this._img);
        
        this._shape = new egret.Shape();
        this._shape.x = Main.X/2;
        this._shape.y = Main.Y/2;
        this._shape.graphics.beginFill(0x000000, 1);
        this._shape.graphics.drawCircle(0, 0, SelfMachine.SIZE);
        this._shape.graphics.endFill();
        this.addChild(this._shape);
    }

    public getX() {
        return this._img.x;
    }

    public getY() {
        return this._img.y;
    }

    public getPos() {
        return new egret.Point(this._img.x, this._img.y);
    }

    public setPos(point:egret.Point) {
        this._shape.x = point.x;
        this._shape.y = point.y;
        this._img.x = point.x;
        this._img.y = point.y;
    }

    public leaveStage() {
        this.removeChildren();
        this.currentStage = null;
    }

}