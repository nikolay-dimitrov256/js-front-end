function solve(available, delivery) {
    let products = {};
    products = fillStore(available, products);
    products = fillStore(delivery, products);

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }

    function fillStore(dataArray, productsObj) {
        for (let i = 0; i < dataArray.length; i += 2) {
            let product = dataArray[i];
            let quantity = Number(dataArray[i+1]);

            if (!productsObj[product]) {
                productsObj[product] = 0;
            }

            productsObj[product] += quantity;
        }

        return productsObj;
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);