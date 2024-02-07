const mongoose = require("mongoose");

// mongodb url = mongodb+srv://mihirxtc:mihirxtc%408011@cluster0.xod7idy.mongodb.net/todo
// .env

mongoose.connect("mongodb+srv://mihirxtc:mihirxtc%408011@cluster0.xod7idy.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}


// Schema
/*
    Todo {
        title: string;
        description: string;
        completed: boolean;
    }
*/