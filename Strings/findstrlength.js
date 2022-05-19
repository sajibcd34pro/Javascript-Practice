// var str = 'some string';
// console.log(str.charAt(6));

function findStringLength(str) {
    let findLength = 0;
    for (; ;) {
        if (str.charAt(findLength) === '') {
            break;
        }
        else {
            findLength++;
        }
    }
    return findLength;
}
var str4 = findStringLength('some')
console.log(str4);
