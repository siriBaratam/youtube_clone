const numbers = [1,3,4];
// console.log(Array.isArray(numbers));
// // console.log(numbers.map((number)=>{
// //   return number*number;
// // }));
// console.log(numbers);
// console.log(typeof numbers);

// // console.log(numbers.reduce((accu,curr)=>{
// //   return accu += curr;
// // }));
// // const fun = (value)=>{
// // if(value !== undefined)
// // console.log(value);
// // };
// // fun()
const filter = (num) => {
    if(num%2 === 0){
        return num;
    }
    return;
}
const array = [];
const num = filter();
if (num !== undefined){
array.push(num);
}
console.log(num);
console.log(array);
