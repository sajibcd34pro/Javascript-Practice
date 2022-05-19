// const numbers = [4, 6, 8, 10];
// const output = [];
// for (const number of numbers) {
//     const result = number * 2;
//     output.push(result);
// }
// console.log(output);

// const doubleIt = number => number * 2;
//or

// const numbers = [4, 6, 8, 10];
// const output2 = [];
// for (const number of numbers) {
//     const result = doubleIt(number);
//     output2.push(result);
// }
// console.log(output2);

const doubleIt = number => number * 2;

const numbers3 = [4, 6, 8, 10];
// const output3 = numbers3.map(number => console.log(doubleIt(number))); 
// const output3 = numbers3.map(number => console.log(doubleIt(number))); 
const output = numbers3.map(doubleIt)
// console.log(output);
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLength = friends.map(friend => friend.length)
// console.log(fLength)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
// const productNames = products.map(product => product.name);
// const productPrices = products.map(product => product.price);
// products.map(product => console.log(product));
// products.forEach(product => console.log(product));
products.forEach((product, key) => console.log(product, key));
products.map((product,key) => console.log(product, key))
// console.log(products);