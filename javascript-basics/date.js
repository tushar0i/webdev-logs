const currentDate = new Date();

console.log("Current year-1900 is  :",currentDate.getYear()); // this givesoutput current year minus 1900 
console.log("Current hour :",currentDate.getHours());
console.log("Current min :",currentDate.getMinutes());
console.log("Current sec :",currentDate.getSeconds())
console.log("Current date :",currentDate.getDate());
console.log("Current month :",currentDate.getMonth());
console.log("Current year :",currentDate.getFullYear());
console.log("Current Date :",currentDate);

console.log("Time in millisecond since 1970 :",currentDate.getTime());
// currentDate.setFullYear(2000);
// console.log("Current Date after :",currentDate);



function timeTakenForLoop(j){
    const inTime = new Date();
    const initialTime = inTime.getTime();
    console.log(initialTime);
    let a = 0;
    for( let i = 0 ; i<j ; i++){
        a = a + i;
    }
    const fiTime = new Date();
    let finalTime = fiTime.getTime();
    console.log(finalTime);
    console.log("Value of a after",j,"loops is :",a);
    const totalTime = finalTime - initialTime ;
    return totalTime;
}


let timeTake = timeTakenForLoop(49999999999);
console.log("Time taken for loop of 100000 for a+=i is :", timeTake)