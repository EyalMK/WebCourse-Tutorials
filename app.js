// Global variables
const header = document.querySelector('h1'); // Selects the header element
const app = document.getElementById('app'); // Selects the app container element
const ddMenu = document.querySelector('#ddMenu'); // Selects the dropdown menu element
const sandwitch = document.querySelectorAll('svg'); // Selects all SVG elements (sandwich icons for menu)
const html = document.documentElement; // Selects the root HTML element

// Menu items array
const menuItems = [
    { name: 'Calculator', view: 'Calculator' },
    { name: 'About', view: 'About' },
    { name: 'Contact', view: 'Contact' }
];

// Toggles the dark mode class on the HTML element
const toggle = () => html.classList.toggle('dark');

// Sets the view based on the selected menu item
const setView = (v) => {
    header.innerText = v; // Updates the header text
    toggleMenu(true); // Hides the dropdown menu

    // Renders the selected view
    if (v === 'Calculator') {
        renderCalculator();
    } else if (v === 'About') {
        renderAbout();
    } else if (v === 'Contact') {
        renderContact();
    }
};

// Toggles the visibility of the dropdown menu
const toggleMenu = (hide) => {
    if (!hide) {
        ddMenu.classList.toggle('hidden'); // Toggles hidden class on dropdown menu
        document.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden'); // Toggles hidden class on all SVG elements
        });
    } else {
        ddMenu.classList.add('hidden'); // Adds hidden class to dropdown menu
        document.querySelectorAll('svg')[0].classList.remove('hidden'); // Shows the first SVG element
        document.querySelectorAll('svg')[1].classList.add('hidden'); // Hides the second SVG element
    }
};

// Adds a row of content to a container
const addRow = (container, content) => {
    const row = `<div class='grid grid-cols-5 gap-2'>${content}</div>`;
    container.insertAdjacentHTML('beforeend', row); // Adds the row HTML to the container
};

// Adds a monitor display to a container
const addMonitor = (container, text) => {
    const t = text ?? ''; // Default text is empty if not provided
    const monitor = `<div id='monitor' class="bg-white border-4 border-blue-400 h-20 flex items-center col-span-5 text-blue-800 p-2 rounded-lg mb-2 font-bold text-4xl dark:bg-gray-700 dark:text-sky-50">${t}</div>`;
    container.insertAdjacentHTML('beforeend', monitor); // Adds the monitor HTML to the container
};

// Creates a button with the specified text
const button = (text) => {
    const c = text === 'calculate' ? 'col-span-4' : ''; // Adds col-span-4 class for the calculate button
    return `<div class='bg-blue-400 hover:bg-blue-600 text-white ${c} py-1 rounded-md text-center text-lg font-bold cursor-pointer d-btn dark:bg-gray-500 dark:text-sky-50 dark:hover:bg-gray-400'>${text}</div>`;
};

// Adds buttons to a container
const addButtons = (container, nums) => {
    const btnHTML = nums.map((n) => button(n)).join(''); // Creates button HTML for each number
    addRow(container, btnHTML); // Adds the buttons to a row in the container
};

// Handles button clicks for the calculator
const click = (event) => {
    const monitor = document.getElementById('monitor'); // Selects the monitor element
    const bac = monitor.innerText.trim(); // Gets the current text from the monitor
    const a = event.target.innerText; // Gets the text of the clicked button
    console.log(a);
    if (a === 'clear') {
        monitor.innerText = ''; // Clears the monitor text
    } else if (a === 'calculate') {
        monitor.innerText = bac + '=' + eval(bac); // Evaluates the expression and updates the monitor
    } else {
        monitor.innerText += a; // Adds the button text to the monitor
    }
};

// Renders the calculator interface
const renderCalculator = () => {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '**', 'calculate', 'clear'];
    app.innerHTML = ''; // Clears the app container
    addMonitor(app); // Adds the monitor to the app container
    addButtons(app, labels); // Adds the calculator buttons to the app container
    const buttons = document.querySelectorAll('.d-btn'); // Selects all calculator buttons
    buttons.forEach((el) => el.addEventListener('click', click)); // Adds click event listeners to buttons
};

// Renders the About page
const renderAbout = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for About</div>';
};

// Renders the Contact page
const renderContact = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Contact</div>';
};

// Renders the top menu dynamically
const renderMenu = () => {
    const ddMenu = document.getElementById('ddMenu');
    const topMenu = document.getElementById('topMenu');

    ddMenu.innerHTML = ''; // Clears the dropdown menu
    topMenu.innerHTML = ''; // Clears the top menu

    // Creates menu items for both the dropdown and top menu
    menuItems.forEach(item => {
        const button = document.createElement('button');
        button.className = 'block py-1 px-2';
        button.innerText = item.name;
        button.onclick = () => setView(item.view);
        ddMenu.appendChild(button);

        const topButton = document.createElement('button');
        topButton.className = 'py-1 px-2';
        topButton.innerText = item.name;
        topButton.onclick = () => setView(item.view);
        topMenu.appendChild(topButton);
    });
};

// Renders the theme toggle buttons dynamically
const renderThemeToggle = () => {
    const toggleButtonContainer = document.createElement('div');
    const darkButton = document.createElement('button');
    darkButton.className = 'dark:hidden block';
    darkButton.innerText = 'Dark';
    darkButton.onclick = toggle;
    toggleButtonContainer.appendChild(darkButton);

    const lightButton = document.createElement('button');
    lightButton.className = 'hidden dark:block';
    lightButton.innerText = 'Light';
    lightButton.onclick = toggle;
    toggleButtonContainer.appendChild(lightButton);

    document.querySelector('.flex.justify-between').appendChild(toggleButtonContainer);
};

// Renders the hamburger menu button
const renderHamburgerMenu = () => {
    const menuContainer = document.getElementById("menu-container");
    const burgerButton = document.createElement("button");
    burgerButton.classList.add("block", "sm:hidden");
    burgerButton.onclick = () => toggleMenu();

    // Default Svg Path
    const defaultSvgPath = document.createElementNS('http://www.w3.org/2000/svg', "path");
    defaultSvgPath.setAttributeNS(null, "fill", "#FFFFFF");
    defaultSvgPath.setAttributeNS(null, "d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
    
    // Secondary (Hidden) Svg Path
    const secondarySvgPath = document.createElementNS('http://www.w3.org/2000/svg', "path");
    secondarySvgPath.setAttributeNS(null, "fill", "#FFFFFF");
    secondarySvgPath.setAttributeNS(null, "d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z");

    // Default - Create an element within the svg - namespace (NS)
    const defaultIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    defaultIconSvg.setAttribute('viewBox', '0 0 448 512');
    defaultIconSvg.setAttribute('height', '1.5em');
    defaultIconSvg.appendChild(defaultSvgPath);

    // Default - Create an element within the svg - namespace (NS)
    const secondaryIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    secondaryIconSvg.setAttribute('viewBox', '0 0 384 512');
    secondaryIconSvg.setAttribute('height', '1.5em');
    secondaryIconSvg.setAttribute('class', 'hidden');
    secondaryIconSvg.appendChild(secondarySvgPath);

    burgerButton.appendChild(defaultIconSvg);
    burgerButton.appendChild(secondaryIconSvg);
    menuContainer.insertBefore(burgerButton, menuContainer.firstChild);
};

// Initialize the menu, theme toggle buttons and the calculator page.
renderMenu();
renderThemeToggle();
renderHamburgerMenu();
renderCalculator();