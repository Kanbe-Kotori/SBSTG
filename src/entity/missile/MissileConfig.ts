class MissileConfig {
	private _type:string;
	private _texture = TextureNames.MISSILE_STANDARD;
	private _velocity = 20;
	private _size = 8;
	private _extra_para:number[] = [];

	public constructor(type:string) {
		this._type = type;
	}

	public setSize(size:number) {
        this._size = size;
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
		switch(this._type) {
			case "RANDOM_VELOCITY":	
				let v:number = this._extra_para[0];		
				return this._velocity + Math.random()*(v-this._velocity);
			default: return this._velocity;
		}
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
			case "STANDARD":
			case "RANDOM_VELOCITY":
				return new StandardMissile().setSize(this._size).setTexture(this._texture);
			default:
				return null;
		}
	}

}