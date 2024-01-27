// 8.Take positive integer input and tell if it is divisible by 5 and 3 but not divisible by 15
let num = prompt("Enter the number ");
if (num % 5 == 0 && num % 3 == 0 && num % 15 != 0) {
    console.log(num + " is divisible by 5 and 3 but not divisible by 15");
}
else {
    console.log(num + " is not divisible by 5 and 3 also not divisible by 15");
}

// 9.Take a positive integer input and tell if it is divisible by 5 and 3
let num1 = prompt("Enter the number ");
if (num1 % 5 == 0 && num1 % 3 == 0) {
    console.log(num + " is divisible by 5 and 3 ");
}
else {
    console.log(num + " is not divisible by 5 and 3 ");
}

// 10. Take 3 positive integers input and print the greatest of them
let num2 = prompt("Enter first number");
let num3 = prompt("Enter second number");
let num4 = prompt("Enter third number");
if (num2 > num3 && num2 > num4) {
    console.log(num2 + " is the greatest");
}
else if (num3 > num2 && num3 > num4) {
    console.log(num3 + " is th greatest");
}
else {
    console.log(num4 + " is the greatest");
}

// 11. Any year is input through the keyboard. Write a program to determine whether the year is a leap year or not.
let year = prompt("Enter any year");
if (year % 4== 0){
    console.log( year + " is a leap year");
}