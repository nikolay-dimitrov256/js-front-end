function calc() {
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const sumElenent = document.getElementById('sum')

    const firstNum = Number(firstInputElement.value);
    const secondNum = Number(secondInputElement.value);
    const sum = firstNum + secondNum;

    sumElenent.value = sum;
}
