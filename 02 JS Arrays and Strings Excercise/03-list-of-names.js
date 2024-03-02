function solve(names) {
    names.sort((a, b) => a.localeCompare(b))

    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

function quickSolve(names) {
    names
        .sort((a, b) => a.localeCompare(b))
        .forEach((name, index) => console.log(`${index + 1}.${name}`))
}

solve(["John", "Bob", "Christina", "Ema"]);