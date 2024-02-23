function solve(param) {
    let paramType = typeof param

    if (paramType === 'number') {
        let area = Math.PI * param ** 2
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${paramType}.`);
    }
}

solve(5)
solve('name')