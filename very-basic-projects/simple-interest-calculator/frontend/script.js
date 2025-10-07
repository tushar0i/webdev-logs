async function calculateInterest(){
    const a = document.getElementById("pa").value 
    const b = document.getElementById("ir").value
    const c = document.getElementById("ti").value
    const response = await fetch(`http://localhost:5000/simpleinterest?a=${a}&b=${b}&c=${c}`)
    console.log(response)
    const data = await response.text()
    console.log(data)
    document.getElementById("answer").innerHTML = data
}