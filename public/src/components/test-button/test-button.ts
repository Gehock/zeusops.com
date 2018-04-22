export class TestButton {
    private text: string;
    private onClickCallback: Function;

    public constructor(text: string) {
        this.text = text;
    }

    public setOnClick(callback: Function): void {
        this.onClickCallback = callback; 
    }

    public getView(): string {
        const template: string = `<button>${this.text}</button>`;

        return $(template)
            .on(
                "click", 
                (e: any) => this.onClickCallback(e)
            );
    }
}