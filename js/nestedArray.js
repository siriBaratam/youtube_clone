
const array1 = [[1,2],3,4,[4,5]];
let array2 = [];
const arrayFunction = function (array) {
    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
         arrayFunction(array[index]);
        } else {
          array2.push(array[index]);
        }
    }
    return array2;
};
console.log(arrayFunction(array1));