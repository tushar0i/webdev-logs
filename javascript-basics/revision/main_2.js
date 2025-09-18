// LENGTH 
let lnth = "this is a string in an example".length;
console.log(lnth);

// INDEXOF
let positioOf = "this is the one of the best".indexOf("of");
console.log(positioOf);

// LASTINDEXOF 
const value = "the";
let lastPositionOf = "this is the one of the best".lastIndexOf(value);
console.log(lastPositionOf);

// SLICE 
const words = "tushar thakur";
let piece = words.slice(1,8); //from index 1 to before 4
let subPart = words.substr(2,7) //from index 1 upto length 7 
// substr arn't used now
console.log(piece);
console.log(subPart);

// REPLACE
const ex1 = "this is in js";
let res1 = ex1.replace("js","javaScript");
console.log(res1);

// SPLIT
const ex2 = "something we all adore";
let res2 = ex2.split("e");
console.log(res2);

// TRIM
const ex3 = "  Tushar   Thakur  ";
let res3 = ex3.trim();
console.log(res3);

// TOUPPERCASE
let res4 = ex3.trim().toUpperCase();
console.log(res4);

// TOLOWERCASE
let res5 = ex3.toLowerCase();
console.log(res5);

// PARSEINT --> a string to an int
console.log(parseInt("99.98"));
console.log(parseInt("100pxaahsdg"));
console.log(parseInt("834"));

// PARSEFLOAT
console.log(parseFloat("99.98"));
console.log(parseFloat("100.283pxaahsdg"));
console.log(parseFloat("834"));


