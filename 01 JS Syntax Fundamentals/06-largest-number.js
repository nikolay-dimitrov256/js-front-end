function solve(firstNum, secondNum, thirdNum) {
    let largest = -Infinity

    if (firstNum > secondNum && firstNum > thirdNum) {
        largest = firstNum
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        largest = secondNum
    } else {
        largest = thirdNum
    }

    console.log(`The largest number is ${largest}.`);
}

solve(5, -3, 16)
solve(-3, -5, -22.5)