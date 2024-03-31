function create(words) {
   const containerDivElement = document.getElementById('content');

   const sectionElements = words
                              .map(word => {
                                 const divElement = document.createElement('div');
                                 const paragraphElement = document.createElement('p');
                                 paragraphElement.textContent = word;
                                 paragraphElement.style.display = 'none';
                                 divElement.appendChild(paragraphElement);

                                 return divElement;
                              });

   const divElementsFragment = document.createDocumentFragment();

   sectionElements.forEach(element => {
      element.addEventListener('click', e => {
         const paragraphElement = element.querySelector('p');
         paragraphElement.style.display = 'block';
      })

      divElementsFragment.appendChild(element);
   });

   containerDivElement.appendChild(divElementsFragment);
}