function solve(string, startIndex, count) {
    // let subString = string.slice(startIndex, startIndex+count);   // works as well
    let subString = string.substring(startIndex, startIndex+count);

    console.log(subString);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);