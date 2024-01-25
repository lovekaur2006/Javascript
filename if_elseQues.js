// 1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicle must stop.

trafficLight = "red";

if (trafficLight == "red") {
    console.log("Vehicle must stop");
}
else if (trafficLight == "yellow") {
    console.log("Vehicles must wait");
}
else {
    console.log("Vehicles can go");
}

// 2. Write a program to print the largest of 2 numbers. and 4 numbers
//For 2 numbers

let num_1 = 5;
let num_2 = 6;
if (num1 > num2) {
    console.log(num_1 + " is larger");
}
else {
    console.log(num_2 + " is larger ")
}

//4 numbers
let num1 = 3;
let num2 = 4;
let num3 = 5;
let num4 = 6;
if (num1 > num2 && num1 > num3 && num1 >> num4) {
    console.log(num1 + " (num1)is the largest ");
}
else if (num2 > num1 && num2 > num3 && num2 >> num4) {
    console.log(num2 + " (num2) is the largest ");
}
if (num3 > num1 && num3 > num2 && num3 >> num4) {
    console.log(num3 + " (num3) is the largest ");
}
else {
    console.log(num4 + " (num4) is the largest");
}

// 3. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.
let day = "Friday";
if (day == "Monday") {
    console.log("Today is Monday");
}
else if (day == "Tuesday") {
    console.log("Today is Tuesday");
}
else if (day == " Wednesday") {
    console.log("Today is Wednesday");
}
else if (day == "Thursday") {
    console.log("Today is Thursday");
}
else if (day == "Friday") {
    console.log("Today is Friday");
}
else {
    console.log("Its Weekend");
}

// 4.Write a program to print even and odd numbers
let num = 5;
if (num %= 2) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

