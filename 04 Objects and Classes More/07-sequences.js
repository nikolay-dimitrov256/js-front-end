function solve(input) {
    // Convert strings to arrays
    const sortedInput = input
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length); // Sort based on lengts, then based on input order

    
    // Sort each array in descending order
    sortedInput
        .forEach(numArray => {
            numArray.sort((a, b) => b - a);
        })

    // Filter non unique arrays
    for (let i = sortedInput.length - 1; i > 0; i--) {
        const currentArr = sortedInput[i];
        for (let j = i - 1; j >= 0; j--) {
            const nextArr = sortedInput[j];
            if (compareArrays(currentArr, nextArr)) {
                sortedInput.splice(i, 1);
                break;
            }
        }
    }

    // Print each array on new line
    sortedInput.forEach(nums => console.log(`[${nums.join(', ')}]`));

    function compareArrays(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }
}

solve(["[1]",
"[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, -1, 0]",
"[1]",
"[4, -3, 3, -2, 2, -1, 1, 0]",
"[0]"]);
console.log('-------------------');
solve(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]);