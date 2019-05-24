class VariableSizedMissile extends StandardMissile{
	protected _init_size:number;
	protected _final_size:number;
	protected _size_change_speed:number; //每秒变化量，绝对值

	public setVariableSize(init_size:number, final_size:number, size_change_speed:number) {
		this._size = init_size;
        this._init_size = init_size;
		this._final_size = final_size;
		this._size_change_speed = size_change_speed;
        return this;
    }

	public onUpdate(event: egret.TimerEvent) {
		super.onUpdate(event);		
		if (this._init_size > this._final_size) {	//缩小
		   	if (this._size > this._final_size) {
		   		this._size -= this._size_change_speed / 20;
	   		}
		} else {	//变大
			if (this._size < this._final_size) {
		   		this._size += this._size_change_speed / 20;
	   		}
		}
		this._img.width = 2 * this._size;
		this._img.height = 2 * this._size;
    }
}