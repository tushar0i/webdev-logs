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