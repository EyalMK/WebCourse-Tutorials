import { ButtonElement } from './buttonElement.js';
import { renderAbout, renderCalculator, renderContact } from '../pages';
import { SVG } from './svgElement.js';

export class Menu {
    constructor() {
        this.menuItems = [
            { name: 'Calculator', view: 'Calculator' },
            { name: 'About', view: 'About' },
            { name: 'Contact', view: 'Contact' }
        ];
        this.ddMenu = document.getElementById('ddMenu');
        this.topMenu = document.getElementById('topMenu');
    }

    toggleMenu(hide) {
        if (!hide) {
            this.ddMenu.classList.toggle('hidden'); // Toggles hidden class on dropdown menu
            document.querySelectorAll('svg').forEach((el) => {
                el.classList.toggle('hidden'); // Toggles hidden class on all SVG elements
            });
        } else {
            this.ddMenu.classList.add('hidden'); // Adds hidden class to dropdown menu
            document.querySelectorAll('svg')[0].classList.remove('hidden'); // Shows the first SVG element
            document.querySelectorAll('svg')[1].classList.add('hidden'); // Hides the second SVG element
        }
    }

    setView(text) {
        const app = document.querySelector('.content');
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
        this.ddMenu.innerHTML = ''; // Clears the dropdown menu
        this.topMenu.innerHTML = ''; // Clears the top menu
        const menuContainer = document.getElementById("menu-container");
        const burgerBtn = new ButtonElement("block sm:hidden", "", () => this.toggleMenu());

        const defaultSvgPath = new SVG("http://www.w3.org/2000/svg", 'path');
        defaultSvgPath.setAttribute(null, "fill", "#FFFFFF");
        defaultSvgPath.setAttribute(null, "d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
        
        const defaultSvg = new SVG("http://www.w3.org/2000/svg", 'svg');
        defaultSvg.setAttribute(null, 'viewBox', '0 0 448 512');
        defaultSvg.setAttribute(null, 'height', '1.5em');
        defaultSvg.getElement().appendChild(defaultSvgPath.getElement());
        
        const secondarySvgPath = new SVG("http://www.w3.org/2000/svg", 'path');
        secondarySvgPath.setAttribute(null, "fill", "#FFFFFF");
        secondarySvgPath.setAttribute(null, "d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z");

        const secondarySvg = new SVG("http://www.w3.org/2000/svg", 'svg');
        secondarySvg.setAttribute(null, 'viewBox', '0 0 384 512');
        secondarySvg.setAttribute(null, 'height', '1.5em');
        secondarySvg.setAttribute(null, 'class', 'hidden');
        secondarySvgPath.getElement().appendChild(secondarySvg.getElement());

        burgerBtn.getElement().appendChild(defaultSvg.getElement());
        burgerBtn.getElement().appendChild(secondarySvg.getElement());

        menuContainer.appendChild(burgerBtn.getElement());
    
    
        // Creates menu items for both the dropdown and top menu
        this.menuItems.forEach(item => {
            const hamburgerMenuBtn = new HamburgerMenuButton('block py-1 px-2', item.name, () => setView(item.view));
            this.ddMenu.appendChild(hamburgerMenuBtn.getElement());
    
            const topMenuBtn = new TopMenuButton('py-1 px-2',item.name,() => setView(item.view));
            this.topMenu.appendChild(topMenuBtn.getElement());
        });

        return this.ddMenu.outerHTML, this.topMenu.outerHTML;
    }

    toHTML() {
        let respMenu, menu = this.renderMenu();
        return respMenu + '' + menu
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