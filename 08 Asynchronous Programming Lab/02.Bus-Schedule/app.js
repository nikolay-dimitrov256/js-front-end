function solve() {
    let nextStopId = 'depot';
    const infoSpanElement = document.querySelector('span.info');
    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');
    
    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // Display message
            const message = `Next stop ${data.name}`;
            infoSpanElement.textContent = message;
            
            // Disable depart button
            departButtonElement.disabled = true;
            
            // Enable arrive button
            arriveButtonElement.disabled = false;
        })
        .catch(error => {
            // Display error message
            infoSpanElement.textContent = 'Error';
            
            // Disable buttons
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = true;
        });
    }
    
    async function arrive() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;
        
        try {
            // Send request to server
            const response = await fetch(url);
            const data = await response.json();
            
            // Display message
            infoSpanElement.textContent = `Arriving at ${data.name}`;
            
            // Disable arrive button
            arriveButtonElement.disabled = true;
            
            // Enable depart button
            departButtonElement.disabled = false;
            
            // Set next stop
            nextStopId = data.next;
        } catch (error) {
            // Display error message
            infoSpanElement.textContent = 'Error';
            
            // Disable buttons
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = true;
        }
    }
    
    return {
        depart,
        arrive
    };
}

let result = solve();