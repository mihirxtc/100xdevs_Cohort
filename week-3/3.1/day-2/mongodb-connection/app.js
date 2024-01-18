const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://mihirxtc:mihirxtc%408011@cluster0.xod7idy.mongodb.net/");

const User = mongoose.model('Users', { name: String, email: String, password: String});

app.post("/", async (req, res) => {
    const name = req.body.namne;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({ email: username });

    if(existingUser) {
        return res.status(400).send("Username already existing");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });

    user.save();
    res.json({
        "msg": "user created successfully"
    });
});