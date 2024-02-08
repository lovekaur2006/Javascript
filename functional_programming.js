// Higher order function (HOF)
//A function that receives another function as an argement or that reeturns a new function or both is called higher order function. Only possible because of the first class function.

//Functions returning another function
const greet = function (name) {
    return function (m) {
        console.log(`Hi !! ${name}, ${m}`);
    }
}
const greet_message = greet('Lovepreet');
greet_message("welcome to JavaScript")

//Passing function as an arguement
function greeting(name) {
    return `Hi!! ${name}`;
}
function greeting_message(greet, message, name) {
    console.log(`${greet(name)} ${message}`);
}
greeting_message(greeting, 'Welcome to GitHub', 'Lovepreet');

//call back, set timeout, set interval
const isEven = (n) => {
    return n % 2 == 0;
}
let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}`)
}
//Pass in isEven as the callback function 
printMsg(isEven, 4);

//For each() method
const number = [28, 78, 89, 65, 49];
number.forEach(number => {
    console.log(number);
});

// .map() method

const finalParticipants = ['Ram', 'Sham', 'Riya', 'Natasha'];
const announcement = finalParticipants.map(member => {
    return member + ' joined the contest.';
})
console.log(announcement);
//.reduce() method
const arrayNum = [1, 2, 3, 4];
const sum = arrayNum.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
});
console.log(sum);

//.filter() method
const randomNum = [4, 11, 42, 14, 39];
const filterdArray = randomNum.filter(a => {
    return a > 5;
});
