// ... 
const numbers = [1, 2, 3, 4, 5];
const max = Math.max(...numbers);
// const numbers2 = numbers;
const numbers2 = ['mu',89,...numbers, 99];
numbers.push(55)
console.log(numbers);
console.log(numbers2);

const numbers3 = [1, 2, 3, 4, 5, 77, 243];
console.log(Math.min(...numbers3));
const y = x => x * x;
const z = y(5); 
console.log(z);

const bigBudget = [10, 20, 30, 40, 50, 60, 70];
const bigBudget2 = [...bigBudget];
console.log(bigBudget2);
const numbers6 = [45, 12, 36, 84];
numbers6.unshift(25);
console.log(numbers6);
// function square (x) {
//     return x * x;
// }