class Test extends StageBase {
    protected _text:string;

    public constructor(text:string) {
        super("test", 30);
        this._text = text;
    }

    protected initEmitters() {
        try {
            eval(this._text);
        } catch (error) {
            console.log(error);
        }
    }

}