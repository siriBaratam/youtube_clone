const OBJECT = { g: 4, name: 6, 7: 3, age: 1, k: 2 };
let newObject = {};
let keys = Object.keys(OBJECT);
let sorted = keys.sort();
console.log(sorted);
for (let key of sorted) {
    newObject[key] = OBJECT[key];
}
console.log(newObject);

// console.log("Hello, World!");
// const obj = { 0: 1, 9: 2, - 1: 3, 7: 2 };
// console.log(obj);
// const fun = function (object) {
//     for (let i in object) {
//         return object;
//     }
// }
// const result = fun(obj);
// console.log(result);
// console.log(obj);

