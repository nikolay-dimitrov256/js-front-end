function solve(input) {
    let words = input
                    .toLowerCase()
                    .split(' ')
                    .reduce((accumulator, word) => {
                        !accumulator[word] ? accumulator[word] = 1 : accumulator[word] += 1
                        return accumulator;
                    }, {});
    let filteredWords = Object.entries(words)
                        .filter(([word, occurrences]) => occurrences % 2 !== 0)
                        .map(([word, occurrences]) => word)
                        .join(' ')
    
    console.log(filteredWords);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');