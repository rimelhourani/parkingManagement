const PlaceParkingModel = require("../models/model.placeParking");
const ValidatePlaceParking = require("../validation/placeParking")

const AddPlaceParking = async (req, res) => {
    const { errors, isValid } = ValidatePlaceParking(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        PlaceParkingModel.create(req.body);
        res.status(200).json({ message: "success" });
      }
    } catch (error) {
      res.status(404).json(error.message);
    }
  };
const FindAllPlaceParkings = async (req ,res)=>{
    try {
       const data =  await PlaceParkingModel.find().populate('parking')
       console.log(data)
       res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}
const FindSinglePlaceParking = async (req ,res)=>{
    try {
        const data =  await PlaceParkingModel.findOne({_id: req.params.id}).populate(
            "parking")
       
        res.status(200).json(data)
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}
const DeletePlaceParking = async (req, res) => {
    try {
      const data = await PlaceParkingModel.findOneAndRemove({ _id: req.params.id });
      res.status(200).json({ message: "deleted" });
    } catch (error) {
      res.status(404).json(error.message);
    }
  };
  const EditPlaceParking = (req, res) => {
    const id = req.params.id;
    PlaceParkingModel.findByIdAndUpdate(id, req.body, (err) => {
      if (!err) {
        res.status(200).send({ message: "Place parking actualisée avec succée" });
      } else {
        res.status(500).send({ message: "erreur" });
      }
    });
  };
module.exports = {
 AddPlaceParking,
FindAllPlaceParkings,
FindSinglePlaceParking,
DeletePlaceParking,
EditPlaceParking


};