function solve(number) {
    let stringNumber = number.toString()
    let sum = Number(stringNumber[0])
    let sameDigits = true

    for (let i = 1; i < stringNumber.length; i++) {
        sum += Number(stringNumber[i])

        if (stringNumber[i] != stringNumber[0]) {
            sameDigits = false
        }
    }

    console.log(sameDigits);
    console.log(sum);
}

solve(2222222);
solve(1234);
