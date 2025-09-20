function findSum(n) {
    let a = 0;
    for(let i = 0 ; i < n ; i++){
        a++;
    }
    console.log(a);
}

function sum10000(){
    return findSum(10000);
}

setTimeout(sum10000,2000); // built in asyncfunction 

// fetch - to fetch data from an api endpoint 

console.log("I came first and you can after 2sec");

const fs = require("fs"); // system file module

// fs.readFile("filename/locat","format",function(err,data){
//     doSomeThingHere
// })

fs.readFile("someText.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("check1");
let a1 = 0; 
for(let i = 0 ; i < 999999999 ; i++){
    a1+=i;
}
console.log(a1);
console.log("check2");


// output of this code is 
// I can first and you can after 2sec
// check1
// 499999998067109000
// check2
// this is an example file with
// some random, words so pls ignore this 
// someText.txt;

// 10000

