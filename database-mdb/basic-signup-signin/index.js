// the problem statement is that we have to make 2 routes for the user
// where the person can /signup - /signin 
// we have to store the data in a data base

const express = require("express")
const jwt = require("jsonwebtoken")
const z = require("zod")
const mongoose = require("mongoose")
const app = express()

const jwtPassword = "deftPunk"
const PORT = 5000

app.use(express.json())

mongoose.connect("mongodb+srv://<replace with your username>:<replace with your password>@cluster0.fqid6vu.mongodb.net/demoDatabase")

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

const userLoginSchema = z.object({
    email: z.email(),
    password: z.string().min(8).max(25)
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
        let token = jwt.sign({ email: response.data.email }, jwtPassword)
        return res.json({
            msg: "User created successfully",
            token,
        })
    }

})


app.post('/signin', async (req, res) => {
    const credintials = req.body.credintials;
    const response = userLoginSchema.safeParse(credintials);

    if (!response.success) {
        res.status(411).json({
            msg: "invalid email or password",
        })
    } else {
        const existingUser = await User.findOne({ email: response.data.email })
        if (!existingUser) {
            return res.status(400).send("User don't exist")
        } else {
            const token = req.headers.authorization
            try {
                const decoded = jwt.verify(token, jwtPassword)
                const username = decoded.email
                if (username === response.data.email) {
                    res.json({
                        msg: "Signed in successfully"
                    })

                }
            }

            catch (error) {
                res.json({
                    msg: "Authentication failed"
                })
            }
        }
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