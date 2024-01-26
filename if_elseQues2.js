// 5. if cp and sp of an item is input through the keyboard , write a program to determine whether the seller has made profit or incurred loss. Also determine profit or loss he incurred
let cp = prompt("Enter the cost price");
let sp = prompt("Enter the selling price");
if (cp > sp) {
    console.log("The seller has incurred loss of Rs " + cp - sp);
}
else {
    console.log("The seller has made profit of Rs " + sp - cp);
}




//6. Take a positive integer input and tell if it is a three digit number or not 
let positive = prompt("Enter a positive number and check if it is a 3 digit num or not");
if (positive >= 100 && positive <= 999) {
    console.log(positive + "is a 3 sigit number");
}
else {
    console.log(positive + "is not a 3 digit number");
}

// 7. Take a positive integer input ana tell if it is divisible by 5 and 3
let num = prompt("Enter a number");

if (num % 5 == 0 && num % 3 == 0) {
    console.log(num + " is divisible by 5 and 3");
}
else {
    console.log(num + " is not divisible by 5 and 3");
}