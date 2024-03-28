function solve() {
    // Get elements
    const numberInputElement = document.getElementById('input');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const convertButtonElement = document.querySelector('#container button');
    const resultElement = document.getElementById('result');

    // Insert options to menu
    const firstOptionElement = selectMenuToElement.querySelector('option');
    firstOptionElement.value = 'binary';
    firstOptionElement.textContent = 'Binary';
    const secondOptionElement = document.createElement('option');
    secondOptionElement.value = 'hexadecimal';
    secondOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(secondOptionElement);

    // Map object for converting
    const convertionMapper = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase(),
    }

    // Set event listenet to button
    convertButtonElement.addEventListener('click', (event) => {
        const number = Number(numberInputElement.value);
        const convertTo = selectMenuToElement.value
        const result = convertionMapper[convertTo](number);
        resultElement.value = result;
    })
}