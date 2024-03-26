function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      // Get elemets
      const trElements = document.querySelectorAll('tbody tr');
      const inputFieldElement = document.getElementById('searchField');

      // Get searched word
      const searchedWord = inputFieldElement.value;

      // Find and mark matches
      for (const rowElement of trElements) {
         rowElement.className = '';
         let isSelected = false;

         const tdElements = rowElement.querySelectorAll('td');

         for (const cellElement of tdElements) {
            if (cellElement.textContent.toLowerCase().includes(searchedWord.toLowerCase())) {
               // rowElement.classList.add('select');
               // rowElement.className = 'select';
               isSelected = true;
            }
         }

         if (isSelected) {
            rowElement.className = 'select';
         }
      }

      // Clear previous data
      inputFieldElement.value = '';
   }
}