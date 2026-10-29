// OBJECT LITERALS

// let student = {
//     myName: "Atruba",
//     age: 21,
//     passion: "Coding",

//     introduceMYself() {
//         console.log(`${this.myName} ${this.age} ${this.passion}`);

//     }

// }

// console.log(student);
// student.introduceMYself()


// --------------------------------------------------------


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



// --------------------------------------------------------



// let arr = ["apple", "mango", "banana"];
// console.log(arr);  // Array also have prototype in it
// arr.push("Orange"); // this push function also come from prototype



// --------------------------------------------------------



// 3. we can set prototype using __proto__

// let employee = {
//     calTax() {
//         console.log("calc tax is 10%");
//     },
// }


// // 4. if Object & Prototype have same method, Object's method will be used.
// let karan = {
//     salery: 50000,
//     calTax() {
//         console.log("calc tax is 30%");
//     },
// }


// let karan2 = {
//     salery: 50000,
// }


// karan.__proto__ = employee;
// karan2.__proto__ = employee;




// =========================================================================================================================================================


// FACTORY FUNCTION


// function student(name, age, passion) {
//     return {
//         name,
//         age,
//         passion,
//         introduceMYself() {
//             console.log(`${this.name} ${this.age} ${this.passion}`);

//         }


//     }
// }



// let s1 = student("Atruba", 21, "coding");
// let s2 = student("Rida", 20, "coding");
// console.log(s1);
// s1.introduceMYself();
// console.log(s2);
// s2.introduceMYself();




// =========================================================================================================================================================



// CONSTRUCTOR FUNCTION


// function student(name, age, passion) {
//     this.name = name;
//     this.age = age;
//     this.passion = passion;
//     this.introduceMYself = function () {
//         console.log(`${this.name} ${this.age} ${this.passion}`);
//     }
// }


// let s1 = new student("Atruba", 21, "coding")
// console.log(s1);
// s1.introduceMYself();



// ---------------------------------------------------------------



// PUSH FUNCTION INTO PROTOTYPE


// function student(name, age, passion) {

//     this.name = name;
//     this.age = age;
//     this.passion = passion;
//     // this.introduceMYself = function () {
//     //     console.log(`${this.name} ${this.age} ${this.passion}`);
//     // }
// }

// student.prototype.introduceMYself = function () {
//         console.log(`${this.name} ${this.age} ${this.passion}`);
//     }


// let s1 = new student("Atruba", 21, "coding")
// console.log(s1);
// s1.introduceMYself();




// =========================================================================================================================================================



// CLASS SYNTAX

// class student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduceMyself() {
//         console.log(`${this.name} ${this.age}`);

//     }
// }


// let s1 = new student("Atruba", 21);
// console.log(s1);
// s1.introduceMyself()



// =========================================================================================================================================================



// PRACTICE

function BankAccount(AccHolder, balance = 0) {
    this.AccHolder = AccHolder;
    this.balance = balance;

    // this.deposite = function (balance) {
    //     this.balance += balance;
    // }

    // this.withdraw = function (balance) {
    //     this.balance -= balance;
    // }


}


BankAccount.prototype.deposite = function (balance) {
    this.balance += balance;
}


BankAccount.prototype.withdraw = function (balance) {
    this.balance -= balance;
}


let s1 = new BankAccount("Atruba", 500)
s1.deposite(500)
s1.withdraw(1000)



// =========================================================================================================================================================



// BASICS COMPLETED



























