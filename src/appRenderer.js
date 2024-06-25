import { processClassList } from './utils';
import { model } from './model'; 

export class AppRenderer {
    constructor(selector, classList="") {
        this.$el = document.querySelector(selector);
        const processedClasses = processClassList(classList); 
        this.$el.classList.add(...processedClasses);
    }

    renderApp(model, menuClasses, contentClasses) {
        const menuElement = document.getElementById("menu-container");
        menuElement.classList.add(...processClassList(menuClasses));
        menuElement.innerHTML = model['menu-container'].map(block => block.toHTML()).join('');

        const contentElement = document.getElementById("content");
        contentElement.classList.add(...processClassList(contentClasses));
        contentElement.innerHTML = model['content'].map(block => block.toHTML()).join('');

        this.$el.appendChild(menuElement);
        this.$el.appendChild(contentElement);
    }
}