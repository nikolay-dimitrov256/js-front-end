function extractText() {
    const liElements = document.querySelectorAll('#items li');
    const textAreaElement = document.getElementById('result');

    const textRows = [];
    
    for (const liElement of liElements) {
        textRows.push(liElement.textContent);
    }

    textAreaElement.value = textRows.join('\n');
}