const express = require("express")
const app = express()

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age
    if(age >= 14) {
        next()
    } else {
        res.json({
            msg: "Sorry u r not old enough"
        })
    }
}

app.use(isOldEnoughMiddleware)

app.get("/ride1", (req, res) => {
    res.json({
        msg: "You have successfully riden ride 1"
    })
})

app.get("/ride2", (req, res) => {
    res.json({
        msg: "You have successfully riden ride 2"
    })
})

app.get("/ride3", (req, res) => {
    res.json({
        msg: "You have successfully riden ride 3"
    })
})

app.listen(8000)