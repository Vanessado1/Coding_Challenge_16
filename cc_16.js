// Task 2
// Created fetchProductThen function
function fetchProductsThen(){
    fetch('https://www.course-api.com/javascript-store-products') // getting product data from this api
    .then(response =>{
        if (!response.ok) {
            throw new Error('Network response was not ok'); // console error message 
        }
        return response.json();
    })
    .then(data => {
        data.forEach(product => {
            console.log(product.fields.name); // logs the product name 
        });
    })
    .catch(error => {
        console.error('There is a problem with the fetch operation:',error); // console error message 
    });
}
// Task 3 
// created fetchProductsAsync function 
async function fetchProductsAsync() {
    try {
        const response = await 
        fetch('https://www.course-api.com/javascript-store-products');
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json();
        displayProducts(data);
    }   catch (error) {
        handleError(error);
    }
}
// helper function that displays products 
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // clears existing content 
    for (let i = 0; i < 5; i++) { // loops the first 5 products 
    products.forEach(product => {
        // create div element for product 
        const productElement = document.createElement('div');
        productElement.className = 'product';
        // create h2 element for product name 
        const productName = document.createElement('h2');
        productName.textContent = product.fields.name;
        // create p element for price 
        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.fields.price}`;
        // create img element 
        const productImage = document.createElement('img');
        productImage.src = product.fields.image[0].url;
        productImage.alt = product.fields.name;
        
        productElement.appendChild(productName); // append name 
        productElement.appendChild(productPrice); // append price 
        productElement.appendChild(productImage); // append image
        //append product div to container 
        productContainer.appendChild(productElement);
    });
}
// error handler function 
// logs error to console 
function handleError(error) {
    console.error('There was a problem with the fetch operation:', error);
    }
}
