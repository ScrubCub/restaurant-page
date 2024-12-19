import {createElements, setAllAttributes, appendChildrenToParents} from "./utils.js"
import { menuPageDiv } from "./menu-page.js";
import { aboutPageDiv } from "./about-page.js";
import "./stylesheet.css"

export default (function createHomePage() {
    let [
        textDiv1,
        textDiv2,
        textDiv3,
        container,
        companyName] = createElements(['div', 'div', 'div', 'div', 'div']);
           
    let elementsToSet = [container, textDiv1, textDiv2, textDiv3];
    let attributes = ['id', 'class', 'class', 'class'];
    let values = ['home_page', 'homePageText', 'homePageText', 'homePageText'];
    let parents = [container];
    let children = [[companyName, textDiv1, textDiv2, textDiv3]];
    companyName.textContent = "Cagasan's"
    textDiv1.textContent = "Here at Cagasan's, we serve not only you but your tastebuds, too! Get ready to be taken to flavortown.";
    textDiv2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pellentesque semper. Mauris ornare non odio eget commodo. Integer sed magna quam. Aenean vitae urna eu nulla consequat eleifend ac at purus. Sed finibus eleifend lobortis. Quisque ultricies facilisis risus.";
    textDiv3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pellentesque semper. Mauris ornare non odio eget commodo. Integer sed magna quam. Aenean vitae urna eu nulla consequat eleifend ac at purus. Sed finibus eleifend lobortis. Quisque ultricies facilisis risus.";

    setAllAttributes(elementsToSet, attributes, values);
    appendChildrenToParents(parents, children);
    return container;


})();

export {menuPageDiv};
export {aboutPageDiv};

