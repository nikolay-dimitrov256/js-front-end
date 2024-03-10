function solve(number) {
    const sum = numbers => numbers.reduce((acc, num) => acc + Number(num), 0);
    const findAverage = (sumNums, numbersArray) => sumNums / numbersArray.length;
    const modifyNumber = numbers => {
        while (findAverage(sum(numberAsArray), numberAsArray) <= 5) {
            numberAsArray.push('9')
        }
        
        return Number(numberAsArray.join(''));
    };

    let numberAsArray = number.toString().split('');
    const result = modifyNumber(numberAsArray);

    console.log(result);
}

solve(101);
solve(5835);