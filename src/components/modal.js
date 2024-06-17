import { exitModalButton } from './buttons.js';

/** 
    * This is the base modal that will be used to create the modal for the application. 
    * 
    * This includes the modal background and the modal container.
    * 
    * @returns {HTMLElement} The base modal element.
 */
export default function baseModal() {
    const modalBG = document.createElement('div');
    modalBG.setAttribute('class', 'modalBG');

    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');

    modalBG.appendChild(modal);

    return modalBG;
}

/**
 * This function will create the header of the modal.
 * 
 * @param {Object} header the header of the modal.
 * @returns {HTMLElement} The header of the modal.
 */
export function createModalHeader(header) {
    const title = document.createElement('div');
    title.setAttribute('class', 'modalHeader');

    const headerText = document.createElement('h2');
    headerText.setAttribute('class', 'modalHeaderText')
    headerText.innerText = header.title;

    title.appendChild(headerText);

    return title;
}

/**
 * This function will create the body of the modal.
 * 
 * @param {object} body The body of the modal.
 * @returns {HTMLElement} The body of the modal.
*/
export function createModalBody(body) {
    const modalBody = document.createElement('div');
    modalBody.setAttribute('class', 'modalBody');

    const bodyText = document.createElement('p');
    bodyText.setAttribute('class', 'modalBodyText');
    bodyText.innerText = body.text;

    const form = body.form;

    modalBody.appendChild(bodyText);
    modalBody.appendChild(form);

    return modalBody;
}


/** 
    * This function will create a modal with the header and body passed as arguments.
    * @param {object} header - The header of the modal.
    * @property {string} header.title - The title of the modal.
    * 
    * @param {object} body - The body of the modal.
    * @property {string} body.text - The text of the modal.
    * @property {HTMLFormElement} body.form - The form of the modal.
*/
export function createModal(header, body){
    const modal = baseModal();
    const modalContainer = modal.querySelector('.modal');

    modalContainer.appendChild(createModalHeader(header));
    modalContainer.appendChild(createModalBody(body));
    modalContainer.appendChild(exitModalButton(() => {
        console.log('Data is sent for processing');
    }))

    return modal;
}

export function showModal(modal) {
    document.body.appendChild(modal);
}

