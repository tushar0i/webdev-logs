// there are two ways we can write a function

const { constants } = require("buffer");

// function product(a,b) {
//     return a*b;
// }
// const ans = product(3,99);
// console.log(ans);

// this is a arrow function
const product = (a,b) => {
    return a*b;
}
const answer = product(9,99);
console.log(answer);

// maps 
// there is a array 
let list = [1,2,3,4,5,6,7,8];

// this thiing is doing the same thing as written below in maps  
function transform(i){
    return i*3;
}
let newList2 = [];
for(let i = 0 ; i<list.length ; i++){
    newList2.push(transform(list[i]));
}

let newList = list.map((i)=>{
    return i*3;
})

console.log(newList);


// filter 
// example 1
function filterLogic(elem) {
    if(elem%2 == 0){
        return true;
    } else {
        return false;
    }
}

const newList3 = newList2.filter(filterLogic);
console.log(newList3);

// example 2
const arr2 = ["tushar","mohit","nikita","puneet","satwik","tarun"];

const newList4 = arr2.filter((elem) => {
    if(elem.startsWith("t")){
        return true;
    }else{
        return false;
    }
})
console.log(newList4);