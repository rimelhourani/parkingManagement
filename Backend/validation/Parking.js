const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateParking(data) {
  let errors = {};

  data.capacite = !isEmpty(data.capacite) ? data.capacite : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.adresse = !isEmpty(data.adresse) ? data.adresse : "";
  data.ParkingRate = !isEmpty(data.ParkingRate) ? data.ParkingRate : "";
  data.telephone = !isEmpty(data.telephone) ? data.telephone : "";
  data.timeStart = !isEmpty(data.timeStart) ? data.timeStart : "";
  data.timeFinish = !isEmpty(data.timeFinish) ? data.timeFinish : "";
  data.user = !isEmpty(data.user) ? data.user : "";
  
  if (validator.isEmpty(data.capacite)) {
    errors.capacite = "Required capacity";
  }
 
  if (validator.isEmpty(data.telephone)) {
    errors.telephone = "Required telephone";
  }
  if (validator.isEmpty(data.timeStart)) {
    errors.timeStart = "Required timeStart";
  }
  if (validator.isEmpty(data.timeFinish)) {
    errors.timeFinish = "Required timeFinish";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Required name";
  }
  if (validator.isEmpty(data.ParkingRate)) {
    errors.ParkingRate = "Required Parking Rate";
  }
  
  if (validator.isEmpty(data.adresse)) {
    errors.adresse = "Required adresse";
  }
  if (validator.isEmpty(data.user)) {
    errors.user = "Required user";
  }
  
  return {
      errors,
      isValid: isEmpty(errors)
  }
};