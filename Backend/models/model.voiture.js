const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const voitureModel = new Schema(
  {
    numero: Number,
    type:String,
    categorie: String,
    description: String,
    nomProprietaire:String,
    telProprietaire:Number,
    
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("voiture", voitureModel);
