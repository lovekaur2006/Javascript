//Need for objects in javascript
//---In JavaScript , objects are used to store and manipulate data.
//---They allow you to organise related info together.
//---Objects are like containers that hold properties and methods.
//---You can access ad modify the properties of an object using dot notation or bracket notation.
//---Objects are useful for creating complex data structures and building interactive web applications

//Creating objects in javascript
// 1. 

let o = new Object();
o.fun = 42;
console.log(o);

// 2.

class RailwayStation {
    submit() {
        console.log("Form submitted");
    }
    cancel() {
        console.log("Form cancelled");
    }
}
let love = new RailwayStation()
let muskan = new RailwayStation()
love.submit();
muskan.submit();
muskan.cancel();

//3. 

let school = {
    name: "Delhi public school",
    location: "Delhi",
    established: 1999,
    display: function () {
        console.log(school.name + " which is located in " + school.location + " was established in 1999");
    }
};
school.display();

// 4.

let person = {
    name: "Rahul",
    age: 18,
    city: "New York",
    displayInfo: function () {
        console.log("I am " + person.name + ".\n" + "I am " + person.age + " years old and I live in " + person.city);
    }
};
person.displayInfo();


