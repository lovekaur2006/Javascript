//variable
// 1. 
/*function sum(x, y) {
    return (x + y);
}
let a = sum(4, 3);
console.log(a);*/

// 2. 
/*function product(x, y) {
    return (x * y);
}
let b = product(2, 7);
console.log(b);*/

//3.
/*let avg = (maths, eng, hindi, phy, chem) => (maths + eng + hindi + phy + chem) / 5;
console.log(avg(90, 56, 78, 56, 49));*/

// 4.
//Area of circle
/*function areaC(r) {
    return (3.14 * r * r);
}
//Area of square
function areaS(a) {
    return (a * a);
}
//Area of rectangle
function areaR(l, b) {
    return (l * b);
}
//Area of triangle
function areaT(b, h) {
    return ((b * h) / 2);
}
console.log(areaC(3));
console.log(areaS(7));
console.log(areaR(4, 5));
console.log(areaT(6, 8));*/

// 5. 
/*let SI = (P, R, T) => ((P * R * T) / 100);
console.log(SI(1000, 20, 5));*/

//6. 
/*let circ = (r) => (2 * 3.14 * r);
console.log(circ(4));*/

// 7.
/*function add(num1, num2) {
    return (num1 + num2);
}
function sub(num1, num2) {
    return (num1 - num2);
}
function multiply(num1, num2) {
    return (num1 * num2);
}
function division(num1, num2) {
    return (num1 / num2);
}
function modulus(num1, num2) {
    return (num1 % num2);
}
console.log(add(3, 4));
console.log(sub(3, 4));
console.log(multiply(3, 4));
console.log(division(3, 4));
console.log(modulus(3, 4));*/

//8. 
/*function equal(num1, num2) {
    return (num1 == num2);
}
function notEqual(num1, num2) {
    return (num1 != num2);
}
function greater(num1, num2) {
    return (num1 > num2);
}
function less(num1, num2) {
    return (num1 < num2);
}
function greaterEqual(num1, num2) {
    return (num1 >= num2);
}
function lessEqual(num1, num2) {
    return (num1 <= num2);
}
console.log(equal(5, 6));
console.log(notEqual(5, 6));
console.log(greater(5, 6));
console.log(less(5, 6));
console.log(greaterEqual(5, 6));
console.log(lessEqual(5, 6));*/

//if else
//1.
/*function trafficLight(a) {
    if (a = "red") {
        return ("Vehicle must stop");
    }
    else if (a = "yellow") {
        return ("Vehicle must wait");
    }
    else {
        return ("vehicle can go");
    }
}
console.log(trafficLight("red"));*/

//2.
//2 numbers
/*function larger(a, b) {
    if (a > b) {
        return (a + " is larger than " + b);
    }
    else {
        return (b + " is larger than " + a);
    }
}
console.log(larger(3, 4));*/

//4 numbers
function largest(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return (a + " is the largest number");
    }
    else if (b > a && b > c && b > d) {
        return (b + " is the largest number");
    }
    else if (c > b && c > a && c > d) {
        return (c + " is the largest number");
    }
    else {
        return (d + " is the largest number");
    }
}
console.log(largest(2, 3, 4, 5));
