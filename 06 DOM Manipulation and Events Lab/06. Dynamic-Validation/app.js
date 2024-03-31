function validate() {
    const inputFieldElement = document.getElementById('email');

    inputFieldElement.addEventListener('change', event => {
        const inputEmail = inputFieldElement.value;
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
        const match = pattern.test(inputEmail);

        if (!match) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    })
}