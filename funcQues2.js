//if else
//3.
function day(a) {
    if (a == "Monday") {
        return ("Today is Monday");
    }
    else if (a == "Tuesday") {
        return ("Today is Tuesday");
    }
    else if (a == "Wednesday") {
        return ("Today is Wednesday");
    }
    else if (a == "Thursday") {
        return ("Today is Thursday");
    }
    else if (a == "Friday") {
        return ("Today is Friday");
    }
    else {
        return ("Weekends");
    }
}
console.log(day("Monday"));

//4.
/*function even_odd(b) {
    if (b % 2 == 0) {
        return (b + " is an even number");
    }
    else {
        return (b + " is an odd number");
    }
}
console.log(even_odd(4));*/

//5.
/*function profitLoss(cp, sp) {
    if (cp < sp) {
        return ("The seller has gained profit of " + (sp - cp));
    }
    else {
        return ("The seller has incurred loss of " + (cp - sp));
    }
}
let cp = prompt("Enter the cost price ");
let sp = prompt("Enter the selling price ");
console.log(profitLoss(cp, sp));*/

//6.
/*function threeDigit(a){
    if(a>100 && a<999){
        return(a +" is a three digit number");
    }
    else{
        return(a + " is not a three digit number");
    }
}
let a=prompt("Enter  a number ");
console.log(threeDigit(a));*/

//7.
/*function division(a){
    if(a%3==0 && a%5==0){
        return(a + " is divisible by 5 and 3");
    }
    else{
        return(a + " is not divisible by 5 and 3");
    }
}
let a = prompt("Enter a number ");
console.log(division(a));*/

//8.
/*function division15(a){
    if(a%3==0 && a%5==0 && a%15 !=0){
        return(a + " is divisible by 5 and 3 but not by 15");
    }
    else{
        return(a + " is not divisible by 5 , 3and 15");
    }
}
let a = prompt("Enter a number ");
console.log(division(a));
*/

//9.
/*function greatest(a,b,c){
    if(a>b && a>c){
        return(a + " is the greatest number");
    }
    else if(b>a && b>c){
        return(b + " is the greatest number");
    }
    else{
        return(c +" is the greatest number");
    }
}
let a =prompt("Enter first number");
let b=prompt("Enter second number");
let c =prompt("Enter third number");
console.log(greatest(a,b,c));*/

//10.
/*function leap(a){
    if(a%4==0){
        return(a + "is a leap year");
    }
    else{
        return( a+ " is not a leap year");
    }
}
let a = prompt("Enter any year");
console.log(leap(a));*/

//loops
//1.
/*function printing(a) {
    for (let i = 0; i < 5; i++) {
        console.log("Alpha Intern");
    }
} printing();*/

//2.
// function num(i) {
//     for (let i = 0; i < 101; i++) {
//         console.log(i);

//     }
// } num();

//3.
// function even(b) {
//     for (let b = 0; b < 100; b++) {
//         if (b % 2 == 0) {
//             console.log(b);
//         }

//     }
// } even();

//4.
function table(c) {
    for (let c = 0; c < 191; c++) {
        if (c % 19 == 0) {
            console.log(c);
        }

    }
} table();

//5.
// function divisible(j) {
    for (let j = 0; j < 100; j++) {
        if (j % 3 == 0) {
            console.log(j);
        }

    }
 divisible();

//6.
function prime(x) {
    if (x < 2) {
        return ("not  prime number.");
    }
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return ("It is not a prime number");
        }
    }
    return ("It is a prime number");
} console.log(prime(5));
