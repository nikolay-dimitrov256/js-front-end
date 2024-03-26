function search() {
   // Get elements refferences
   const townsLiElements = document.querySelectorAll('#towns li');
   const searchedTextInputElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');

   // Clear previous results
   resultElement.textContent = '';
   for (const liElement of townsLiElements) {
      liElement.style.fontWeight = 'normal';
      liElement.style.textDecoration = 'none';
   }

   // Get search word and matches
   const searchWord = searchedTextInputElement.value;
   const matches = Array
                        .from(townsLiElements)
                        .filter((liElement) => liElement.textContent.includes(searchWord));

   // Apply results
   for (const liElement of matches) {
      liElement.style.fontWeight = 'bold';
      liElement.style.textDecoration = 'underline';
   }

   resultElement.textContent = `${matches.length} matches found`;
}
