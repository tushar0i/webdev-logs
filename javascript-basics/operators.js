// Arithemetic Operators

console.log(20+30);// plus
console.log(20-30);// substraction
console.log(2*8);// multiplication
console.log(200/30);// division
console.log(100%11);// modulus/ remainder
console.log(2**3);// exponent
let count = 10;
console.log(count);
count++; // increment
// count = count + 1;
console.log(count);
count--; // decrement
// count = count - 1;
console.log(count);

//Assignment Operators
// not recomended to use them use use x = x opet num ;

let x = 11;
console.log(x);
x+=5;// x = x + 5
console.log(x);
x-=1; // x = x - 1
console.log(x);
x*=2; // x = x * 2
console.log(x);
x/=3; // x = x / 3
console.log(x);


//Comparision Operators

const result = 10>19; // other are > , < , >= , <=
console.log(result); // false

const result2 = 20 === 20;
// === means is 20 = 20 in both value and datatype;
console.log(result2);

const result3 = 20 == '20';
// == means is 20 = 20 in value type doesn't matter;
console.log(result3);

const result4 = 20 != '21';
// != mean is 20 not = 21 only the value not types which is true in this case;
console.log(result4);

const result5 = 20 !== '20';
// !== mean is 20 not = 20 both in therms of value and type in this case one is
//  number 20 and another is 20 is string so it is true in this case;
console.log(result5);

const result6 = 20 !== 20;
console.log(result6); // false because the both are numbers and and value is 20 too;

const myObject = {
    property1 : 'Some value',
    property2 : 30
};

const myObject2 = {
    property1 : 'Some value',
    property2 : 30
};

console.log(myObject == myObject);// true in both == and ===
console.log(myObject2 == myObject);// false in both == and ===

const myArray  = [0,1,2,3,4,5,6,7,8,9];
const myArray2  = [0,1,2,3,4,5,6,7,8,9];

console.log(myArray === myArray);// true in both == and ===
console.log(myArray == myArray2);// false in both == and ===

// we can't compare object and arrays with comparison operators
// we use different lib to do this --> lodash

// Ternary Operator
// if true then print value match if false then print value do not match
const trueOrFalse = 20 === 20 ? 'value match': 'values do not match';
console.log(trueOrFalse);
