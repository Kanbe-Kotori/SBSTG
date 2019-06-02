class MissileConfig {
	private _type:string;
	private _texture = TextureNames.MISSILE_STANDARD;
	private _velocity = 20;
	private _size = 8;
	private _rotate_speed = 0;
	private _extra_para:number[] = [];	

	public constructor(type:string) {
		this._type = type;
	}

	public setSize(size:number) {
        this._size = size;
		return this;
    }

	public setRotate(rotate:number) {
        this._rotate_speed = rotate;
        return this;
    }

    public setVelocity(velocity:number) {
        this._velocity = velocity;
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
			case MissileUtils.MISSILE_STANDARD:
				return new StandardMissile().setSize(this._size).setTexture(this._texture).setRotate(this._rotate_speed);
			case MissileUtils.MISSILE_VARIABLE_SIZED:
				return new VariableSizedMissile()
					.setVariableSize(this._size, this._extra_para[MissileUtils.SIZE_FINAL_PARA], this._extra_para[MissileUtils.SIZE_CHANGE_PARA])
					.setTexture(this._texture)
					.setRotate(this._rotate_speed);
			default:
				return null;
		}
	}

}