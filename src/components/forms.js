function baseForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'baseForm');

    return form;
}

export function expenseForm() {
    const form = baseForm();

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
        console.log('Expense Form Submitted');
    });

    return form;
}