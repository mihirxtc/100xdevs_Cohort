const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " kindeys")
});

app.listen(5000);