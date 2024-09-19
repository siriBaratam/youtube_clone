// // 'use strict'

// const greet = [1, 2, 3, 4];
// // console.log(greet);

// // let printGreet = function () {
// //     for (let index = 0; index < greet.length; index++) {
// //         console.log(greet[index]);
// //     }
// // }

// const printGreets = () => {
//     for (let index = 0; index < greet.length; index++) {
//         console.log(greet[index]);
//     }
// }

// // let greets = ['siri'];
// // printGreet();
// printGreets();
// // console.log(greets);
// console.log(greet);
// // let name = "siri";
// // let nam = "sk";
// function print() {
//     console.log(`hello ${nam}`);

// }
// print();

// const students = ['a', 'i'];
// // let clas = students.length;
// for (let index = 0; index < students.length; index++) {
//     let students = ['a', 'b', 'c', 'd'];
//     students[2] = 'z';
//     console.log(students[index]);
//     console.log(students.length);
// }
// console.log(students);
// console.log(students.length);
// for (student in students) {
//     console.log(student);
// }


const first = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const second = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = [[], [], []];
for (i = 0; i < first.length; i++) {
    for (j = 0; j < second.length; j++) {
        result[i][j] = first[i][j] + second[i][j];
        console.log(first[i][j], second[i][j], result[i][j]);
    }
}
console.log(result);
for (index = 0; index < result.length; index++) {
    console.log(result[index][0], result[index][1], result[index][2]);
}