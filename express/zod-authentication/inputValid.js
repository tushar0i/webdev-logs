const express = require("express");
const app = express();

// zod is a library which helps us to validate input
const z = require("zod");
const PORT = 5000;

const schema = z.array(z.number()); // an array of number 

// object {
    // email : somthing@domain.ccc, ==> valid email
    // password : ********, ==> minimum of 8 and max of 20 char
    // country :"IN","US" 
// }

const userSchema = z.object({
    email : z.email(),
    password : z.string().min(8).max(20),
    country : z.literal("IN").or(z.literal("US"))
}) 

app.use(express.json());

app.post('/login',(req,res)=>{
    const credintials = req.body.credintials;
    const response = userSchema.safeParse(credintials);

    if(!response.success){
        res.status(411).json({
            msg:"wrong inputs try again",
        })
    } else {
        res.send({
            response
        })
    }
})

app.post('/example', (req, res) => {
    const someId = req.body.someId;
    const response = schema.safeParse(someId);
    // const someIdLength = someId.length;
    if (!response.success) {
        res.status(411).json({
            msg: "Invalid input"
        })
    } else {
        res.send({
            response
        });
    }

    // the json file we get invalid input 
    /* { 
        "response": {
            "success": false,
                 "error": {
                "name": "ZodError",
                     "message": "[\n  {\n    \"expected\": \"array\",\n    \"code\": \"invalid_type\",\n    \"path\": [],\n    \"message\": \"Invalid input: expected array, received undefined\"\n  }\n]"
            }
       }
     }*/
});

app.use((err,req,res,next)=>{
    console.error(err);
    res.json({
        msg : "something is up with the server"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});