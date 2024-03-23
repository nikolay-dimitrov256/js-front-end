function editElement(textElement, string, replacer) {
    let text = textElement.textContent;

    while (text.includes(string)) {
        text = text.replace(string, replacer);
    }
    
    textElement.textContent = text;
}