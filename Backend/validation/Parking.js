const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateParking(data) {
  let errors = {};

  data.capacite = !isEmpty(data.capacite) ? data.capacite : "";
  data.adresse = !isEmpty(data.adresse) ? data.adresse : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.user = !isEmpty(data.user) ? data.user : "";
  
  if (validator.isEmpty(data.capacite)) {
    errors.capacite = "Required capacity";
  }
 
  if (validator.isEmpty(data.description)) {
    errors.description = "Required description";
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