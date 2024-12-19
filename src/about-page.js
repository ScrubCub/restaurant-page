import {createElements, setAllAttributes, appendChildrenToParents} from "./utils.js"

export let aboutPageDiv = (function() {
    let [
        container,
        aboutUsDiv,
        contactUsDiv,
        aboutUsTitle,
        aboutUsText,
        emailText,
        phoneText,
        locationText
        
    ] = createElements(['div', 'div', 'div', 'p', 'p', 'p', 'p', 'p']);

    let parents = [aboutUsDiv, contactUsDiv, container];
    let children = [[aboutUsTitle, aboutUsText], [locationText, phoneText, emailText],[aboutUsDiv, contactUsDiv]];
    container.setAttribute('id', 'about_page');
    contactUsDiv.setAttribute('id', 'contacts');

    aboutUsTitle.textContent = 'About Us'
    aboutUsText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam accumsan libero at viverra. Sed id odio ac est ullamcorper luctus. Sed nec blandit purus. Nulla vestibulum id enim a pharetra. Sed pretium quam mi, scelerisque mollis nisi dictum id. Donec nec sem velit. Morbi euismod malesuada mi quis ornare.";
    locationText.textContent = "See us at 123 St., This Avenue, That City, Imagination Land";
    emailText.textContent = 'Send us an email @exampleemail@example.com';
    phoneText.textContent = 'Make your reservations by calling us at (01)123-5813-2134';
   
    container.setAttribute('id', 'about_page');
    appendChildrenToParents(parents, children);

    return container;
})();