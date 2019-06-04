abstract class MissileEvent extends egret.Event {
	public static TICK:string = "missile_tick";
	public static EDGE:string = "missile_edge";
}

class MissileTickEvent extends MissileEvent {
	public constructor() {             
        super(MissileEvent.TICK, true, false);
    }
}

class MissileEdgeEvent extends MissileEvent {
	public constructor() {             
        super(MissileEvent.EDGE, true, false);
    }
}