function extract(content) {
    const textElement = document.getElementById(content);

    let text = textElement.textContent;
    let matches = text.matchAll(/\(([^\)]+)\)/g);
    let result = [];

    for (const match of matches) {
        result.push(match[1])
    }

    return result.join('; ')
}