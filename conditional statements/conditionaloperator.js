// conditional operator
let a = 20;
let b = 20;

if (a > b) {
    console.log(a, ' is greater than b');
}
else if (a < b) {
    console.log(b + ' is greater than a');
}
else {
    console.log('both are same')
}

// if (condition true) {
//     then this code will be executed
// }

//find odd or even numbers use the help of if conditional statement
var n = 4;
// if (n % 2 === 0) {
//     console.log(n +' is a even number');
// } else {
//     console.log('it is a odd number');
// }

// if (n % 2 !== 0) {
//     console.log('it is an odd number');
// }

if (n === 0) {
    console.log('n is 0');
}
else if (n % 2 === 0) {
    console.log(n + ' is an even number')
} else {
    console.log(n + ' is an odd number');
}