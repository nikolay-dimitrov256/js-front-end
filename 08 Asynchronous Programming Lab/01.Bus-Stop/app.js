function getInfo() {
    // Get elements
    const stopIdInputElement = document.getElementById('stopId');
    const nameDivElement = document.getElementById('stopName');
    const busesUlElement = document.getElementById('buses');

    // Clear data
    busesUlElement.innerHTML = '';

    // Set input data
    const stopId = stopIdInputElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    // Send GET request to server
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => nameDivElement.textContent = 'Error')
    
    function displayData(data) {
        nameDivElement.textContent = data.name;
        const busesFragment = document.createDocumentFragment();

        for (const bus in data.buses) {
            const busLiElement = document.createElement('li');
            busLiElement.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            busesFragment.appendChild(busLiElement);
        }

        busesUlElement.appendChild(busesFragment);
    }
}