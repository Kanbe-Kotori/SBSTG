abstract class MissileEvent extends egret.Event {
	public static TICK:string = "missile_tick";
	public static EDGE:string = "missile_edge";
    private readonly _missile:MissileBase;

    public constructor(type:string, missile:MissileBase) {
        super(type, true, false);
        this._missile = missile;
    }

    public getMissile() {
        return this._missile;
    }
}

class MissileTickEvent extends MissileEvent {
	public constructor(missile:MissileBase) {             
        super(MissileEvent.TICK, missile);
    }
}

class MissileEdgeEvent extends MissileEvent {
	public constructor(missile:MissileBase) {             
        super(MissileEvent.EDGE, missile);
    }
}