const express = require("express");
const port = 3001;
const app = express();
app.get('/',function(req,res){
    let a = 0;
    console.log("req has been reached now will bw stuck because of the loop!")
    for (let i = 0 ; i<3999999999 ; i++){
        a+=1
    }
    res.send("<b>Hello world! from an http-server-1 it must have taken time to load me </b>");
})

app.get('/something',function(req,res){
    console.log(req.headers)
    res.send({
        name:"tushar thakur",
        age:19,
        isStudent:true
    })
})



app.listen(port);
