function solve(word, text) {
    const arrayFromText = text.split(' ');
    let containsWord = false;

    for (let element of arrayFromText) {
        if (element.toLowerCase() === word.toLowerCase()) {
            containsWord = true;
            break;
        }
    }

    console.log(containsWord ? word : `${word} not found!`);
}


function quickSolve(word, text) {
    const pattern = new RegExp(`\\b${word}\\b`, 'gi');
    const containsWord = pattern.test(text);
    
    console.log(containsWord ? word : `${word} not found!`);
}

solve('javascript',
'JavaScript is the best programming language');
solve('python',
'JavaScript is the best programming language');