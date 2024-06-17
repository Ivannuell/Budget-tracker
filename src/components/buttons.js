import { createModal, showModal } from "./modal";
import { expenseForm, incomeForm } from "./forms";


export function buttonElement() {
    const button = document.createElement('button');
    button.setAttribute('class', 'button');

    return button;
}

export function expenseButton() {
    const button = buttonElement();
    button.setAttribute('class', 'expenseButton functionButton')
    button.innerText = 'Add Expense';

    button.addEventListener('click', () => {
        const modalWindow = createModal(
            { 
                title: 'Add Expense' 
            }, 
            
            { 
                text: 'Enter the expense information below.',
                form: expenseForm()
            }
        );

        showModal(modalWindow);
    });

    return button;
}

export function incomeButton() {
    const button = buttonElement();
    button.setAttribute('class', 'incomeButton functionButton')
    button.innerText = 'Add Income';

    button.addEventListener('click', () => {
        const modalWindow = createModal(
            { title: 'Add Income' }, 
            { text: 'Enter the Income details below.',
             form: incomeForm() });

        showModal(modalWindow);
    });

    return button;
}

/**
     * @param {function} processFunction Executes this function before exiting the modal. 
     * @returns {HTMLButtonElement} Returns a button element that exits the modal.
 */
export function exitModalButton(processFunction) {
    const button = buttonElement();
    button.setAttribute('class', 'exitModalButton modalButton');
    button.innerText = 'X';

    button.addEventListener('click', () => {
        processFunction();
        const modal = document.querySelector('.modalBG');
        modal.remove();
    });

    return button;
}
