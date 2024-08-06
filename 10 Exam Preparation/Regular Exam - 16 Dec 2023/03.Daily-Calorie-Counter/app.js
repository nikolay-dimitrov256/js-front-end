// Get elements
const loadMealsButtonElement = document.getElementById('load-meals');
const mealsDivElement = document.getElementById('list');
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInpuElement = document.getElementById('calories');
const addMealButtonElement = document.getElementById('add-meal');
const editMealButtonElement = document.getElementById('edit-meal');

// Clear meals
clearMeals();

// Add event listener to Load meals button
loadMealsButtonElement.addEventListener('click', loadMeals);

// Add event listener to Add meal button
addMealButtonElement.addEventListener('click', async () => {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInpuElement.value;
    
    await fetch('http://localhost:3030/jsonstore/tasks/', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(
        {food, calories, time,}
    )
})

    loadMeals();

    clearFields();
})

function clearFields() {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInpuElement.value = '';
}

function clearMeals() {
    mealsDivElement.innerHTML = '';
}

function loadMeals() {
    // Deactivate Edit meal button
    editMealButtonElement.setAttribute('disabled', 'disabled');
    
    // Clear meals
    clearMeals();
    
    // Get data
    fetch('http://localhost:3030/jsonstore/tasks/')
    .then(response => response.json())
    .then(meals => {
        for (const meal of Object.values(meals)) {
            // Create elements
            const foodElement = document.createElement('h2');
            foodElement.textContent = meal.food;
            
            const timeElement = document.createElement('h3');
            timeElement.textContent = meal.time;
            
            const caloriesElement = document.createElement('h3');
            caloriesElement.textContent = meal.calories;
            
            const changeButtonElement = document.createElement('button');
            changeButtonElement.textContent = 'Change';
            changeButtonElement.classList.add('change-meal');
            
            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.textContent = 'Delete';
            deleteButtonElement.classList.add('delete-meal');
            
            const buttonsDivElement = document.createElement('div');
            buttonsDivElement.id = 'meal-buttons';
            
            buttonsDivElement.appendChild(changeButtonElement);
            buttonsDivElement.appendChild(deleteButtonElement);
            
            const mealContainerElement = document.createElement('div');
            mealContainerElement.classList.add('meal');
            
            mealContainerElement.appendChild(foodElement);
            mealContainerElement.appendChild(timeElement);
            mealContainerElement.appendChild(caloriesElement);
            mealContainerElement.appendChild(buttonsDivElement);
            
            // Attach meal element to DOM
            mealsDivElement.appendChild(mealContainerElement);
            
            // Add event listener to change button
            changeButtonElement.addEventListener('click', () => {
                // Remove record from DOM
                mealContainerElement.remove();
                
                // Move data to input fields
                foodInputElement.value = meal.food;
                timeInputElement.value = meal.time;
                caloriesInpuElement.value = meal.calories;
                
                // Activate Edit meal button
                editMealButtonElement.removeAttribute('disabled');
                
                // Deactivate Add meal button
                addMealButtonElement.setAttribute('disabled', 'disabled');
                
                // Add event listener to Edit meal button
                editMealButtonElement.addEventListener('click', async () => {
                    // Send PUT request to server
                    data = {
                        food: foodInputElement.value,
                        calories: caloriesInpuElement.value,
                        time: timeInputElement.value,
                        _id: meal._id,
                    };
                    
                    await fetch(`http://localhost:3030/jsonstore/tasks/${meal._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                
                // Reload meals
                loadMeals();
                
                // Deactivate Edit meal button
                editMealButtonElement.setAttribute('disabled', 'disabled');
                
                // Activate Add meal button
                addMealButtonElement.removeAttribute('disabled');
                
                // Clear input fields
                clearFields();
            })
            
            
        })
        
        // Add event listener to Delete button
        deleteButtonElement.addEventListener('click', async () => {
            // Send DELETE request to server
            await fetch(`http://localhost:3030/jsonstore/tasks/${meal._id}`, {
            method: 'DELETE',
            headers: {'content-type': 'application/json'}
        })
        
        // Reload items
        loadMeals();
    })
}
})
}
