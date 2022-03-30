// multistage nested conditional

const myBudget = 20000;
const ideamosPcTable = 14000;
const bookshelf = 5000;
const laptop = 50000;
const newBrand = false;

// if (ideamosPcTable <= myBudget) {
//     console.log('you are eligible to buy your brand new pc table')
// }
// else if (laptop <= myBudget) {
//     console.log('you are rich you can buy new laptop also ');
// }
// else if ( bookshelf <= myBudget) {
//     console.log('you are eligible to buy bookshelf for your home')
// }
// else {
//     console.log('your demands out of your budget');
// }

// if main if statement is true then it will be executed 
if (ideamosPcTable < myBudget) {
    if (newBrand === true) {
        console.log('I will buy this table');
    } else {
        console.log('the price is out of my budget')
    }
}
else {
    console.log('sorry your condition not true');
}