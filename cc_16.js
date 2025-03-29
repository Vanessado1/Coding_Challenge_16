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
