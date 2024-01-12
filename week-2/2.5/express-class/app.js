const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKindeys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i=0; i<johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKindeys = numberOfKindeys - numberOfHealthyKidneys;
    res.json({
        numberOfKindeys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKindeys
    });
});

app.post("/", (req, res) => {

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    });
});

app.put("/", (req, res) => {
    for (let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
});

app.delete("/", (req, res) => {
    if(isThereAtleastOnehealthyKindey()) {
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                });
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Done!"
        });
    }
    else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
});

function isThereAtleastOnehealthyKindey() {
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

// app.delete("/", (req, res) => {
//     const newKidneys = [];
//     for(let i=0; i<users[0].kidneys.length; i++) {
//         if (users[0].kidneys[i].healthy) {
//             newKidneys.push({
//                 healthy: true
//             })
//         }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({
//         msg: "Done!"
//     })
// })

app.listen(8000)