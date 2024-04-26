let numOne = 5;
let numTwo = 10;
let numThree = 15;

function sum(numOne, numTwo, numThree) {
    return numOne + numTwo + numThree;
}
console.log(`Sum of Three Numbers: ${sum(numOne, numTwo, numThree)}`);

function difference(numOne, numTwo) {
    return numOne - numTwo;
}
console.log(`Difference of Two Numbers: ${difference(numOne, numTwo)}`);

function product(numOne, numTwo) {
    return numOne * numTwo;
}
console.log(`Product of Two Numbers: ${product(numOne, numTwo)}`);

function average(numOne, numTwo) {
    return (numOne + numTwo) / 2;
}
console.log(`Average of Two Numbers: ${average(numOne, numTwo)}`);
