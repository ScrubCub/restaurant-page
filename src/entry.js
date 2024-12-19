import homePageDiv, {menuPageDiv, aboutPageDiv} from "./home-page.js";
import { appendChildrenToParents, createElements, resetPage } from "./utils.js";
const body = document.querySelector('body');

let navBar = (function () {
    let [homeNavBar, menuNavBar, aboutNavBar, navBarContainer] = createElements(['nav', 'nav', 'nav', 'div']);
    navBarContainer.setAttribute('id', 'navbar');
    homeNavBar.textContent = 'Home';
    menuNavBar.textContent = "Menu";
    aboutNavBar.textContent = "About";
    attachEventListeners([homeNavBar, menuNavBar, aboutNavBar], [homePageDiv, menuPageDiv, aboutPageDiv]);
    appendChildrenToParents([navBarContainer], [[homeNavBar, menuNavBar, aboutNavBar]]);
    return navBarContainer;
})();

function attachEventListeners(buttons, page) {
    buttons.forEach((button) => {
        let currentIndex = buttons.indexOf(button);
        button.addEventListener('click', () => {
            showPage(page[currentIndex]);
        })
    })
};

body.appendChild(navBar);
body.appendChild(homePageDiv);

function showPage(page) {

    resetPage();
    body.appendChild(page);

}