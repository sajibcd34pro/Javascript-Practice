// show an array first to last as a loop result it's called array traversing .

var array = [1, 34, 35, 66, 43];
// access array by their index. example below down
// array[0];
// array[1];
// array[2]
// array last index === array.length-1;
for (let i = 0; i < array.length; i++){
    let arrayElement = array[i];
    // update array value +=2;
    // arrayElement += 2;
    arrayElement = arrayElement + 2;
    // console.log(arrayElement)

}

let array2 = [1, 2, -5, 4, 5];
let sumOfArray = 0;
for (let i = 0; i < array.length; i++){
    sumOfArray = sumOfArray + array2[i];
}
console.log(sumOfArray)


