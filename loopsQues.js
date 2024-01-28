//1. Print "Alpha Intern" 5 times using loop
let c = 0;
while (c < 5) {
    console.log("Alpha Intern");
    c++;
}

// 2. Print number from 1 to 100 using loop
for (let a = 1; a <= 100; a++) {
    console.log(a);
}

// 3. Print all even number from between 1 to 100 using loop
let m = 1;
do {
    if (m % 2 == 0) {
        console.log(m);
    }
    m++;
} while (m < 100);

//4. Print the table of 19 using loop
for (let n = 1; n < 191; n++) {
    if (n % 19 == 0) {
        console.log(n);
    }
}

//5. Print all numbers from 1 to 100 that are divisible by 3.
for (let b = 1; b < 100; b++) {
    if (b % 3 == 0) {
        console.log(b);
    }
}

//6. Write a program to check whether a number is prime or not
let x = prompt("Enter a number");
let i;
let prime = true;
console.log("Checking if a number is prime or not");
for (i = 2; i < x; i++) {
    if (x % i == 0) {
        prime = false;
        break;
    }
}
if (prime) {
    console.log(x + " is a prime number");
}
else {
    console.log(x + " is not a prime number");
}