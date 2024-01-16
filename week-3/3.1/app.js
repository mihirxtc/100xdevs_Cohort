const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("you have " + kidneyLength + " kindeys");
});

// gloabal catch
app.use((err, req, res, next) =>  {
    console.log(err);
    res.json({
        msg: "Please try later."
    });
});

app.listen(8000, () => {
    console.log("server is started");
});