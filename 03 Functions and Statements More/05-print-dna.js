function solve(n) {
    for (let i = 0; i < n; i++) {
        let [firstLetter, secontLetter] = getLetters(i);
        
        let row = createRow(i, firstLetter, secontLetter);

        console.log(row);
    }

    function getLetters(i) {
        const sequence = 'ATCGTTAGGG';
        let index = (i * 2) % sequence.length;
        const letters =  sequence.slice(index, index + 2);
        return [letters[0], letters[1]];
    }

    function createRow(i, firstLetter, secontLetter) {
        const rowLength = 6;
        let dashesCount =  getDashesCount(i);
        let starsCount = rowLength - (dashesCount + 2);
        let row = `${'*'.repeat(starsCount / 2)}${firstLetter}${'-'.repeat(dashesCount)}${secontLetter}${'*'.repeat(starsCount / 2)}`;

        return row;
    }

    function getDashesCount(i) {
        i++;

        if (i % 4 === 0) {
            return 2;
        } else if (i % 4 == 3) {
            return 4;
        } else if (i % 4 == 2) {
            return 2;
        } else if (i % 4 == 1) {
            return 0;
        }
    }
}

solve(10);