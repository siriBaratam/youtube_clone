
// let outerfun = function () {
//     console.log("Good Bye");
// }
// const newfun = "plain";
// const person = {
//     name: "siri",
//     age: 17,
//     location: "gudem",
//     fav_food: "All",
//     gender: "female",
//     1: "one",
//     maths: {
//         maths: 10,
//         science: 20
//     },
//     greet: (name, roll) => {
//         console.log("hello " + name + roll);
//     },
//     plain: () => "Have a nice day",
//     outer: outerfun
// }

// person.greet("siri");
// person["greet"]("siri", "10");
// console.log(person.plain());
// console.log(person["plain"]());
// // person.outer();
// person["outer"]();
// console.log(person[newfun]());

// // let matrix = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ]
// // console.log(matrix[2][2]);

const person = {
    firstName: "siri",
    lastName: "baratam",
    age: 18,
    graduation: "diploma",
    greet() {
        return `hello ${this.firstName}`;
    }
}
const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);
const updatedPerson = Object.assign(person, { age: 20, village: "gudem" });
console.log(updatedPerson);
console.log(person);
const anotherPerson = Object.create(person);
anotherPerson.firstName = "dinesh";
anotherPerson.lastName = "baratam";
anotherPerson.ag = 10;
console.log(anotherPerson);
console.log(person);
console.log(person.greet());
console.log(anotherPerson.greet());
console.log(anotherPerson.age);
console.log(anotherPerson.hasOwnProperty("age"));
console.log(anotherPerson.toString());
