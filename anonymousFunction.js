//Anonymous function :

let greet = function (platform) {
    console.log("Welcome to ", platform);
};
greet("my GitHub profile.");

//------------------------

(function () {
    console.log("Hi, My name is Lovepreet");
})();

//------------------------

let wish = () => console.log("Good Night!");
wish();

//------------------------
(() => {
    console.log("Hello everyone.");
})();