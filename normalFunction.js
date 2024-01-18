//Function Declaration

function myFunction(a, b) {
    return a * b;
}

let x = myFunction(4, 3);
console.log(x)

//Another way of Function Declaration:
const a = function (i, j) { return i + j };

console.log(a(5, 8));

///----------------

function student(name) {
    console.log(name + " is a good student.");
}

let name1 = "Tania";
let name2 = "Surbhi";
let name3 = "Khushi";

student(name1);
student(name2);
student(name3);

//-----------------

function people(txt, wrd) {
    console.log(wrd + " " + txt);
    console.log(txt + " is a good student.")
}
let txt1 = "Surbhi";
let txt2 = "Jyoti";
let txt3 = "Alia";
let txt4 = "Yamini";
let txt5 = "Pooja";

let wrd = "Good night";
people(txt1, wrd);
people(txt2, wrd);
people(txt3, wrd);
people(txt4, wrd);
people(txt5, wrd);

//-----------------------

function sum(a, b, c) {
    let d = a + b + c;
    return d;
}
let returnVal = sum(1, 2, 3);
console.log(returnVal);