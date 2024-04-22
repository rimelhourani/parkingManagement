const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ParkingModel = new Schema(
    {
    capacite: String,
      

     adresse: {
        type: String,
      },
      description : String,
       user:{
      type : mongoose.Types.ObjectId,
        ref :'user',
    },
},
    { timestamps: true }

);
 module.exports = mongoose.model("parking",ParkingModel)
