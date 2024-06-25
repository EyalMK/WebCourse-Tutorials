import { Element } from './element';

export class Title extends Element {
    #header;

    constructor(innerText, classes) {
        super("h1", innerText);
        this.innerText = innerText;
        this.classList = super.processClasses(classes);
    }

    toHTML() {
        return `<h1 class=${this.classList}>${this.innerText}</h1>`;
    }
}