function focused() {
    // Using event delegation
    const containerDivElement = document.querySelector('body > div');

    containerDivElement.addEventListener('focus', event => {
        if (event.target.tagName === 'INPUT') {
            event.target.parentNode.classList.add('focused');
        }
    },
    true)

    containerDivElement.addEventListener('blur', event => {
        if (event.target.tagName === 'INPUT') {
            event.target.parentNode.classList.remove('focused');
        }
    },
    true)
}


function regularFocused() {
    const inputElements = document.getElementsByTagName('input');

    for (const inputElement of inputElements) {
        inputElement.addEventListener('focus', event => {
            event.target.parentNode.classList.add('focused');
        });

        inputElement.addEventListener('blur', event => {
            event.target.parentNode.classList.remove('focused');
        })
    }
}