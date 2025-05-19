// In JavaScript, we don’t need to specify the type of a variable when declaring it.

// It means js is a dynamically typed language

/* we can declar a variable in three ways 
 1. var  -> We can re-decleare a var. We don't genreally use them.
 2. const -> We can't re-assign the variable.Constant value.
 3. let -> We can re-assign the variable. 
*/

const TAX_RATE = 0.05;
var operation = 10;
var operation = 20;
let counter = 0;
counter++;
console.log(TAX_RATE);
console.log(operation);
console.log(counter);

// Variable naming conventions

// These are all diff seemantic styles that we can use but camelCase is most peferable.

const yourFirstVariable = 10; // camelCase mostly used
const your_first_variable = 10; // snake_case
const YOUR_FIRST_VARIABLE = 10 // CONSTANT_CASE .Generally constant's are written in CONSTANT_CASE
const yourfirstvarable = 10 // lowercase
const YourFirstCase = 10 ; // PascalCase/UpperCamelCase

// variable names should be descriptive

// bad
const q = 10;
const taxRateForNetIncomeForPeopleWithIncomeLessThanFiveLakhs = 0.07;

// good
const itemCount = 10;
const taxRateLowIncome = 0.07

// Data types 

const variable1 = 20;
const variable2 = variable1;
const variable3 = "Tushar";
const variable4 = {
    variableType: "object",
    variableValue: "some value",
};
const variable5 = (function(){
    return "Hello,my name is ";

})();
const variable6 = variable5 + variable3;
const variable7 = true;


console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);
console.log(typeof variable6);
console.log(typeof variable7);


console.log(variable6);

// STRING 
// we can make a string by using ""  or even '' ;

const stringValue = 'Single quotes'; // mostly used
const anotherStringValue = "Double quotes";

// ARRAYS

const firstArray = [10,20,3,20,1];
const secondArray = [20,'a string',true,[1,2,3,4], { prop:'temp'}]; //We can store diff data type in an single array

console.log(firstArray[0]); // index of array starts from 0.
console.log(secondArray[2]);
console.log(secondArray[3][3]);

// OBJECTS
// Everthing is an object in JS

const objectVariable = { prop1 :10 ,prop2 : 30};

// object poperties can be infinitely nested
const nestedObject = {
    layer1:{
        layer2:{
            layer3:{
                layer4:{
                    targetValue:20
                }
            }
        }
    },
    layer1_2: 40
}

// we can also grab a property with [] too

console.log(nestedObject['layer1_2'])

console.log(objectVariable.prop2);
console.log(nestedObject.layer1.layer2.layer3.layer4.targetValue);

// FUNCTIONS

const functionContainerVariable = function(){
    return 21;
}

console.log(functionContainerVariable());