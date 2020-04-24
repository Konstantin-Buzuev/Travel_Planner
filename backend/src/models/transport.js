const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Attachment = require("./misc/attachment.js")

/*
Основные данные по транспорту: какой, компания-перевозчик, откуда/куда/когда перемещаемся
*/
const transportCardSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    travelers: [String], //same as traveler.id type
    payer: {
        type: String, // traveler.id who payed
    },
    cost: mongoose.Decimal128,
    transport: {
        type: String,
    },
    company: {
        type: String,
    },
    departurePlace: {
        type: String,
    },
    departureDate: {
        type: Date,
    },
    arrivalPlace: {
        type: String,
    },
    arrivalDate: {
        type: Date,
    },
    comment: {
        type: String,
    },
    attachments: [Attachment],

});

module.exports = mongoose.model("transportCard", transportCardSchema);