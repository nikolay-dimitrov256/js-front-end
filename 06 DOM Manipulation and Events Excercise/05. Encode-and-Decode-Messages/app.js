function encodeAndDecodeMessages() {
    // Get elements
    const textareaElements = document.getElementsByTagName('textarea');
    const buttonElements = document.getElementsByTagName('button');
    const firstTextareaElement = textareaElements[0];
    const secondTextareaElement = textareaElements[1];
    const encodeButtonElement = buttonElements[0];
    const decodeButtonElement = buttonElements[1];

    // Add event listener to encode button
    encodeButtonElement.addEventListener('click', e => {
        // Get message from field
        const message = firstTextareaElement.value;

        // Encode message
        const encodedMessage = message
                                    .split('')
                                    .map(ch => String.fromCharCode(ch.charCodeAt(0) + 1))
                                    .join('');

        // Send encoded message
        secondTextareaElement.value = encodedMessage;

        // Clear field
        firstTextareaElement.value = '';
    })

    // Add event listener to decode button
    decodeButtonElement.addEventListener('click', e => {
        // Get message from field
        const encodedMessage = secondTextareaElement.value;

        // Decode message
        const decodedMessage = encodedMessage
                                            .split('')
                                            .map(ch => String.fromCharCode(ch.charCodeAt(0) - 1))
                                            .join('');

        // Output decoded message
        secondTextareaElement.value = decodedMessage;
    })
}