// other zod 

const express = require("express")
const zod = require("zod");
const app = express();

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/login", (req, res) => {
    const response = validateInput(req.body);
    if(!response.success) {
        res.json({
            msg: "Invalid input"
        });
        return;
    }
});

app.listen(8000, () => {
    console.log("server is started");
});