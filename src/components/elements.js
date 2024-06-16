export default function addElement(contents) {
    switch (contents.id) {
        case 'expense':
            return expenseElement(contents.info, contents.value);
        case 'income':
            return incomeElement(contents.info, contents.value);
    }
}

function element() {
    const element = document.createElement('div')
    element.setAttribute('class', 'element')

    return element
}



export function expenseElement(info, value) {
    const expense = element();
    const expenseInfo = document.createElement('p');
    expenseInfo.setAttribute('class', 'expenseInfo')
    expenseInfo.innerText = info;

    const expenseValue = document.createElement('p');
    expenseValue.setAttribute('class', 'expenseValue')
    expenseValue.innerText = value;

    expense.appendChild(expenseInfo);
    expense.appendChild(expenseValue);

    return expense;
}

export function incomeElement(info, value) {
    const income = element();
    const incomeInfo = document.createElement('p');
    incomeInfo.setAttribute('class', 'incomeInfo')
    incomeInfo.innerText = info;

    const incomeValue = document.createElement('p');
    incomeValue.setAttribute('class', 'incomeValue')
    incomeValue.innerText = value;

    income.appendChild(incomeInfo);
    income.appendChild(incomeValue);

    return income;
}