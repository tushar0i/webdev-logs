// 01 because it is a constant;
// constant can't be updated;

// 02 result of both is false 

// 03 
const result = !((100%50 < 100/50) && 300+5 === 305);
console.log(result);// false

// 04 
const myObj = {
    prop1:'Some value',
    prop2: 20
};

const myArray = [40,50,2];

const result2 = myObj.prop2 === (myArray[0]/myArray[2]);
console.log(result2); // this leads to true because one is object refer to number and  array refers to number too;

// 05
const myObject = {
    nestedObject1:{
        price:100,
        quantity:5
    },
    nestedObject2:{
        price:150,
        quantity:2
    }
};
const myArr =[myObject.nestedObject1,myObject.nestedObject2];

const result1 = (myArr[0].price*myArr[0].quantity)>(myArr[1].price*myArr[1].quantity);// (100*5) > (150*2) this  is true