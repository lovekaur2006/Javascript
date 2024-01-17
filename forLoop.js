//FOR LOOP

//EXAMPLE 1
let i = 0;

for (i = 0; i < 4; i++) {
    console.log(i);
}


//EXAMPLE 2 : In Arrays
let frnds = ["Lovepreet", "Raman", "Riya"];

for (j = 0; j < frnds.length; j++) {
    console.log("Hi, " + frnds[j]);
}


//EXAMPLE 3 : for each loop
let member = ["Lovepreet", "Raman", "Riya"];

frnds.forEach(function f(mem) {
    console.log("Welcome " + mem);
})


//EXAMPLE 4: for/of loop
let people = ["Lovepreet", "Raman", "Riya"];

for (mem of frnds) {
    console.log("Hello " + mem);
}

