class SelfMachine extends egret.Sprite {
    public static readonly INSTANCE:SelfMachine = new SelfMachine();
    public static readonly WIDTH = 192;
    public static readonly HEIGHT = 192;
    public static readonly SIZE = 8;

    private img:egret.Bitmap;
    private shape:egret.Shape;
    private isTouching:boolean = false;
    private distance:egret.Point = new egret.Point();

    public currentStage:StageBase = null;

    private constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event) {
        this.doRender();
        this.img.touchEnabled = true;
        this.img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.img.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    }

    private doRender() {
        this.img = MyUtils.createBitmapByName("self_machine_png");
        this.img.width = 192;
        this.img.height = 192;
        this.img.anchorOffsetX = this.img.width/2;
        this.img.anchorOffsetY = this.img.height/2;
        this.img.x = this.stage.stageWidth/2;
        this.img.y = this.stage.stageHeight/2;
        this.addChild(this.img);
        
        this.shape = new egret.Shape();
        this.shape.x = this.stage.stageWidth/2;
        this.shape.y = this.stage.stageHeight/2;
        this.shape.graphics.beginFill(0x000000, 1);
        this.shape.graphics.drawCircle(0, 0, SelfMachine.SIZE);
        this.shape.graphics.endFill();
        this.addChild(this.shape);
    }

    private mouseDown(evt:egret.TouchEvent) {
        this.isTouching = true;
        this.distance.x = evt.stageX - this.shape.x;
        this.distance.y = evt.stageY - this.shape.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseMove(evt:egret.TouchEvent) {
        if(this.isTouching) {
            let ax = evt.stageX - this.distance.x; ax = Math.max(ax, SelfMachine.SIZE); ax = Math.min(ax, Main.X - SelfMachine.SIZE);
            let ay = evt.stageY - this.distance.y; ay = Math.max(ay, this.stage.stageHeight * Main.UPPER_Y + SelfMachine.SIZE); ay = Math.min(ay, this.stage.stageHeight * Main.BELOW_Y - SelfMachine.SIZE);

            this.shape.x = ax;
            this.shape.y = ay;
            this.img.x = ax;
            this.img.y = ay;
        }
    }

    private mouseUp(evt:egret.TouchEvent) {
        this.isTouching = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    public getX() {
        return this.img.x;
    }

    public getY() {
        return this.img.y;
    }

    public setDead() {
        this.removeChild(this.shape);
        this.removeChild(this.img);
        this.currentStage = null;
    }

}