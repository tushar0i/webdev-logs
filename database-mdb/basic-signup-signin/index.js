// the problem statement is that we have to make 3 routes for the user
// where the person can signup - signin - and get all other user
// we have to store the data in a data base

const express = require("express")
const jwt = require("jsonwebtoken")
const z = require("zod")
const mongoose = require("mongoose")
const app = express()

const jwtPassword = "deftPunk"
const PORT = 5000

app.use(express.json())

                 //replace this link with your own 
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.mongodb.net/demoDB")

const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String,
})

const userSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(8).max(25),
})

app.post('/signup', async (req, res) => {
    const credintials = req.body.credintials;
    const response = userSchema.safeParse(credintials);

    if (!response.success) {
        res.status(411).json({
            msg: "invalid email or password",
        })
    } else {
    
        const existingUser = await User.findOne({ email: response.data.email })

        if (existingUser) {
            return res.status(400).send("User already exist")
        }

        const user = new User({
            name: response.data.name,
            email: response.data.email,
            password: response.data.password,
        })
        user.save()
        res.json({
            msg: "User created successfully"
        })
    }

})


app.use((err, req, res, next) => {
    console.error(err);
    res.json({
        msg: "something is up with the server"
    })
})

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})