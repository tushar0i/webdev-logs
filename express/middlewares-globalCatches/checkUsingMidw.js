const express = require("express");
const app = express();
const PORT = 5000;

// in previous basic raw checkup code if we need to add more request and it need auth so we have to 
// write the same code again which voilates the DRY rule that why we use middlewares



function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "tushar" || password != "Thing") {
        // status code 403 Forbidden → Authenticated but not allowed.
        res.status(403).json({
            msg: "User not found"
        });

    } else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {

    const kidneyNo = req.query.kidneyNo;
    if (kidneyNo != 1 && kidneyNo != 2) {
        res.status(403).json({
            msg: "Invalid input"
        });
    } else {
        next();
    }
};

let value = 0;
function calculateReq(req,res,next){
    value++;
    console.log(value);
    next();
};

// this will be called first when any request get hit --> app.use();
app.use(express.json()); // post request input from body but json only
app.use(calculateReq);

app.get('/example', (req, res, next) => { // just an example that we can use middleware(a function in between)
    console.log("first layer check");
    next();
}, (req, res, next) => {
    console.log("second layer check");
    next();
}, (req, res) => {
    console.log("final layer");
    res.status(200).json({
        msg: "everything is running fine",
    });
});


app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req,res) => {
    res.json({
        msg: "thing seems good till now"
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});