const firstNumber = 3;
const secondNumber = 8;
let sum;
let carry = 0;
let set = [];
let result = [];
let finalResult = [];
let firstBinary = firstNumber.toString(2);
let secondBinary = secondNumber.toString(2);
console.log(firstBinary, secondBinary);
let large = firstBinary.length > secondBinary.length ? firstBinary : secondBinary;
let small = firstBinary.length < secondBinary.length ? firstBinary : secondBinary;
// console.log(large);
for (let index = 0; index < (large.length - small.length); index++) {
    set[index] = 0;
}
set.push(...small);
console.log(set);
console.log(large);
let length = large.length - 1;
for (let index = length; index >= 0; index--) {
    sum = carry ^ large[index] ^ set[index];
    carry = ((large[index] & set[index]) | (set[index] & carry) | (large[index] & carry));
    result.push(sum);
}

for (let index = result.length - 1; index >= 0; index--) {
    finalResult.push(result[index]);
}

console.log(finalResult);
