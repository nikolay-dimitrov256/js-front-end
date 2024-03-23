function sumTable() {
    const numberTableElements = document.querySelectorAll('td:last-of-type:not(#sum)');
    const sumElement = document.getElementById('sum');

    const sum = [...numberTableElements].reduce((sum, element) => sum + Number(element.textContent), 0);

    sumElement.textContent = sum;
}