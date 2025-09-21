const fs = require("fs");

function readFile(){
    let p = new Promise(function(resolve){
        
        fs.readFile("someText.txt","utf-8",function(err,data){
            resolve(data);
        })
    });
    return p;
}

// this is the normal way 

function main1(){
    readFile().then(function(data){
        console.log(data);
    })
    console.log("from main1");
}

// using async await 

async function main2() {
    let value = await readFile(); // the thread is hung here the logic after this don't work before resolve happen
    console.log(value);
    console.log("from main2");

    // same way of writhing above code
    readFile().then(function(data){
        console.log(data);
        console.log("from main2");
    })
}

// await is only valid in an async function  thats why we enclosed it in an async main function 


main1();

main2();