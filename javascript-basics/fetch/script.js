/* function getDataFromBackend() {
     fetch("https://fakerapi.it/api/v1/persons") // this thing returns a promise
     .then((response)=>{
         response.json() // thsi thin also returns a promise too
         .then((finalData)=>{
             console.log(finalData);
         })
     })
}*/
    // another way of writing the same code is to use async and await 
async function getDataFromBackend(){
    const response = await fetch("https://fakerapi.it/api/v1/persons")
    const finalData = await response.json()
    console.log(finalData);
}