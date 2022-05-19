function addHexaDecimalNumbers(a, b) {
  return (a + b).toString(16);
}

console.log(addHexaDecimalNumbers(10, 5));

function BinaryAdd(a, b) {
  const add = parseInt(a, 2) + parseInt(b, 2);
  const result = add.toString(2);
  return result;

}
console.log(BinaryAdd(10, 1011));
