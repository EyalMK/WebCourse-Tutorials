import { ButtonElement } from './buttonElement.js'

export class ThemeHandler {
    constructor() {
        this.#init();
    }
    
    #init() {
        darkBtn = new DarkButtonToggle('hidden dark:block','Dark', () => this.toggle);   
        lightBtn = new LightButtonToggle('hidden dark:block','Light', () => this.toggle);
    }

    toggle(){
        document.documentElement.classList.toggle('dark');
    }
}

class DarkButtonToggle extends ButtonElement {
    constructor(className,innerText,onClick){
        super(className,innerText,onClick);
    }
}

class LightButtonToggle extends ButtonElement {
    constructor(className,innerText,onClick){
        super(className,innerText,onClick);
    }
}