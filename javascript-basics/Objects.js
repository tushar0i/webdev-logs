const user = {
    name: "Tushar Thakur",
    age: 19,
    gender: "male",
    isStudent: true,
}

let keyArr = Object.keys(user);
console.log("keys in user object are :",keyArr);

let valueArr = Object.values(user);
console.log("value in user object are :",valueArr);

let entriesArr = Object.entries(user);
console.log("Array inside in array containing key and its value as it elements :",entriesArr);

let isPropPresent = user.hasOwnProperty("name");
console.log("Is age key present :",isPropPresent);

let userUpdate = Object.assign({},user,{isAnIntrover:true});
console.log(userUpdate);