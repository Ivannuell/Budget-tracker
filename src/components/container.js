import { expenseElement } from './elements.js';
import { expenseButton, incomeButton } from "./buttons.js";
import baseModal, { showModal } from './modal.js';

export function expenseContainer() {
    const container = document.createElement('div');
    container.setAttribute('id', 'expenseContainer')


    return container;
}

export function incomeContainer() {
    const container = document.createElement('div');
    container.setAttribute('id', 'incomeContainer')


    return container;
}

export function functionContainer(incomeC, expenseC) {
    const container = document.createElement('div');
    container.setAttribute('id', 'functionContainer')

    //
    const addExpense = expenseButton();
    container.appendChild(addExpense);

    const addIncome = incomeButton();
    container.appendChild(addIncome);
    //

    return container;
}