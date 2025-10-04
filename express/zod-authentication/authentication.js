const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "nothing"

const app = express()
const PORT = 4000

const allUsers = [{ // this is our memory data base 
    username: "person1@gmail.com",
    password: "99999",
    name: "person1"
}, {
    username: "person2@gmail.com",
    password: "11111",
    name: "person2"
}, {
    username: "person3@gmail.com",
    password: "00000",
    name: "person3"
}]

app.use(express.json())

function userExist(username, password) {
    
    // we can use a for loop to go through every user but I am going to use find function here to learn about it 
    const findUser = allUsers.find((user) =>
        user.username === username && user.password === password
    )
    // console.log(findUser)
    return findUser !== undefined // returns true if user found, else false

}

app.post("/signup", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (!userExist(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in the database",
        })
    }

    var token = jwt.sign({ username: username }, jwtPassword)
    return res.json({
        token,
    })
})


app.get("/users", (req, res) => { //purpose is to return every user except the user who signed up
    const token = req.headers.authorization
    const decoded = jwt.verify(token, jwtPassword)
    const username = decoded.username
    res.json({
        users : allUsers.filter((value)=>{
            if(value.username == username){
                return false
            }else{
                return true
            }
        })
    })


})

app.use((err, req, res, next) => {
    res.status(411).json({
        msg: "something is up with the server"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})