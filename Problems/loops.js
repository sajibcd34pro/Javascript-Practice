// const classmates = ['sumit', 'mamun', 'mafuz', 'alom'];
// let modifyClassmates = [];
// for (let i = 0; i < classmates.length; i++){
//     const classmate = classmates[i];
//     modifyClassmates.push('Mr. '+ classmate)
// }
// console.log(modifyClassmates);

const classmates = ['sumit', 'mamun', 'mafuz', 'alom'];
let modifyClassmates = [];
for (let i = 0; i < classmates.length; i++) {
    const classmate = ('Mr. ' + classmates[i]).toUpperCase();
    console.log(classmate);
}
