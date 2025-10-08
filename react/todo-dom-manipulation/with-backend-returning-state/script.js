// get a json file from a backend and display it in the front end 
let globalId = 1
function markAsDone(id){
    const parent = document.getElementById(id)
    parent.children[2].innerHTML = "DONE!" // 3 child of parent 
}

function createChildren(title,description,id){
    const child = document.createElement("div") //this will create a dom element in memory
    const firstGrandChild = document.createElement("div")  
    firstGrandChild.innerHTML = title
    const secondGrandChild = document.createElement("div")
    secondGrandChild.innerHTML = description
    const thirdGrandChild = document.createElement("button")
    thirdGrandChild.innerHTML = "Mark As Done"
    thirdGrandChild.setAttribute('onclick',`markAsDone(${id})`) // function that is being called to mark it as done 
    const forthGrandChild = document.createElement("hr")
    child.appendChild(firstGrandChild)
    child.appendChild(secondGrandChild)
    child.appendChild(thirdGrandChild)
    child.appendChild(forthGrandChild)
    child.setAttribute("id",id)
    return child
}

// this finction take array as an input 
// every element of array have title ,description and a id with in it
function updateDomAccToBackendState(state){
    const parent = document.getElementById("container")
    parent.innerHTML = "" // emptying the dom first 
    for (let i = 0 ; i<state.length; i++) {
        const child = createChildren(state[i].title,state[i].description,state[i].id)
        parent.append(child)
    }
    
}

// all the above logic is done react for us we just have to give him the state and it will do it for us under the hood

// in every 6 sec this function get called and it will fetch the data from the backend
window.setInterval(async ()=>{
    const response = await fetch("http://localhost:5000/todos")
    const data = await response.json()
    updateDomAccToBackendState(data.todos)
},6000)

