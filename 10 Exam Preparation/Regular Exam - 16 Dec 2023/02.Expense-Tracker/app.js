window.addEventListener("load", solve);

function solve() {
    // Get elements
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const addButtonElement = document.getElementById('add-btn');
    const previewUlElement = document.getElementById('preview-list');
    const resultUlElement = document.getElementById('expenses-list');
    const deleteButtonElement = document.querySelector('button.delete');

    // Add event listener to add button
    addButtonElement.addEventListener('click', () => {
        // Get data from inputs
        const expenseType = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        // Check for empty fields
        if (!expenseType || !amount || !date) {
            return;
        }

        // Create li element in preview ul
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expenseType}`;

        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`;

        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'edit';

        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'ok';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(okButtonElement);

        const previewLiElement = document.createElement('li');
        previewLiElement.classList.add('expense-item');
        previewLiElement.appendChild(articleElement);
        previewLiElement.appendChild(buttonsDivElement);

        // Attach li element to DOM
        previewUlElement.appendChild(previewLiElement);

        // Clear input fields
        clearFields();

        // Disable add button
        addButtonElement.setAttribute('disabled', 'disabled');

        // Add event listeners to buttons
        editButtonElement.addEventListener('click', () => {
            // Move data to input fields
            expenseInputElement.value = expenseType;
            amountInputElement.value = amount;
            dateInputElement.value = date;

            // Clear preview section
            previewLiElement.remove();

            // Enable add button
            addButtonElement.removeAttribute('disabled');
        })

        okButtonElement.addEventListener('click', () => {
            // Move li element to result section
            resultUlElement.appendChild(previewLiElement)

            // Remove buttons from li
            buttonsDivElement.remove();

            // Enable add button
            addButtonElement.removeAttribute('disabled');
        })
    })

    // Add event listener to delete button
    deleteButtonElement.addEventListener('click', () => {
        resultUlElement.innerHTML = '';
        clearFields();
    })

    function clearFields() {
        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';
    }
}