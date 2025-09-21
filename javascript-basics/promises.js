const fs = require("fs");

// the async wrapper function we define

function meReadingFile(callback){
    fs.readFile("someText.txt","utf-8",function(err,data){
        callback(data);
    })
}

// Same code with promises
function meReadingFile2(){

    console.log("inside meReadingFile2");

    let storePromise =  new Promise(function(resolve){ // we can directly return the promise or store it and then return it 

        console.log("inside the promise");

        fs.readFile("someText.txt","utf-8",function(err,data){

            console.log("before resolve");

            resolve(data);

            console.log("after resolve"); 

        });
    })
    return storePromise; // returned the promise
}

function onDone(data){
    console.log("inside onDone")
    console.log(data);
}

// meReadingFile(onDone);

const value = meReadingFile2();// this means it returns a promise
console.log(value); // the promise comes synchronously but the data of the promise comes asynchronously thats why we were able to log it in the first place 
value.then(onDone);


// promise is just a class like date 
// promise can have these states pending,resolverd ,rejected
let pms = new Promise(function(resolve){ // we can define object in a class anywhere
    setTimeout(function(){
        resolve("something to pass"); // this should be resolver instantly if we didn't set the timeout
    },4000)
});

function callback(){
    console.log(pms);
}

console.log(pms);
pms.then(callback);


// this is the output of the above code {

// inside meReadingFile2
// inside the promise
// Promise { <pending> }
// Promise { <pending> }
// before resolve
// after resolve
// inside onDone
// this is an example file with
// some random, words so pls ignore this 
// someText.txt;

// Promise { 'something to pass' }
// 
// }