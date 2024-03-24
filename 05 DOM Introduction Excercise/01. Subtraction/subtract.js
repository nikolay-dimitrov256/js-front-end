function subtract() {
    const firstInputElement = document.getElementById('firstNumber');
    const secondInputElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    const firstNum = Number(firstInputElement.value);
    const secondNum = Number(secondInputElement.value);
    const result = firstNum - secondNum;

    resultElement.textContent = result;
}