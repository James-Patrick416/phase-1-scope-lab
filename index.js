// Write your solution in this file!

// 1. Declare a global varianle customerName using var
var customerName = 'bob';

//2. Function to uppercase the global customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // modifies the global variable
}

//3. Function that sets a global variable bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob';// implicity creates a global variable (not good practice)
}

//4.Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // changes the value of the global variable
}

//5. Declare a global constant
const leastFavoriteCustomer = 'Alice';

//6. Function to attempt changing the constant (this will cause an error)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Charlie';//Type error: Assignment to constant variable
}