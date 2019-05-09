abstract class EmitterDecorator extends EmitterBase {

	protected _missile_velocity = 20;
    protected _missile_size = 8;
    protected _missile_texture = TextureNames.MISSILE_STANDARD;

	protected _deco:EmitterBase;

	public decorate(emitter:EmitterBase) {
        this._deco = emitter;
	}

	public setMissileSize(size:number) {
        this._missile_size = size;
    }

    public setMissileVelocity(velocity:number) {
        this._missile_velocity = velocity;
    }

    public setMissileTexture(missile_texture:string) {
        this._missile_texture = missile_texture;
    }
	
}