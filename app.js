// const means that the variable remains constant and cannot be reassigned
// good to use const when I know the value for the variable will not change    
const name = "Nike";

// use console.log to print messages to the console on the browser
// This outputs whatever is passed in through the browser console
console.log(name);
console.log(name + " is a meady brand!");


// Learning how to use condiitonal statements // if else statements
let totalPrice = 19;
let shippingCost;

// whatever is inside the if statement is called the condiition. It is either goign to be met or not met
if (totalPrice > 20) {
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

if (totalPrice <= 10) {
    shippingCost = 5;
// you can write conditional statements in else if statements as well
} else if (totalPrice <= 20) {
    shippingCost = 3;
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