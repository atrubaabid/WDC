// OBJECT ORIENTED PROGRAMMING  -  in JS


// CLASSES IN JS

// class Cars {
//     constructor(name, color, mileage) {
//         this.name = name;
//         this.color = color;
//         this.mileage = mileage;
//     }

//     start() {
//         console.log(`${this.name} is starting`);

//     }

//     stop() {
//         console.log(`${this.name} is stoping`);

//     }
// }



// let toyota = new Cars("Toyota", "Pearl White", 15);
// let bmw = new Cars("BMW", "Metallic Grey", 10);
// let bugatti = new Cars("Bugatti", "Royal Blue", 5);




// ==========================================================================================================================================================




// 4 PILLARS OF OOPs

// Encapsulation >> Hiding data inside an object and protecting it from direct access.

// Abstraction >> Hiding complexity and showing only the essential features.

// INHERITANCE  >>  inheritance is passing down properties & methods from parent class to child class

// POLYMORPHISM >>  The same function or method behaves differently in different situations.






// ABSTRACTION & ENCAPSULATION------------------------------------------------------------------=============================================================


// class Car {

//     // Encapsulation
//     #fuel = 100;

//     #burnFuel() {
//         this.#fuel -= 1;
//     }

//     // Abstraction
//     start() {
//         this.#burnFuel()
//         console.log(`car is starting ${this.#fuel}`);
//     }
// }


// let c1 = new Car();
// console.log(c1);
// c1.start()
// console.log(c1);
// c1.start()
// console.log(c1);





// PRATICE---------------------------BANK-ACCOUNT-------------------------------



// class BankAcc {
//     #balance;

//     constructor(AccHolder, balance = 0) {
//         this.AccHolder = AccHolder
//         this.#balance = balance
//     }

//     deposite(amount) {
//         if (amount <= 0 || isNaN(amount)) {
//             console.error("Invalid amount");
//             return;
//         }
//         this.#balance += amount
//     }

//     withdraw(amount) {
//         if (amount <= 0 || amount > this.#balance) {
//             console.error("Invalid amount or insufficient balance");
//             return;
//         }
//         this.#balance -= amount
//     }

//     // getBalance() {
//     //     return this.#balance
//     // }

//     // setBalance(balance) {
//     //     if (isNaN(balance)) {
//     //         console.error("invalid amount");
//     //         return
//     //     }
//     //     this.#balance = balance
//     // }

//     get balance() {
//         return this.#balance
//     }

//     set balance(balance) {
//         if (isNaN(Number(balance)) || balance < 0 ||  !Number.isFinite(balance) || typeof balance !== "number"   ) {
//             console.error("invalid amount");
//             return
//         }
//         this.#balance = balance
//     }
// }



// let A1 = new BankAcc("Atruba", 500)
// console.log(A1);
// A1.balance = 99
// console.log(A1.balance);
// A1.deposite(100)
// console.log(A1.balance);







// INHERITANCE------------------------------------------------------------------=============================================================


// class person {

//     constructor() {
//         this.look = "looking Nice"
//     }

//     eat() {
//         console.log("eat");

//     }

//     sleep() {
//         console.log("sleep");

//     }



//     work() {
//         console.log("do nothing");

//     }
// }


// let p1 = new person()



// class Engineer extends person {
//     work() {
//         console.log("solve problems, build something");
//     }
// }



// class Doctor extends person {

//     work() {
//         console.log("treat patients");
//     }
// }



// let iqraEngineer = new Engineer()
// let hafsaDoctor = new Doctor()




// =============================================================




// super KEYWORD

// The super keyword is used to call the constructor of its parent class to access the parent's properties and method




// class person {

//     constructor(name, look) {
//         // console.log("parent constructor start");

//         this.name = name;
//         this.look = look;

//         // console.log("parent constructor exit");

//     }

//     eat() {
//         console.log("eat");
//     }

// }



// class Engineer extends person {

//     constructor(name, look) {
//         // console.log("child constructor start");

//         // super();  // to invoke parent class constructor
//         super(name, look);

//         // console.log("child constructor exit");

//     }

//     work() {
//         super.eat(); // to invoke parent method
//         console.log("solve problems, build something");
//     }
// }


// let objPerson = new person("Rida", "looking OG")
// let objEngineer = new Engineer("Atruba", "Nice Looking")
// console.log(objEngineer);






// POLYMORPHISM------------------------------------------------------------------=============================================================



// class Animal {
//     sound() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     sound() {
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animal {
//     sound() {
//         console.log("Cat meows");
//     }
// }

// let a1 = new Dog();
// let a2 = new Cat();
// let a3 = new Animal();

// a1.sound(); // Dog barks
// a2.sound(); // Cat meows
// a3.sound(); // Animal makes a sound



// Singleton-Pattern------------------------------------------------------------------=============================================================



// class myclass {
//     static obj;

//     constructor(name, age, passion) {
//         this.name = name
//         this.age = age
//         this.passion = passion

//         if (myclass.obj) {
//             return myclass.obj;
//         }

//         myclass.obj = this
//     }
// }


// let obj = new myclass("Atruba", 21, "coding")
// console.log(obj);

// let obj1 = new myclass("Rida", 20, "developer")
// console.log(obj1);

// console.log(obj === obj1);  // true






// COMPLETED




































