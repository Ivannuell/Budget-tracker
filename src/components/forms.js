import addElement from './elements.js';
import { saveElement } from './localStorage.js';

function baseForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'baseForm');

    return form;
}

/**
 * 
 * @param {object} contents 
 * @property {HTMLElement} contents.container The container to append the child to.
 * @property {object} contents.info The information of the element from the form.
 * @property {number} contents.value The value of the element from the form
 * @property {string} contents.id The id of the element from the form.
 * 
 */
function sendForm(contents) {
    try {
        const container = contents.container;
        const child = addElement(contents);
        container.appendChild(child);
    } catch (error) {
        console.error('Error: ', error);
    }
}

/**
 * This function will create a form for adding income details.
 * 
 * @returns {HTMLElement} The form for adding income details.
 */
export function expenseForm() {
    const form = baseForm();
    const container = document.getElementById('expenseContainer');

    const expenseInfoInput = document.createElement('input');
    expenseInfoInput.setAttribute('type', 'text');
    expenseInfoInput.setAttribute('placeholder', 'Input info of expense')

    const expenseAmountInput = document.createElement('input');
    expenseAmountInput.setAttribute('type', 'number');
    expenseAmountInput.setAttribute('placeholder', 'Input Ammount of expense')

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';

    form.appendChild(expenseInfoInput);
    form.appendChild(expenseAmountInput);
    form.appendChild(submitButton);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendForm(
            {   container: container, 
                info: expenseInfoInput.value, 
                value: expenseAmountInput.value, 
                id: 'expense'
            })
        console.log('Expense Form Submitted');
        saveElement('expense', expenseInfoInput.value, expenseAmountInput.value);
        const modal = document.querySelector('.modalBG');
        modal.remove();
    });

    return form;
}

export function incomeForm() {
    const form = baseForm();
    const container = document.getElementById('incomeContainer');

    const incomeInfoInput = document.createElement('input');
    incomeInfoInput.setAttribute('type', 'text');
    incomeInfoInput.setAttribute('placeholder', 'Input info of income')

    const incomeAmountInput = document.createElement('input');
    incomeAmountInput.setAttribute('type', 'number');
    incomeAmountInput.setAttribute('placeholder', 'Input Ammount of income')

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';

    form.appendChild(incomeInfoInput);
    form.appendChild(incomeAmountInput);
    form.appendChild(submitButton);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendForm(
            {   container: container, 
                info: incomeInfoInput.value, 
                value: incomeAmountInput.value, 
                id: 'income'
            })
        console.log('Income Form Submitted');
        saveElement('income', incomeInfoInput.value, incomeAmountInput.value)
        const modal = document.querySelector('.modalBG');
        modal.remove();
    });

    return form;
}