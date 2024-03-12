function solve(firstName, lastName, hairColor) {
    const person = {
        name: firstName,
        lastName,
        hairColor
    }

    const personJson = JSON.stringify(person);

    console.log(personJson);
}

solve('George', 'Jones', 'Brown');
console.log('');
solve('Peter', 'Smith', 'Blond');