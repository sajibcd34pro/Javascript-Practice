// filter & find in es6(ecmascript 6)
// const numbers = [5, 13, 7, 41, 30, 5, 2, 19];

// const getBigNumber = numbers.filter((number) => number > 23);
// console.log(getBigNumber);

//find method only return first matching element
// filter method will return all matching elements.
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'pink');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);

