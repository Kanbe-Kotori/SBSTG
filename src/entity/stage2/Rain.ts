class Rain extends egret.Sprite {

    private _vmin:number;
    private _vmax:number;
    private _freq:number;
    private _ang1:number;
    private _ang2:number;
    private _num:number;

    private timer:egret.Timer;

    /** 
     * 新建一个雨点发射器
     * @param velocity 弹幕速度
     * @param freq 多少毫秒一发
     * @param ang1 起始角度
     * @param ang2 终止角度
     * @param num 一发几个
    */
    public constructor(vmin:number, vmax:number, freq:number, ang1:number, ang2:number, num:number) {
        super();
        this._vmin = vmin;
        this._vmax = vmax;
        this._freq = freq;
        this._ang1 = ang1;
        this._ang2 = ang2;
        this._num = num;
        this.timer = new egret.Timer(this._freq, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
    }

    private onUpdate(event: egret.TimerEvent) {
        let i = 0;
        do {
            var point: egret.Point = new egret.Point(SelfMachine.INSTANCE.currentStage.width * Math.random(), SelfMachine.INSTANCE.currentStage.height * Main.UPPER_Y);
            let theta = (this._ang1 + Math.random() * (this._ang2 - this._ang1)) * Math.PI;
            let v = this._vmin + Math.random() * (this._vmax - this._vmin);
            let missile = new RainMissile(point, v * Math.cos(theta), v * Math.sin(theta));
            SelfMachine.INSTANCE.currentStage.addChild(missile);
        } while(++i < this._num);
    }

    public start() {
        this.timer.start();
    }

    public stop() {
        this.timer.stop();
    }

}