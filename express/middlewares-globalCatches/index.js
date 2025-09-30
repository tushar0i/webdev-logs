const express = require("express");
const app = express();
const PORT = 4444;

// two types of pre checks
// 1st authorization and 2nd for bad inputs

app.get('/health-checkup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyNo = req.query.kidneyNo;

    // assumption is thawe have only one user
    console.log("doing auth check");
    if (username != "tushar" || password != "Thing") {
        // status code 403 Forbidden → Authenticated but not allowed.
        res.status(403).json({
            msg: "User not found"
        });
        return;
    }
    console.log("doing input check");
    if(kidneyNo != 1 && kidneyNo !=2 ){
        res.status(403).json({
            msg: "Invalid input"
        });
        return;
    }
    res.json({
        msg:"thing seems good till now"
    });
})

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

