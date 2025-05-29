const myBoolean = true;
const myString = 'hello world';
const firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
const myArray = [myBoolean,myString];
const myObject = {

    firstProperty : myArray,
    sumProperty : firstNumber+secondNumber,
}
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);

const variable1 = 10;
const variable2 = '40';

const resultVariable = variable1+variable2;
console.log(resultVariable);
console.log(typeof(resultVariable));

const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20,30,40,50],
}

console.log(objectVariable.property3[2]);