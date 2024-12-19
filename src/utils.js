export function createElements(types) {
    let elements = [];
    types.forEach((type) => {
        elements.push(document.createElement(type));
    })
    return elements;
}

export function setAllAttributes(elements, attributes, values) {
    
    elements.forEach((element) => {
        let currentIndex = elements.indexOf(element)
        element.setAttribute(attributes[currentIndex], values[currentIndex]);
    })

}

export function appendChildrenToParents(parents, children) {
    
    parents.forEach((parent) => {
        let currentIndex = parents.indexOf(parent);

        children[currentIndex].forEach((child) => {
            parent.appendChild(child);
        })
    })
}

export function resetPage() {
    let child = document.querySelector('body > :last-child');
    child.remove();
}

export function createMenuItems(imageVar, credits, menuDescription, meal) {
    let [
        menuItem,
        image,
        menuDesc,
        mealOrder
    ] = createElements([
        'div', 'img', 'p', 'p'
    ]);
    image.setAttribute('src', imageVar);
    image.setAttribute('title', credits.toString());
    menuItem.setAttribute('class', 'menuitems');
    mealOrder.textContent = meal;
    menuDesc.textContent = menuDescription;

    menuItem.appendChild(mealOrder);
    menuItem.appendChild(image);
    menuItem.appendChild(menuDesc);

    return menuItem;

}