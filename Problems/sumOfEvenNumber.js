// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     console.log('index', i + ' + ' + sum + ' sum is ' + (sum + i));
//     sum = sum + i;
// }

//even number sum 1-100;
// let sumOfEvenNumber = 0;

// for (let index = 0; index <= 10; index++) {
//     if (index > 0) {
//         if (index % 2 === 0) {
//             // console.log(sumOfEvenNumber);
           
//             console.log(index + ' + ' + sumOfEvenNumber + ' sum ' + (sumOfEvenNumber += index));
//             // sumOfEvenNumber += index;
//             // console.log(sumOfEvenNumber);
//         }
//     }
// }

let sumOfEvenNumber = 0;

for (let index = 0; index <= 100; index++) {
    if (index > 0) {
        if (index % 2 === 0) {
          
          sumOfEvenNumber += index;
            // console.log(index + ' + ' + sumOfEvenNumber + ' sum ' + (sumOfEvenNumber += index));
           
        }
    }
}
console.log(sumOfEvenNumber)