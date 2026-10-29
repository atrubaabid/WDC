





// CLASSES IN JS

// Class is a program-code template for creating objects
// Those objects will have some state(variables) & some behaviour(functions) inside it.


// CLASS
// class ToyotaCars {

//     constructor(brand, mileage) {
//         console.log("creating");
//         this.brand = brand;
//         this.mileage = mileage;
//     }


//     start() {
//         console.log("start");
//     }


//     stop() {
//         console.log("stop");
//     }


//     // setBrand(brand) {
//     //     this.brand = brand;
//     // }
// }





// OBJ 1
// let fortuner = new ToyotaCars("fortuner", 10);    // constructor
// // fortuner.setBrand("fortuner")
// console.log(fortuner);

// console.log(fortuner.brand);
// console.log(typeof fortuner);





// // OBJ 2
// let lexus = new ToyotaCars();   // constructor
// lexus.setBrand("lexus")
// console.log(lexus);
// console.log(lexus.brand);
// console.log(typeof lexus);



// ==========================================================================================================================================================



// INHERITANCE IN JS

// inheritance is passing down properties & methods from parent class to child class


// class parent {
//     hello() {
//         console.log("hello")
//     }
// }


// class child extends parent { }

// let obj = new child();
// console.log(obj);



// --------------------------------------------------------------


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





// ==========================================================================================================================================================



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


// // let p1 = new person()


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




// // ==========================================================================================================================================================




// // LETS PRACTICE


// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log(this.name);
//         console.log(this.email);

//     }

// }




// class admin extends user {
//     constructor(name, email) {
//         super(name, email);
//     }

//     editData() {
//         console.log("your all data updated");

//     }
// }




// let student1 = new user("Atruba", "abc@gmail.com");
// let student2 = new user("Rida", "abc@gmail.com");

// let admin1 = new admin("teacher", "abc@gmail.com");






// ==========================================================================================================================================================





















