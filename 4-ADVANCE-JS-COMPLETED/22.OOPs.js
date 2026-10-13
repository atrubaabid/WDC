// CLASSES & OBJECTS


// OBJECT

// 1. Object have key value pairs in it and also method(function)
// let student = {
//     myName: "Atruba",
//     marks: 99,
//     myMethod: function () {
//         console.log(`My marks is ${this.marks}`);

//     }
// }

// console.log(student);  // Object have prototype(object) in it
// console.log(student.myName);
// console.log(student.marks);
// console.log(student.myMethod());


// // 2. Object have special property called PROTOTYPE(its also a object with multiple function). 
// console.log(student.toString); // its type of all methods come from prototype.


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// let arr = ["apple", "mango", "banana"];
// console.log(arr);  // Array also have prototype in it
// arr.push("Orange"); // this push function also come from prototype



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 3. we can set prototype using __proto__

let employee = {
    calTax() {
        console.log("calc tax is 10%");
    },
}

let karan = {
    salery: 50000,
}

let karan2 = {
    salery: 50000,
}


karan.__proto__ = employee;
karan2.__proto__ = employee;






