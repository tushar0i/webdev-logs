const express = require('express');
const app = express();
// in memory hospital we are not using a database here
// for this example we are taking only one user

// this is an very ideal example  in real backend we have nultipla user a lot of edgecases ans so many other things

// this is our in memory storage
let users = [{
    name: 'Someone',
    kidneys: [{
        healthy: true,
    }],
}];

app.use(express.json());

function noOfUhtyKidneys(val) {  // just thinking making this function like is a bad idea but doing it for fun #justExperimenting
    const userKidney = users[0].kidneys;
    const numberOfKidneys = userKidney.length;
    let noOfHtyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (userKidney[i].healthy) {
            noOfHtyKidneys++;
        }
    }
    let noOfUhtyKidneys = numberOfKidneys - noOfHtyKidneys;
    if (val == "noOfUhtyKidneys") {
        return noOfUhtyKidneys;
    }

}

// can do anything in these request to is good thing to follow the convention that has been created

//giving a response kind of thing 
app.get('/', function (req, res) {
    const userKidney = users[0].kidneys;
    const numberOfKidneys = userKidney.length;
    let noOfHtyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (userKidney[i].healthy) {
            noOfHtyKidneys++;
        }
    }
    let noOfUhtyKidneys = numberOfKidneys - noOfHtyKidneys;
    res.json({
        numberOfKidneys,
        noOfHtyKidneys,
        noOfUhtyKidneys
    })
})

// getting a response kind of thing
app.post('/', function (req, res) {
    const isHty = req.body.isHty;
    users[0].kidneys.push({
        healthy: isHty
    })
    res.json({
        msg: "done"
    })
})

// converting unhealthy into  healthy
app.put('/', function (req, res) {
    if (noOfUhtyKidneys("noOfUhtyKidneys") >= 1) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    }
    else {
        // res.sendStatus(411); 
        res.status(411).json({  // we check the atatus code in frontend and do things acoording to that that is why it is imp
            msg: "You have no unHealthy kidneys"
        })
    }
})



// removing the unhealthy kidneys
app.delete('/', function (req, res) {
    // checking a edge case if atleast one unhealthy kidney is there 
    if (noOfUhtyKidneys("noOfUhtyKidneys") >= 1) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({});
    }
    else {
        // defsault status code is 200 everything is fine
        // res.sendStatus(411); 
        res.status(411).json({  // we check the atatus code in frontend and do things acoording to that that is why it is imp
            msg: "You have no unHealthy kidneys"
        })
    }

})

app.listen(3100);