const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ParkingModel = new Schema(
    {
        name: "String",
        adresse: "String",
        capacite: "String",
        telephone: Number,
        ParkingRate: Number,
        timeStart: Date,
        timeFinish: Date,
        adresse: {
            type: "String",
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
        },
    },
    { timestamps: true }

);
module.exports = mongoose.model("parking", ParkingModel)
