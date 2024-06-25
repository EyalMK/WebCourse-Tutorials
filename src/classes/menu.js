import { ButtonElement } from './buttonElement.js';
import { renderAbout, renderCalculator, renderContact } from '../pages';

export class Menu {
    constructor() {
        this.menuItems = [
            { name: 'Calculator', view: 'Calculator' },
            { name: 'About', view: 'About' },
            { name: 'Contact', view: 'Contact' }
        ];
    }

    toggleMenu(hide) {


    }

    setView(text) {
        const app = document.querySelector('.app');
        const header = document.querySelector('h1');
        header.innerText = text
        toggleMenu(true); // Hides the dropdown menu

        // Renders the selected view
        if (text === 'Calculator') {
            renderCalculator();
        } else if (text === 'About') {
            renderAbout(app);
        } else if (text === 'Contact') {
            renderContact(app);
        }
    }

    renderMenu() {
        const ddMenu = document.getElementById('ddMenu');
        const topMenu = document.getElementById('topMenu');
    
        ddMenu.innerHTML = ''; // Clears the dropdown menu
        topMenu.innerHTML = ''; // Clears the top menu
    
        // Creates menu items for both the dropdown and top menu
        menuItems.forEach(item => {
            hamburgerMenuBtn = new HamburgerMenuButton('block py-1 px-2',item.name,() => setView(item.view));
            ddMenu.appendChild(hamburgerMenuBtn);
    
            topMenuBtn = new TopMenuButton('py-1 px-2',item.name,() => setView(item.view));
            topMenu.appendChild(topMenuBtn);
        });
    }
}

class TopMenuButton extends ButtonElement {
    constructor(className, innerText, onHandleClick){
        super(className, innerText, onHandleClick);
    }
}

class HamburgerMenuButton extends ButtonElement {
    constructor(className, innerText, onHandleClick){
        super(className, innerText, onHandleClick);
    }
}