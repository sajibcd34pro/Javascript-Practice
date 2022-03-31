// let unique = [];

// let array = [1, 2, 3, 3, 4, 3, 5, 6];

// for (const key of array) {
//     console.log(array.indexOf(key));
//     if (unique.indexOf(key) == -1) {
//         unique.push(key)
//     }
//     // console.log(array);

// }
// console.log(unique);


// let array = [1, 2, 3, 3, 4, 3, 5, 6];


// function removeElementofAnArray(array) {
//     let unique = [];

//     for (const key of array) {
//         if (unique.indexOf(key) === -1) {
//             unique.push(key)
//         }
//     }
//     return unique;
// }


// console.log(removeElementofAnArray(array))

// const array = ['sajib', 'suma', 'monu', 'kona'];

// let FIndOdd = [];

// for (const key of array) {
//     // console.log(key);
//     if (key.length % 2 === 0) {
//         FIndOdd.push(key)
//     }
// }

// console.log(FIndOdd);


// find odd friend using for loop norma

// const letFriend = ['jodu', 'madhuri', 'kodu', 'modu'];
// let findOdd = [];

// for (let i = 0; i < letFriend.length; i++){
//     let flength = letFriend[i].length;
//     flength % 2 !=0 ?
//         findOdd.push(letFriend[i])
//     :findOdd.push('string')
//         ;
// }

// console.log(findOdd);

// string is immutable or unchanged , but you can changed string from an array

// let string = 'hello how are you';
// let newStr = '';
// for (let char of string) {
//     newStr = char + newStr;
// }
// console.log(newStr);

// var array = [-1, -2];
// for (let i = 0; i < array.length; i++) {
//     var largest = array[0];

//     let element = array[i];
//     if (element > largest) {
//         largest = element;
//     }
// }
// console.log(largest);

// for (let i = 0; i <= 50; i++){
//     if (i % 3 === 0) {
//         console.log('foo', i);
//         // continue;
//     }
//     else {
//         console.log(i);

//     }
// }


// const phones = [
//     { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
//     { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
//     { name: 'shaomi m3', price: 12000, camera: 8, storage: 16 },
//     { name: 'oppo a2', price: 17000, camera: 8, storage: 32 },
//     { name: 'nokia n95', price: 8000, camera: 8, storage: 4 },
//     { name: 'htc h81', price: 25000, camera: 8, storage: 16 }
// ];

// let cheapest = phones[0];
// for (const phone of phones) {
//     // compare price only
//     if (phone.price < cheapest.price) {
//         cheapest = phone;
//         // console.log(cheapest);

//     }

//     console.log(cheapest);
// }
// console.log(cheapest);
// console.log(cheapest);



// var longest = [];
// var arr = [
//     'first item',
//     'second item is longer than the third one',
//     'haejrkejrkejrkjerk jekjrkejrke lkjrekrjke',
//     'third longish item',
// ];

// var lgth = 0;

// for (var i = 0; i < arr.length; i++) {
//     let arrLength = arr[i].length
//     if (arrLength > lgth) {
//         var lgth = arrLength;
//         longest = arr[i]
//     }


// }
// console.log(longest);





// var lgth = 0;
// var longest = [];

// for (const key of arr) {
//     if (key.length > lgth) {
//         lgth = key.length;
//         longest = key;
//    }
// }
// console.log(longest);

// return will be execute only one time ; so do not use return statement in loop .

// function onlyPostive(arr) {
//     let keyOfArray = [];
//     for (const key of arr) {
//         if (key <= -1) {
//             continue;
//         }

//         keyOfArray.push(key);

//     }
//     return keyOfArray;
// }
// const arr = [1,-1, 0, -6, 2, 3, 4, -2, 5, -1, -124, 10];

// console.log(onlyPostive(arr));

// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//     sum += i;
//     console.log(i);
// }
// console.log(sum);

function sum(i) {
    // console.log(i);
    if (i === -1) {
        return 1;
    }
//    sum(--i);
    
    return i + sum(--i);
}
// sum(5)

// console.log(sum(5));

const som = sum(5);
console.log(som);

