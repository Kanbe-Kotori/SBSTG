class LauncherFactory {
	public static normalLauncher() {
		return new Launcher();
	}

	public static texturedLauncher(texture:string, width:number, height:number) {
		let launcher = new Launcher();
		launcher.addLogic(
			new RenderLogic(launcher, texture, width, height)
		);
		return launcher;
	}
}