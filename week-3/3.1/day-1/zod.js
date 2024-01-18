const express = require("express");
const zod = require("zod");
const app = express();
// const schema = zod.array(zod.number());
const port = 8000;
app.use(express.json());

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "mihirxtc@gmail.com",
    password: "12345678"
});

// app.post("/health-checkup", (req, res) => {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     if(!response.success) {
//         res.status(411).json({
//             msg: "Invalid input, try agian!"
//         });
//     } else {
//         res.send({
//             response
//         });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });