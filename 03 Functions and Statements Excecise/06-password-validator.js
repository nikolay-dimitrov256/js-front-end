function solve(password) {
    const validations = [
        [pass => pass.length >= 6 && pass.length <= 10, 'Password must be between 6 and 10 characters'],
        [pass => /^[a-zA-z0-9]+$/.test(pass), 'Password must consist only of letters and digits'],
        [pass => pass.split('').filter(ch => Number.isInteger(Number(ch))).length >= 2, 'Password must have at least 2 digits']
    ]

    const validate = function(validations, password) {
        const results = validations.filter(([validation, message]) => !validation(password))
                            .map(([validation, message]) => message);
        return results;
    }

    const printResults = function(results) {
        results.forEach(message => {
            console.log(message);
        });

        if (results.length === 0) {
            console.log('Password is valid');
        }
    }

    const result = validate(validations, password);
    printResults(result);
}

solve('logIn');
console.log('');
solve('MyPass123');
console.log('');
solve('Pa$s$s');