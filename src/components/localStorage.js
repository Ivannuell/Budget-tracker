import { expenseElement, incomeElement } from './elements.js';


function addToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}


function removeAllChildren(parentId) {
    let parentElement = document.getElementById(parentId);
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

function generateRandomKey() {
    return 'key' + Math.random().toString(36).substr(2, 9);
}


// export function saveElement(id) {
//     const container = id == 'income' ? document.getElementById('incomeContainer') 
//                                      : document.getElementById('expenseContainer');
//     const elements = container.children;

//     for (let i = 0; i < elements.length; i++) {
//         const info = elements[i].firstElementChild.innerText;
//         const value = elements[i].lastElementChild.innerText;

//         const obj = {info: info, value: value, id: id}
//         const obj_s = JSON.stringify(obj);

//         addToLocalStorage(generateRandomKey(), obj_s)
//     }

//     console.log('Element Saved');
// }

export function saveElement(id, info, value) {
    const obj = { info: info, value: value, id: id }
    const obj_s = JSON.stringify(obj);

    addToLocalStorage(generateRandomKey(), obj_s)
}

export default function loadElement() {
    const expense_container = document.getElementById('expenseContainer')
    const income_container = document.getElementById('incomeContainer')

    for (let i = localStorage.length - 1; i >= 0; i--) {
        const objd = localStorage.getItem(localStorage.key(i))
        const obj = JSON.parse(objd)
        console.log(objd.id);
        switch (obj.id) {
            case 'expense':
                {
                    const element = expenseElement(obj.info, obj.value);
                    expense_container.appendChild(element)
                }
                break;

            case 'income':
                {
                    const element = incomeElement(obj.info, obj.value);
                    income_container.appendChild(element)
                }
                break;

            default:
                break;
        }
    }
}