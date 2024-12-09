const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "deactive"
    }
})
const todo = mongoose.model("todo", todoSchema);
module.exports = todo;