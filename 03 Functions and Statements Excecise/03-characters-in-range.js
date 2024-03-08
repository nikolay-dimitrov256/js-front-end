function solve(firstChar, secondChar) {
    const [start, end] = getCharactersRange(firstChar, secondChar);
    printChars(start, end);

    function printChars(start, end) {
        let characters = [];

        for (let i = start + 1; i < end; i++) {
            const char = String.fromCharCode(i);
            characters.push(char);
        }

        console.log(characters.join(' '));
    }

    function getCharactersRange(firstChar, secondChar) {
        const firstCharCode = firstChar.charCodeAt(0);
        const secondCharCode = secondChar.charCodeAt(0);
        
        const start = firstCharCode < secondCharCode ? firstCharCode : secondCharCode;
        const end = start == firstCharCode ? secondCharCode : firstCharCode;

        return [start, end];
    }
}

solve('a', 'd');
solve('#',
':');
solve('C',
'#');