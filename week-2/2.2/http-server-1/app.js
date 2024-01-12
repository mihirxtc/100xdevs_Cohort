const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
    res.send("Hello, World!")
});

// route
app.get("/route-handler", (req, res) => {
    res.json({
        name: "Mihir",
        age: 20
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});