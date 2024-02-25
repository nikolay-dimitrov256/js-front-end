// function solve(number) {
//     let sum = 0

//     while (number > 0) {
//         let remainder = number % 10
//         sum += remainder
//         number -= remainder
//         number /= 10
//     }

//     console.log(sum);
// }

function solve(number) {
    let stringNumber = number.toString()
    let sum = 0

    for (let i=0; i < stringNumber.length; i++) {
        sum += Number(stringNumber[i])
    }

    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);