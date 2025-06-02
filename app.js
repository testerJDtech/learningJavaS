// const means that the variable remains constant and cannot be reassigned
// good to use const when I know the value for the variable will not change    
const name = "Nike";

// use console.log to print messages to the console on the browser
// This outputs whatever is passed in through the browser console
console.log(name);
console.log(name + " is a meady brand!");


let totalPrice = 19;
let shippingCost;

// Learning how to create and use functions
function calculateShippingCost() {
    // This is where the code block weill be contained where the function references
    if (totalPrice <= 10) {
        shippingCost = 5;
    // you can write conditional statements in else if statements as well
    } else if (totalPrice <= 20) {
        shippingCost = 3;
    } else {
        shippingCost = 0;
    }
    
    console.log(`The shipping cost for you is $${shippingCost}`);
}

// This is how to call a functiion to start the code block inside the function
calculateShippingCost(); 

// whatever is inside the if statement is called the condiition. It is either goign to be met or not met
if (totalPrice > 20) {s
    shippingCost = 0;
} else {
    shippingCost = 5;
}

if (totalPrice <= 20) {
    shippingCost = 5;
// You can't write conditional statements in else statements
} else {
    shippingCost = 0;
}



let userMembership = "gold";

if (userMembership !== "gold") {
    // show user non-premium content
    // recommend premium membership
} else {
    // show premium content
    console.log("Welcome to the premium content section!");
}



// Learning how to use logical operators
let todayDate;
let birthdayDate;
let birthdayDisplayed;

// And logical operator is expressed as &&
// Both conditions have to be true for the code inside the if statement to run
if (todayDate === birthdayDate && birthdayDisplayed === true) {
    console.log("Happy Birthday!");
} else {
    // Do not display birthday message
}

// Or logical operator is expressed as ||
// If either of the conditions is true, the code inside the if statement will run
if (todayDate === birthdayDate || birthdayDisplayed === true) {
    console.log("Happy Birthday!");
}

// Not or negation logical operator is expressed as !
// If the condition is false, the code inside the if statement will run
if (!(todayDate === birthdayDate)) {
    console.log("Today is not your birthday!");
}