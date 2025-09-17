// just for the revision because I just left learning js for a while 
console.log("Something I want to print");

// var --> we don't use then now

var a = 1;
a = 500;
console.log(a);


// for declearing a constant value
const pi = 3.14;
const g = 9.8;
console.log(pi);
console.log(g);


// we use let most of the time to declare a variable
let age = 18;
age = 19;
console.log(age);

// data type string, number , and boolean etc 

let myName = "Tushar";
let isStudent = true;

console.log("This person name is " + myName + " and his age is " + age);

if (isStudent == true) {
    console.log(myName + " is a student");
} else {
    console.log(myName + " is not a student");
}

// Loops
let someNumber = 0;
for (let i = 0; i <= 1000; i++) {
    someNumber = someNumber + i;
}

console.log(someNumber);

// Arrays and Objects

let userNames = ["tushar", "puneet", "rahul", "manmohan", "nikki"];

for (let i = 0; i < userNames.length; i++) {
    console.log(userNames[i]);
}

let ages = [20, 22, 40, 30, 21];
let numberOfUser = ages.length;
for (let i = 0; i < numberOfUser; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
}

// this is a list of objects 
let allUsers = [{
    userName: "tushar",
    age: 20,
    gender : "male",
    metadata : {
        country : "india",
        state : "mp",
    },
}, {
    userName: "puneet",
    age: 22,
    gender : "male",
    metadata : {
        country : "india",
        state : "mp",
    },
}, {
    userName: "rahul",
    age: 40,
    gender : "male",
    metadata : {
        country : "india",
        state : "bh",
    },
}, {
    userName: "manmohan",
    age: 30,
    gender : "male",
    metadata : {
        country : "india",
        state : "tn",
    },
}, {
    userName: "nikki",
    age: 21,
    gender : "female",
    metadata : {
        country : "india",
        state : "mp",
    },
}];

for (let i = 0; i<allUsers.length ; i++){
    if(allUsers[i]["gender"] == "female"){
        console.log(allUsers[i]["userName"]);
        console.log(allUsers[i].metadata.state);
        console.log(allUsers[i]["metadata"]["state"]);
    }
}



// Functions 

function findProduct (a ,b){
    const productValue = a * b;
    return productValue;
}
const result = findProduct(2054,7042);
console.log(result); 

// function passed as an Arguments

function sum (num1, num2, fnToCall, delay) {
    let result = num1 + num2 ;
    console.log("processing");
    fnToCall(result, delay);
}

function displayResult (data) {
    console.log("Result of the sum is : "+data);
}

function displayResultPassive (data) {
    console.log("Sum's result is : "+data);
}

const ans = sum(209, 50843, displayResultPassive,2) ; // we have passed a function as an argument which is called callback
