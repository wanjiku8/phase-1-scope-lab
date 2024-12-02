// Declare customerName globally
var customerName = 'bob';

// Function to upper case customerName (modify as needed based on test expectation)
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Convert to uppercase
}

// Declare bestCustomer globally
var bestCustomer;

// Function to set bestCustomer (without returning anything)
function setBestCustomer() {
  bestCustomer = 'not bob'; // Set the global variable
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Change the global variable
}

// Declare leastFavoriteCustomer globally as a constant
const leastFavoriteCustomer = 'Alice';

// Function to attempt to change leastFavoriteCustomer (should throw error)
function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'Bob'; // This will throw an error because it's a const
  } catch (error) {
    console.log(error);  // Handle error
  }
}

// Example function calls
upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();
