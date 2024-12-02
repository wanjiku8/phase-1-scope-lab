// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer in global scope
var bestCustomer;

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = 'Alice';

// Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'Bob';  
  } catch (error) {
    console.log(error);
  }
}

// Example function calls
upperCaseCustomerName(); 
setBestCustomer();       
overwriteBestCustomer();  
changeLeastFavoriteCustomer(); 