const getFactorial = (factorialValue) => {
    let factorial = 1;
    for (let i = 1; i <= factorialValue; i++) {
        factorial *= i;
    }
    return(`${factorialValue} factorial is ${factorial}`);
}
console.log(getFactorial(5));
