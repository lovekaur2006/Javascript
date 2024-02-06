// Object Methods

//This example uses function defination as the property value.
let student = {
    name: "Lovepreet ",
    course: "BTech",
    section: "G",
    studentDetails: function () {
        return this.name + " " + this.course + " " + this.section + " ";
    }
}
console.log(student.studentDetails());  //output----> Lovepreet  BTech G 

// This example uses storing property values and accessing without brackets.
let student1 = {
    name: "parul",
    course: "BTech",
    section: "T",
    studentDetails: function () {
        return this.name + " " + this.course + " " + this.section + " ";
    }
}
console.log(student1.studentDetails); //output -----> [Function: studentDetails]

//Using function defination as property value and accessing with additional details.
let student2 = {
    name: "Muskan",
    course: "BTech",
    section: "o",
    studentDetails: function () {
        return this.name + " " + this.course + " " + this.section + " ";
    }
};
console.log("Student " + student1.studentDetails());