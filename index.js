// Declare customerName globally
var customerName = 'bob';


function upperCaseCustomerName() {

  customerName = customerName.toUpperCase();
}

// Call the function
upperCaseCustomerName();

// Declare bestCustomer in global scope
var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

// No return value needed, just modify the global variable
setBestCustomer();

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant globally
const leastFavoriteCustomer = 'Alice';

// Function that attempts to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  // Trying to reassign a const will throw an error
  try {
    leastFavoriteCustomer = 'Bob';  // This will throw an error
  } catch (error) {
    console.log(error); 
  }
}

// Call the function
changeLeastFavoriteCustomer();

// Example function calls
upperCaseCustomerName(); 
setBestCustomer();       
overwriteBestCustomer();  
changeLeastFavoriteCustomer(); 
