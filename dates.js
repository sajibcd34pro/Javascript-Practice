const today = new Date();

console.log(typeof today)

var jusFloat = 10.2;
var floatTwo = 0.1;
var total = jusFloat + floatTwo;
// console.log(parseInt(jusFloat))
// console.log(total);
console.log(total.toFixed(1));

// integer number পূর্ণসংখ্যা
// floating number ভাসমান বা দশমিক সংখ্যা

// remainder or modulus operator ...%
function findOddFriend(array) {
    const oddFriend = [];
    for (let i = 0; i < array.length; i++) {
        if (friends[i].length % 2 !== 0) {
            oddFriend.push(friends[i]);
        }
    }
    return oddFriend;
}
const friends = ["abc", "ab", "abcde", "abce"];

console.log(findOddFriend(friends));