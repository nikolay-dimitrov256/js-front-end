function solve(array, n) {
    let filteredArray = [];

    for (let i = 0; i < array.length; i+= n) {
        filteredArray.push(array[i])
    }

    return filteredArray;
}

function solveFilter(array, n) {
    let filteredArray = array.filter((item, index) => index % n === 0);

    return filteredArray;
}

console.log(solveFilter(['5', 
'20', 
'31', 
'4', 
'20'], 
2));
console.log(solveFilter(['dsa',
'asd', 
'test', 
'tset'], 
2
));
console.log(solveFilter(['1', 
'2',
'3', 
'4', 
'5'], 
6));