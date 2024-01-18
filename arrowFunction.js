//Arrow function allow us to write shorter function syntax

let myFunction = (a, b) => a * b;
console.log(myFunction(2, 3));

//-----------------------------

hello = () => {
    return "Hello World";
}
console.log(hello());

//-----------------------------
// Arrow function return values by Default:- This works ony if the function has only one statement.

hello = () => "Hello World";
console.log(hello());

//-------------------------------

let greet = "";
greet = (val) => "Hello" + " " + val;
console.log(greet("Lovepreet"));
