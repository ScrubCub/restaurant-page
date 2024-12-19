import {createElements, setAllAttributes, appendChildrenToParents, createMenuItems} from "./utils.js"
import adoboImg from './adobo.jpeg';
import bicolImg from './bicol.jpeg';
import isawImg from './isaw.jpg';
import haloImg from './halo-halo.jpg';

export let menuPageDiv = (function() {
    let container = document.createElement('div');

    let isawCredits = "Photo by Lainey of SimplyBakings.com";
    let isawDesc = "Isaw are grilled chicken intestines, usually sold on the streets of the Philippines eaten dipped in vinegar with onions and garlic.";
    let isawItem = createMenuItems(isawImg, isawCredits, isawDesc, 'Appetizer')

    let adoboCredits = "Photo by Joy D. Ganaden - Own work, CC BY-SA 4.0";
    let adoboDesc = "Adobo is the Philippines' national dish, which aptly reflects its seemingly simple and unassuming look. This savory dish boasts really tender meat, either from chicken or pork, complemented by potatoes and, optionally, hard-boiled eggs. ";
    let adoboItem = createMenuItems(adoboImg, adoboCredits, adoboDesc, 'Main Course');

    let bicolCredits = 'Photo by © Raymund Macaalay / http://angsarap.net/2011/12/23/bicol-express-chilli-and-pork-in-coconut-gravy-2/, CC BY-SA 3.0';
    let bicolDesc = "Bicol Express is a Filipino pork stew with spicy chillies cooked in coconut milk. This dish is not for the faint of heart as this dish can get extremely spicy. If you're looking for an explosion of flavor and spiciness in your mouth, then this dish is for you.";
    let bicolItem = createMenuItems(bicolImg, bicolCredits, bicolDesc, 'Main Course');

    let haloCredits = "Photo from Graceland.com";
    let haloDesc = "Halo-halo is a popular Filipino cold dessert composed mainly of Ube ice cream, leche flan, grated cheese, milk, and sweet fruits all sitting on top of shaved ice.";
    let haloItem = createMenuItems(haloImg, haloCredits, haloDesc, 'Dessert');

    container.setAttribute('id', 'menu_page');
    appendChildrenToParents([container], [[isawItem, adoboItem, bicolItem, haloItem]]);

    return container;
})();