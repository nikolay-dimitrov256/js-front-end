function attachEventsListeners() {
    const timesMapper = {
        days(days) {
            return {days, hours: days * 24, minutes: days * 24 * 60, seconds: days * 24 * 60 * 60}
        },
        hours(hours) {
            return {days: hours / 24, hours, minutes: hours * 60, seconds: hours * 60 * 60}
        },
        minutes(minutes) {
            return {days: minutes / 60 / 24, hours: minutes / 60, minutes, seconds: minutes * 60}
        },
        seconds(seconds) {
            return {days: seconds / 60 / 60 / 24, hours: seconds / 60 / 60, minutes: seconds / 60, seconds}
        },
    }

    // Get elements
    const inputElements = document.querySelectorAll('input[type=text]');
    const buttonElements = document.querySelectorAll('input[type=button]');

    // Set event listeners to buttons
    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', e => {
            const inputElement = buttonElement.parentElement.querySelector('input[type=text]')
            const times = timesMapper[inputElement.id](Number(inputElement.value))
            
            for (const inputElement of inputElements) {
                inputElement.value = times[inputElement.id];
            }
        })
    }
}