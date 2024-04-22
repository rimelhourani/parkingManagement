const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PlaceParkingModel = new Schema(
    {
    type: String,
    tarif : Number,
    description: String, 
    parking:{
      type : mongoose.Types.ObjectId,
        ref :'parking',
    },
},
    { timestamps: true }

);
 module.exports = mongoose.model("placeParking",PlaceParkingModel)