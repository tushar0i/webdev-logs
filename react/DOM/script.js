function dosomething(){
    const a = document.getElementById("firstNumber").value // this thing always gives a string only 
    const b = document.getElementById("secondNumber").value
    const element = document.getElementById("finalSum")
    element.innerHTML = parseInt(a)+parseInt(b) // that thy we have to consvert it into a int
    fetch(`http://localhost:5000/sum?a=${a}&b=${b}`) // this is our backend where the stuff is happening
    console.log(res) // this thing returns a promise
    .then((response)=>{
        console.log(response)
        response.text()
        .then((ans)=>{
            console.log(ans)
        })
    })
}

async function dosomething2(){
  const a = document.getElementById("firstNumber").value // this thing always gives a string only 
    const b = document.getElementById("secondNumber").value
    const element = document.getElementById("finalSum")

    const response = await fetch(`http://localhost:5000/sum?a=${a}&b=${b}`)
    console.log(response)
    const data = await response.text()
    console.log(data)
    document.getElementById("finalSum").innerHTML = data
}