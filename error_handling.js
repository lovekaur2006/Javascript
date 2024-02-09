//Error handling 
// try statement lets you test a block of code to check the errors.
// catch statement lets you handle the error if any are present.
// throw statement lets you make your own error.
// finally statement lets you execute code after try and catch

function myFunction() {
    let a = 10;
    try {
        console.log("The value of a is " + a);
    }
    catch (e) {
        console.log("Error: " + e.description);
    }
}
myFunction();

//----------------------------------
try {
    Halert("Welcome to Javascript");
}
catch (err) {
    console.log(err);
}

//-----------------------------------
try {
    throw new Error("sorry.....error");
}
catch (e) {
    console.log(e);
}

//-----------------------------------
try {
    console.log("try");
}
catch (e) {
    console.log("catch");
}
finally {
    console.log("finally");
}