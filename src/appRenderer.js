import { processClassList } from './utils';

export class AppRenderer {
    constructor(selector, classList="") {
        this.$el = document.querySelector(selector);
        const processedClasses = processClassList(classList); 
        this.$el.classList.add(...processedClasses);
    }

    renderApp(model, menuClasses, contentClasses) {
        const menuElement = document.getElementById("menu-container");
        menuElement.classList.add(...processClassList(menuClasses));

        const contentElement = document.getElementById("content");
        contentElement.classList.add(...processClassList(contentClasses));

        this.$el.appendChild(menuElement);
        this.$el.appendChild(contentElement);

        menuElement.innerHTML = model['menu-container'].map(block => block.toHTML()).join('');
        contentElement.innerHTML = model['content'].map(block => block.toHTML()).join('');
    }
}