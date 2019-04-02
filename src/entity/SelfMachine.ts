class SelfMachine extends egret.Sprite {
    public static readonly INSTANCE:SelfMachine = new SelfMachine();
    public static readonly WIDTH = 256;
    public static readonly HEIGHT = 256;
    public static readonly SIZE = 8;

    private _img:egret.Bitmap;  //自机图标
    private _shape:egret.Shape; //自机判定点
    private isTouching:boolean = false;
    private distance:egret.Point = new egret.Point();

    public currentStage:StageBase = null;

    private constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event) {
        this.doRender();
        this._img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this._img.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    }

    private doRender() {
        this._img = MyUtils.createBitmapByName(TextureNames.SELF_MACHINE);
        this._img.width = SelfMachine.WIDTH;
        this._img.height = SelfMachine.HEIGHT;
        this._img.anchorOffsetX = this._img.width/2;
        this._img.anchorOffsetY = this._img.height/2;
        this._img.x = this.stage.stageWidth/2;
        this._img.y = this.stage.stageHeight/2;
        this._img.touchEnabled = true;
        this.addChild(this._img);
        
        this._shape = new egret.Shape();
        this._shape.x = this.stage.stageWidth/2;
        this._shape.y = this.stage.stageHeight/2;
        this._shape.graphics.beginFill(0x000000, 1);
        this._shape.graphics.drawCircle(0, 0, SelfMachine.SIZE);
        this._shape.graphics.endFill();
        this.addChild(this._shape);
    }

    private mouseDown(evt:egret.TouchEvent) {
        if (this.isTouching) {
            return;
        }
        this.isTouching = true;
        this.distance.x = evt.stageX - this._shape.x;
        this.distance.y = evt.stageY - this._shape.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseMove(evt:egret.TouchEvent) {
        if(this.isTouching) {
            let ax = evt.stageX - this.distance.x; ax = Math.max(ax, SelfMachine.SIZE); ax = Math.min(ax, Main.X - SelfMachine.SIZE);
            let ay = evt.stageY - this.distance.y; ay = Math.max(ay, this.stage.stageHeight * Main.UPPER_Y + SelfMachine.SIZE); ay = Math.min(ay, this.stage.stageHeight * Main.BELOW_Y - SelfMachine.SIZE);

            this._shape.x = ax;
            this._shape.y = ay;
            this._img.x = ax;
            this._img.y = ay;
        }
    }

    private mouseUp(evt:egret.TouchEvent) {
        this.isTouching = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    public getX() {
        return this._img.x;
    }

    public getY() {
        return this._img.y;
    }

    public leaveStage() {
        this.removeChild(this._shape);
        this.removeChild(this._img);
        this.currentStage.removeChild(this);
        this.currentStage = null;
    }

}