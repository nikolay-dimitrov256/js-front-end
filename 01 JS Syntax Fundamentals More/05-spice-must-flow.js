function solve(dailyYield) {
    let gatheredSpice = 0;
    let days = 0;
    const workerConsuption = 26;

    while (dailyYield >= 100) {
        gatheredSpice += dailyYield - workerConsuption;
        days += 1;
        dailyYield -= 10;
    }

    gatheredSpice -= workerConsuption;
    if (gatheredSpice < 0) {
        gatheredSpice = 0;
    }

    console.log(days);
    console.log(gatheredSpice);
}

solve(111);
solve(450);