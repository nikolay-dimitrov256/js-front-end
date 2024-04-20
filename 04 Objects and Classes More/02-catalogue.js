function solve(input) {
    const catalog = {};
    
    input
        .map(line => line.split(' : '))
        .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
        .forEach(product => {
            const [name, price] = product;

            if (!catalog[name[0]]) {
                catalog[name[0]] = [];
            }

            catalog[name[0]].push(product)
        });
    
    for (const letter in catalog) {
        console.log(letter);
        catalog[letter].forEach(product => console.log(`  ${product[0]}: ${product[1]}`));
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    );