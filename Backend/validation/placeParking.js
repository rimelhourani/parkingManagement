const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidatePlaceParking(data) {
  let errors = {};

  data.type = !isEmpty(data.type ) ? data.type  : "";
  data.tarif = !isEmpty(data.tarif) ? data.tarif : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.parking = !isEmpty(data.parking) ? data.parking : "";
  
  if (validator.isEmpty(data.type)) {
    errors.type = "Required type";
  }
 
  if (validator.isEmpty(data.tarif)) {
    errors.tarif = "Required tarif";
  }
  if (validator.isEmpty(data.description)) {
    errors.description = "Required description";
  }
  if (validator.isEmpty(data.parking)) {
    errors.parking = "Required parking";
  }
  
  return {
      errors,
      isValid: isEmpty(errors)
  }
};