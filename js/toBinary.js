'use strict'
let getbinary = function (number) {
    if (number == 0) {
        return [0];
    }
    while (number > 0) {
        remainder = number % 2;
        num = number / 2;
        number = Math.floor(num);
        result.push(Math.floor(remainder));
    }
    return result;
}

let value = 0;
let remainder;
let num;
let result = [];
let finalResult = getbinary(value);
for (let index = finalResult.length - 1; index >= 0; index--) {
    console.log(finalResult[index]);
}

// let curPower = 0;
// let number = 8;
// let store;
// var result = [];
// let power = 0;
// for (let index = 0; power <= number; index++) {
//     curPower = power;
//     power = 2 ** index;
// }
// // console.log(curPower);
// while (curPower > 0) {
//     if (number >= curPower) {
//         number -= curPower;
//         store = 1;
//     }
//     else {
//         store = 0;
//     }
//     result.push(store);
//     curPower = parseInt(curPower / 2);
//     console.log(curPower);
// }
// console.log(result);
