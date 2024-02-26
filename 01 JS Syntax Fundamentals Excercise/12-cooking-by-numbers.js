function solve(numberAsString, op1, op2, op3, op4, op5) {
    let number = Number(numberAsString);
    let operations = op1[0] + op2[0] + op3[0] + op4[0] + op5[0]

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'c':
                number /= 2;
                break;
            case 'd':
                number = Math.sqrt(number);
                break;
            case 's':
                number += 1;
                break;
            case 'b':
                number *= 3;
                break;
            case 'f':
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');