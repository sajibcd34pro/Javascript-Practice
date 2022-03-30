// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// for(let i = 0; i <numbers.length ; i++){

//     const numbersArray = numbers[i] ;
//     // console.log(numbers[i])

//     sum = sum + numbersArray ;
//     // console.log(i);


// }
// console.log()

function arrayTotal(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;

    }
    return sum;




}
// console.log(arrayTotal([1, 2, 3, 4, 5, 6, 7]))