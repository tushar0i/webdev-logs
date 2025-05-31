// Functions in JS

function myFunction () { 
    console.log('Welcome to the world of JavaScript!');
}
myFunction(); // Here we are calling the function

// first we declare the function the we call them 

// immediately invoked function - not used often
(function anotherFunction(){
    console.log('Hi... from the immediately invoked function!')
})();

// Parameters and Arguments

function myFunction1(pram1,pram2){
    console.log(pram1);
    console.log(pram2);
}

myFunction1('Argument 1',200);

// Scope
// local/function scope are the variables that are declared with in the function
// global scope are the varaibles that are declared outside the function


// Anonymous function
const anotherFunction = function(){
    console.log('something!');
}
anotherFunction();

// Fat arrow function
const arrowFunction = () => {
    console.log('This is an arrow function!');
}
arrowFunction();


// Return value from a function
const myFunction2 = ()=>{
    console.log('something is better than nothing');

}
const result = myFunction2();

console.log(result); // not  returning anything

const returnFunction = () =>{
    console.log('This is function with a return value!');
    return 1;
}

const resultReturn = returnFunction();

console.log(resultReturn);


const exampleValue = 20;

let myFunction3  = () =>{

    if(exampleValue < 25){
        return 'we are returning the function early!';
    }
    return 40;
}

const resultExValue = myFunction3();

console.log(resultExValue);


// Object"methods"

function myFunction4(){
    return 29;

}

const someVariable = myFunction4;
console.log(someVariable());


const myObject = {
    prop1 : 30,
    prop2 : myFunction4 // -> this is called a object method
}

console.log(myObject.prop2());

// Some build in JS function

const myString = 'tusher';

console.log(myString.replace('e','a')); // it didn't change the orignal value

const newName = myString.replace('e','a');

console.log(newName);

console.log(myString.toUpperCase());

// we can stack the methods like a chain

var exampleString = 'hello the world of JS!';
console.log(exampleString.toUpperCase().split(' '));

// https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm we can us thios website to see other method in JS
