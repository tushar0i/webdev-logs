 // this is the thing that is used to make website dynamic before react library and other framework came into the picture
// React was created by Facebook (Meta).
// The React team itself describes it as:
// “The library for web and native user interfaces”

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

function addToDo(){ 
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    
    // few DOM operation
    // document.createElement
    // document.appendChild
    // element.setAttribute
    // element.children

    //dumb way of appending things
    // const containerContent = document.getElementById("example").innerHTML
    // document.getElementById("example").innerHTML = containerContent+`
    // <div>${title}</div>
    // <div>${description}</div>
    // <button>Mark as done</button>
    // <hr>
    // `
   
    const parent = document.getElementById("container")
    parent.append(createChildren(title,description,globalId++))
   
    
}