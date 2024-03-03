function solve(daysMining) {
    let money = 0;
    let firstDayOfPurchase;
    let totalBitcoins = 0;
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;

    daysMining.forEach((item, index) => {
        let day = index + 1
        let dailyRevenue = item * goldPricePerGram;

        if ((day) % 3 == 0) {
            dailyRevenue *= 0.7;
        }

        money += dailyRevenue;

        if (money >= bitcoinPrice) {
            let bitcoinsBought = Math.floor(money / bitcoinPrice);
            totalBitcoins += bitcoinsBought;
            money -= bitcoinsBought * bitcoinPrice;

            if (!firstDayOfPurchase) {
                firstDayOfPurchase = day;
            }
        }
    })

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (firstDayOfPurchase) {
        console.log(`Day of the first purchased bitcoin: ${firstDayOfPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([100, 200, 300]);