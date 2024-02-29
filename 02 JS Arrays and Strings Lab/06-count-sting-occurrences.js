// function solve(text, word) {
//     let arrayFromText = text.split(' ')
//     let occurrences = 0;

//     for (let currentWord of arrayFromText) {
//         if (currentWord == word) {
//             occurrences += 1;
//         }
//     }

//     console.log(occurrences);
// }

function solve(text, word) {
    let pattern = new RegExp(`\\b${word}\\b`, 'g');
    let matches = text.match(pattern);
    console.log(matches ? matches.length : 0);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');