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

        model['menu-container'].map(block => menuElement.appendChild(block.getObject())).join('');
        model['content'].map(block => contentElement.appendChild(block.getObject()));
    }
}