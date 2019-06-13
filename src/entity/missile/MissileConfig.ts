class MissileConfig {
	private _type:string;
	private _texture = TextureNames.MISSILE_STANDARD;
	private _velocity = 20;
	private _width = 24;
	private _height = 24;
	private _extra_para:number[] = [];
    protected _handler:Array<MissileEventHandler> = [];
	private isBottomLayer = false;

	public constructor(type:string) {
		this._type = type;
	}

	public setSize(width:number, height:number) {
        this._width = width;
		this._height = height;
		return this;
    }

    public setVelocity(velocity:number) {
        this._velocity = velocity;
		return this;
    }

	public setBottomLayer() {
        this.isBottomLayer = true;
		return this;
    }

	public addHandler(handler:MissileEventHandler) {
        this._handler.push(handler);
        return this;
    }

	/**
	 * 对于变速弹，只能用一次！
	 */
	public getVelocity() {
		if (this._extra_para[MissileUtils.RANDOM_VELOCITY_PARA] != undefined)
			return this._velocity + Math.random()*(this._extra_para[MissileUtils.RANDOM_VELOCITY_PARA]-this._velocity);
		else
			return this._velocity;
	}

    public setTexture(missile_texture:string) {
        this._texture = missile_texture;
		return this;
    }

	public setExtraPara(index:number, value:number) {
		this._extra_para[index] = value;
		return this;
	}

	public createMissile() {
		switch(this._type) {
			case MissileUtils.MISSILE_ROUND:
				let missile1 = new RoundMissile().setSize(this._width, this._height).setTexture(this._texture).setBottomLayer(this.isBottomLayer);
				for (let i of this._handler)
					missile1.addHandler(i.clone());
				return missile1;
			case MissileUtils.MISSILE_ELLIPTICAL:
				let missile2 = new EllipticalMissile().setSize(this._width, this._height).setTexture(this._texture).setBottomLayer(this.isBottomLayer);
				for (let i of this._handler)
					missile2.addHandler(i.clone());
				return missile2;
			default:
				return null;
		}
	}

}