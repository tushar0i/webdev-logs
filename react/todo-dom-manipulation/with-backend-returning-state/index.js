const express = require("express")
const cors = require("cors")
const port = 5000
const app = express()
app.use(express.json())
app.use(cors())

// return a json file (state) with array of objects with random length less than 11
//
app.get('/todos', (req, res) => {
  
  const randomLength = Math.floor(Math.random() * 10) + 1;
  const todosList = [];

 
  for (let i = 1; i <= randomLength; i++) {
    todosList.push({
      id: i,
      title: `TO DO ${i}`,// Send the object back as a JSON response
      description: `This is a sample description for the task ${i}`,
      completed: Math.random() < 0.5 // Randomly sets this to true or false
    });
  }

  const finalResponse = {
    todos: todosList
  };

  res.json(finalResponse);
});


app.use((err,req,res,next)=>{
    console.error(err)
    res.send("something is up with the server try again after some time")
})

app.listen(port ,()=>{
    console.log(`Sever is running on http://localhost:${port}`)
})

