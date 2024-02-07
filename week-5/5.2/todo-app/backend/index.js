const express = require("express");
const cors = require('cors');
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Invalid inputs"
        });
        return;
    }
    // mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    });
});

app.put("/complete", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Invalid inputs"
        });
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    });
    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(port, (req, res) => {
    console.log(`Server is started on port ${port}`);
})