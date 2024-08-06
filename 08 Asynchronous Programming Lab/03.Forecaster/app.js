function attachEvents() {
    const symbolsMapper = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast':	'☁',
        'Rain':	'☂',
    }
    
    // Get elements
    const locationInputElement = document.getElementById('location');
    const submitButtonElement = document.getElementById('submit');
    const forecastDivElement = document.getElementById('forecast');
    const currentDivElement = document.getElementById('current');
    const upcomingDivElement = document.getElementById('upcoming');
    
    // Create result elements
    const currentResultElement = document.createElement('div');
    currentResultElement.classList.add('forecasts');
    currentDivElement.appendChild(currentResultElement);
    const upcomingResultElement = document.createElement('div');
    upcomingResultElement.classList.add('forecast-info');
    upcomingDivElement.appendChild(upcomingResultElement);
    
    // Add event listener to button
    submitButtonElement.addEventListener('click', (e) => {
        const locationName = locationInputElement.value;
        forecastDivElement.style.display = 'block';
        
        // Send a Get request to server
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(response => response.json())
        .then(locations => {
            // Find location in data
            const location = locations.find(location => location.name === locationName);
            
            // Get info for current conditions
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
            .then(res => res.json())
            .then(data => {
                displayCurrentConditions(data);
            })
            
            // Get 3 day forecast
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`)
            .then(res => res.json())
            .then(data => {
                displayForecast(data);
            })
        })
        .catch(error => {
            forecastDivElement.textContent = 'Error';
        })
    })

    function displayForecast(data) {
        upcomingResultElement.innerHTML = '';
        
        data.forecast
        .forEach(forecast => {
            const upcomingElement = document.createElement('span');
            upcomingElement.classList.add('upcoming');
            
            const symbolElement = document.createElement('span');
            symbolElement.classList.add('symbol');
            symbolElement.textContent = symbolsMapper[forecast.condition];

            const temperaturesElement = document.createElement('span');
            temperaturesElement.classList.add('forecast-data');
            temperaturesElement.textContent = `${forecast.low}°/${forecast.high}°`;

            const conditionElement = document.createElement('span');
            conditionElement.classList.add('forecast-data');
            conditionElement.textContent = forecast.condition;

            upcomingElement.appendChild(symbolElement);
            upcomingElement.appendChild(temperaturesElement);
            upcomingElement.appendChild(conditionElement);

            upcomingResultElement.appendChild(upcomingElement);
        })
    }    
    
    
    function displayCurrentConditions(data) {
        currentResultElement.innerHTML = '';
        
        const symbolElement = document.createElement('span');
        symbolElement.classList.add('condition', 'symbol');
        symbolElement.textContent = symbolsMapper[data.forecast.condition];
        
        const dataElement = document.createElement('span');
        dataElement.classList.add('condition');
        
        const locationElement = document.createElement('span');
        locationElement.classList.add('forecast-data');
        locationElement.textContent = data.name;
        const temperaturesElement = document.createElement('span');
        temperaturesElement.classList.add('forecast-data');
        temperaturesElement.textContent = `${data.forecast.low}°/${data.forecast.high}°`;
        const conditionElement = document.createElement('span');
        conditionElement.classList.add('forecast-data');
        conditionElement.textContent = data.forecast.condition;
        
        dataElement.appendChild(locationElement);
        dataElement.appendChild(temperaturesElement);
        dataElement.appendChild(conditionElement);
        
        currentResultElement.appendChild(symbolElement);
        currentResultElement.appendChild(dataElement);
    }
    
}

attachEvents();