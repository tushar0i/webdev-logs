const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000")
})