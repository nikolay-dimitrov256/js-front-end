function solve(data) {
    const person = JSON.parse(data);

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
console.log('');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');