function solve(product, quantity) {
    const price = getSinglePrice(product);
    const totalPrice = calculateTotalPrice(price, quantity);

    console.log(totalPrice.toFixed(2));

    function getSinglePrice(product) {
        switch (product) {
            case 'coffee':
                return 1.5;
            
            case 'water':
                return 1;
            
            case 'coke':
                return 1.4;
            
            case 'snacks':
                return 2;
        }
    }

    function calculateTotalPrice(price, quantity) {
        return price * quantity;
    }
}

solve("water", 5);
solve("coffee", 2);