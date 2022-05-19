//string.concat(element)
//string.substr(length)
var a = 'I am';
var b = 'Md. Sajib.';
var c = a.concat(' ', b);
// console.log(c);
// console.log(c.substr(10));

// to which latter in which position of string use string.charAt() method
const findCharPosition = c.charAt(6);
// console.log(findCharPosition);
//string index start from 0. strings length starts from 1.

// know string start with which letter or characters .
console.log(c.startsWith('I'));
console.log(c.endsWith('Sajib.'));

//string/stringVariable.toUpperCase() ,
//string/stringVariable.toLowerCase() ,
// console.log('  fsffdsfs    '.trim())

//str.split() method broke your word & convert into array .
// give space on split(' ') convert your characters into word in an array
console.log(c.split(' '));
