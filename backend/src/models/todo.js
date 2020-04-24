const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Attachment = require("./misc/attachment.js")

/*
Основные данные по списку дел: заголовок, детальное описане, когда нужно сделать.
*/

const todoCardSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    travelers: [String], //same as traveler.id type
    isDone: {
        type: Boolean,
        default: false
    },
    header: {
        type: String,
    },
    details: {
        type: String,
    },
    todoDate: {
        type: Date,
    },
    attachments: [Attachment],
});

module.exports = mongoose.model("todoCard", todoCardSchema);