import { expenseElement } from './elements.js';

function addToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}


function removeAllChildren(parentId) {
    let parentElement = document.getElementById(parentId);
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

export function saveExpenses() {
    const container = document.getElementById('expenseContainer')
    const elements = container.children;

    for (let i = 0; i < elements.length; i++) {
        const info = elements[i].firstElementChild.innerText;
        const value = elements[i].lastElementChild.innerText;

        const obj = {info: info, value: value, id: 'expense'}
        const obj_s = JSON.stringify(obj);

        addToLocalStorage(crypto.randomUUID.toString, obj_s)
    }
}

export function saveIncome() {
    const container = document.getElementById('incomeContainer')
    const elements = container.children;

    for (let i = 0; i < elements.length; i++) {
        const info = elements[i].firstElementChild.innerText;
        const value = elements[i].lastElementChild.innerText;

        const obj = {info: info, value: value, id: 'expense'}
        const obj_s = JSON.stringify(obj);

        addToLocalStorage(crypto.randomUUID.toString, obj_s)
    }
}

export default function loadElement(){
    const expense_container = document.getElementById('expenseContainer')
    const income_container = document.getElementById('incomeContainer')
    for (let i = localStorage.length - 1; i >= 0; i-- ) {
        const objd = localStorage.getItem(localStorage.key(i))
        switch (objd.id) {
            case 'expense':
                {
                    const divElement = document.createElement('div')
                    divElement.setAttribute('class', 'element')
                    const element = expenseElement(objd.info, objd.value);
                    divElement.appendChild(element)
                    expense_container.appendChild(divElement)
                }
                break;

            case 'income':
                {
                    const divElement = document.createElement('div')
                    divElement.setAttribute('class', 'element')
                    const element = expenseElement(objd.info, objd.value);
                    divElement.appendChild(element)
                    income_container.appendChild(divElement)
                }
                break;
        
            default:
                break;
        }
    }
}