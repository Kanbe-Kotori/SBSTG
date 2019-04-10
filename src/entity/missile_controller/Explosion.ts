class Explosion extends ControllerBase {

	private _xmin:number;
    private _xmax:number;
	private _ymin:number;
    private _ymax:number;
    private _vmin:number;
    private _vmax:number;
	private _size:number;
    private _num = 24;

    /** 
     * 新建一个爆炸发生器
    */
    public constructor(xmin:number, xmax:number, ymin:number, ymax:number, vmin:number, vmax:number) {
        super();
		this._xmin = xmin;
        this._xmax = xmax;
		this._ymin = ymin;
        this._ymax = ymax;
        this._vmin = vmin;
        this._vmax = vmax;
    }

    public setNumber(num:number) {
        this._num = num;
    }

    protected onUpdate(event: egret.TimerEvent) {
		let posx = this._xmin + Math.random() * (this._xmax - this._xmin);
		let posy = this._ymin + Math.random() * (this._ymax - this._ymin);
		let pos = new egret.Point(posx, posy);
		let v = this._vmin + Math.random() * (this._vmax - this._vmin);
		for (let i of MissileGenerator.createRingMissile(pos, v, this._size, this._missile_texture, this._num)) {
			SelfMachine.INSTANCE.currentStage.addChild(i);
		}
    }

}