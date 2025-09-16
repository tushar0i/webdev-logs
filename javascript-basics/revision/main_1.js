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

console.log("This person name is "+ myName+ " and his age is " + age );

if (isStudent == true) {
    console.log(myName + " is a student");
} else {
    console.log(myName+" is not a student");
}

// Loops
let someNumber = 0;
for( let i = 0; i<=1000 ; i++){
    someNumber = someNumber + i;
}

console.log(someNumber);

// Arrays and Objects

let userNames = ["tushar","puneet","rahul","manmohan","nikki"] ;

for (let i=0;i<userNames.length;i++){
    console.log(userNames[i]);
}

let ages = [20,22,40,30,21,51,33,45,23,44];
let numberOfUser = ages.length;
for (let i = 0 ; i < numberOfUser ; i++){
    if (ages[i]%2 == 0){
        console.log(ages[i]);
    }
}


