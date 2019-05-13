abstract class EmitterUpgradeBase extends EmitterBase {

	protected _missile_velocity = 20;
    protected _missile_size = 8;
    protected _missile_texture = TextureNames.MISSILE_STANDARD;

	protected _parent_emitter:EmitterBase;

	public setParentEmitter(emitter:EmitterBase) {
        this._parent_emitter = emitter;
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

    public onUpdate(event: egret.TimerEvent) {
        if (SelfMachine.INSTANCE.currentStage == null || SelfMachine.INSTANCE.currentStage.state != StageState.RUNNING || this._parent_emitter == null) {
            return;
        }
		this.x = this._parent_emitter.x;
		this.y = this._parent_emitter.y;
    }
	
}