// rest API, http
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

app.post("/backend-api/conversation", (req, res) => {
    const message = req.body.message;
    console.log(message);
    res.json({
        output: "5 + 5 = 10"
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});