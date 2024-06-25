import { Element } from './element';

export class ButtonElement extends Element {
    #button;

    constructor(className, innerText, onHandleClick){
        super("button", innerText);
        this.#button = document.createElement('button');
        const processed_classNames = super.processClasses(className);
        if (processed_classNames.length > 0) {
            this.#button.classList.add(...processed_classNames);
        }
        this.#button.innerText = innerText;
        this.#button.onClick = onHandleClick;
    }

    toHTML() {
        return this.#button;
    }
}