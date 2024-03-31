function solve() {
   const shoppingCart = [];

   // Get all product div elements
   const productDivElements = document.querySelectorAll('.product');
   const textAreaElement = document.querySelector('textarea');
   const checkoutButtonElement = document.querySelector('button.checkout');
   const addButtonElements = document.querySelectorAll('button.add-product');



   for (const productDivElement of productDivElements) {
      // Get children elements
      const productNameElement = productDivElement.querySelector('.product-title');
      const priceElement = productDivElement.querySelector('.product-line-price');
      const addButtonElement = productDivElement.querySelector('.add-product');

      // Get product data
      const productName = productNameElement.textContent;
      const price = Number(priceElement.textContent);

      // Set event listener to button
      addButtonElement.addEventListener('click', () => {
         // Write data in shoppting cart
         shoppingCart.push({productName, price})
   
         // Output to user in text area
         const message = `Added ${productName} for ${price.toFixed(2)} to the cart.\n`
         textAreaElement.value += message
      });
   }

   // Set event listener to checkout button
   checkoutButtonElement.addEventListener('click', event => {
      // Set product list
      const productsList = Array
                              .from(
                                 new Set(
                                    shoppingCart
                                    .map(product => product.productName)))
                              .join(', ');

      // Calculate total price
      const totalPrice = shoppingCart.reduce((acc, product) => acc + product.price, 0);

      // Output message to user
      const message = `You bought ${productsList} for ${totalPrice.toFixed(2)}.`;
      textAreaElement.value += message;

      // Disable add buttons for products
      Array.from(addButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'));

      // Disable checkout button
      checkoutButtonElement.setAttribute('disabled', 'disabled');
   })
}