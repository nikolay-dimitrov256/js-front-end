function solve(input) {
    let searchedWords = input
                            .shift()
                            .toLowerCase()
                            .split(' ')
                            .reduce((words, word) => {
                                words[word] = 0;
                                return words;
                            }, {});
    
    for (const word of input) {
        if (typeof searchedWords[word] === 'number') {
            searchedWords[word] += 1;
        }
    }

    searchedWords = Object.entries(searchedWords).sort((a, b) => b[1] - a[1]);

    for (const item of searchedWords) {
        console.log(`${item[0]} - ${item[1]}`);
    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);