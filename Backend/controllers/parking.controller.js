const ParkingModel = require("../models/model.parking");
const ValidateParking = require("../validation/Parking");

const AddParking = async (req, res) => {
  const { errors, isValid } = ValidateParking(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      ParkingModel.create(req.body);
      res.status(200).json({ message: "success" });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const FindAllParkings = async (req, res) => {
  try {
    const data = await ParkingModel.find().populate("user", ["name", "email"]);
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const FindSingleParking = async (req, res) => {
  try {
    const data = await ParkingModel.findOne({ _id: req.params.id }).populate(
      "user",
      ["name", "email"]
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const DeleteParking = async (req, res) => {
  try {
    const data = await ParkingModel.findOneAndRemove({ _id: req.params.id });
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const EditParking = (req, res) => {
  const id = req.params.id;
  ParkingModel.findByIdAndUpdate(id, req.body, (err) => {
    if (!err) {
      res.status(200).send({ message: "parking actualisé avec succée" });
    } else {
      res.status(500).send({ message: "erreur" });
    }
  });
};

module.exports = {
  AddParking,
  FindAllParkings,
  FindSingleParking,
  EditParking,
  DeleteParking,
};
