// Declare customerName globally
var customerName = 'bob';

// Function to upper case customerName (adjusting for test expectation)
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();  // This should now return 'BOB'
}

// Declare bestCustomer globally
var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';  // Set the global variable, no return value needed
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';  // Change the global variable
}

// Declare leastFavoriteCustomer globally as a constant
const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'Bob';  // This will throw an error because it's a const
  } catch (error) {
    console.log(error);  // Ensure an error is thrown
  }
}

// Test runs:
upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();
