function lockedProfile() {
    const containerElement = document.querySelector('#main');

    containerElement.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const profileDivElement = e.target.parentElement;
            const unlockRadioElement = profileDivElement.querySelector('input[type=radio][value=unlock]');
            const buttonElement = e.target;
            
            if (!unlockRadioElement.checked) {
                return;
            }

            const hiddenDivElement = profileDivElement.querySelector('[id$=HiddenFields]');
            
            if (buttonElement.textContent === 'Show more') {
                hiddenDivElement.style.display = 'block';
                buttonElement.textContent = 'Hide it';
            } else {
                hiddenDivElement.style.display = 'none';
                buttonElement.textContent = 'Show more';
            }
        }
    })
}