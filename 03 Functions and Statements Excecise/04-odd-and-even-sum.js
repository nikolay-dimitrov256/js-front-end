function solve(number) {
    const numberToArray = num => num.toString().split('');
    const getEvenSum = nums => nums.filter(num => num % 2 === 0)
                                    .map(num => Number(num))
                                    .reduce((acc, num) => acc + num, 0);
    const getOddSum = nums => nums.filter(num => num % 2 !== 0)
                                    .map(num => Number(num))
                                    .reduce((acc, num) => acc + num, 0);

    const digits = numberToArray(number);
    const evenSum = getEvenSum(digits);
    const oddSum = getOddSum(digits);

    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);