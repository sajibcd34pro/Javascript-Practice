//there are many methods has dates

const myDates = new Date();

//setDate() - sets the day of the month . A number between 1 & 31.
//setTime() - sets the number of milliseconds elapsed since january 1 , 1970 .
//setFullYear() - sets The year
// setMonths()- set The month of The year .

//similarly , setMinutes(), setHours(), setSeconds(), are some other methods present int the date object


myDates.setFullYear(2025);
const fullYear = myDates.getFullYear()

console.log(fullYear);
console.log(myDates);

// we should use new keyword to create a object .. we can know current date from Date() object 