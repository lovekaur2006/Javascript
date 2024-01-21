//Self invoking function
(function () {
    console.log("Hello, I am a self invoking function.");
})();

//------------------------

(function (name) {
    console.log("Hello, " + name);
})("Love");

//-------------------------
var outsideVar = "I am outside the self-invoking function.";
(function () {
    var insideVar = "I am inside the self-invoking function.";
    console.log(outsideVar);
    console.log(insideVar);
})();
console.log(outsideVar);
//console.log(insideVar); //Not accessible (undefined)

//-----------------------------

let result = (function (a, b) {
    return a + b;
})(3, 5);
console.log(result);
