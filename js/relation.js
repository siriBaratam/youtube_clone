/*const relation = {
    naga: ['Santhosh', 'jyothirmai'],
    dhana: ['mohan', 'rafiya'],
    mohan: ['dhana', 'bhargavi'],
    rajini: ['siri', 'sravani', 'triveni']
};
const FRIEND1 = 'dhana';
const FRIEND2 = 'bhargavi';
const check = (friend1, friend2) => {
    if (Array.isArray(relation[friend1])) {
        for (let index = 0; index < relation[friend1].length; index++) {
            if (relation[friend1][index] === friend2) {
                return true;
            } 
        }

    }
    return false;
}
console.log(check(FRIEND1, FRIEND2));*/
const categoriseSorted = function (numbers) {
    let index=0;
    let outerArray=[];
    numbers.sort((a, b) => a - b);
    for (let pass = 0; pass < numbers.length;) {
      const innerArray = [];
      do {
        innerArray.push(numbers[pass]);
        index++;
        isEqual = numbers[pass] === numbers[index];
      } while (index < (numbers.length) && isEqual);
      pass = index;
      outerArray.push(innerArray);
    }
    return outerArray;
  };
const str='name,city\nrajini,hyderabad\ndhana,mumbai\nrajini,he';
const array=str.split('\n');
console.log(array);
let Name=[];
let city=[];
for(let i of array){
    const array1=i.split(',');
    Name.push(array1[0]);
    city.push(array1[1]);
}
Name.sort();
city.sort();
console.log(categoriseSorted(Name),categoriseSorted(city));
