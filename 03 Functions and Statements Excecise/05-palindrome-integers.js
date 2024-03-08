function solve(numbers) {
    const reverseNum = num => num.toString()
                                            .split('')
                                            .reverse()
                                            .join('');
    const checkPalindrome = function(number) {
        const reversedNum = reverseNum(number);
        
        return reversedNum == number;
    }

    const printResults = function (numbers) {
        numbers.forEach(element => console.log(checkPalindrome(element)));
    }

    printResults(numbers);
}

solve([123,323,421,121]);
console.log('-----');
solve([32,2,232,1010]);