// Java Script Object Notation  aka JSON
// everyone understand string so take string as an inpur from other and gave string as output too that is why we have JSON
// told by Harkirat sir 
const user = {
    name: "Tushar Thakur",
    age: 19,
    gender: "male",
    isStudent: true
}

console.log(user["isStudent"]);
let infoStr = JSON.stringify(user);
console.log(infoStr);

let infoObj = JSON.parse(infoStr);
console.log(infoObj);

