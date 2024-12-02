// Write your solution in this file!

// Declare customerName globally
var customerName = 'bob';

// Declare bestCustomer globally
var bestCustomer; 


// Function to uppercase the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set the bestCustomer globally
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer value globally
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant globally
const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  // Trying to change the constant will cause an error
  // Uncommenting the line below will result in an error
//   leastFavoriteCustomer = 'Bob' 
}



upperCaseCustomerName();
console.log(customerName); 

setBestCustomer();
console.log(bestCustomer); 

overwriteBestCustomer();
console.log(bestCustomer); 

changeLeastFavoriteCustomer(); 
console.log(leastFavoriteCustomer);
