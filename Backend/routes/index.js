var express = require("express");
const { Register, Login } = require("../controllers/user.controller");
const {AddParking,FindAllParkings,FindSingleParking,DeleteParking,EditParking} = require("../controllers/parking.controller")
const{AddPlaceParking,FindAllPlaceParkings,FindSinglePlaceParking,EditPlaceParking,DeletePlaceParking} = require("../controllers/placeParking.controller")
const passport = require("passport");
var router = express.Router();

/* GET home page. */
router.post("/register", Register);
router.post("/login", Login);

/* PARKING */
router.post("/parking", 
passport.authenticate("jwt", { session: false }),
AddParking);
router.get("/parkings", 
passport.authenticate("jwt", { session: false }),
FindAllParkings
);
router.get("/parking/:id", 
passport.authenticate("jwt", { session: false }),
FindSingleParking
);
router.patch("/parking/:id", 
passport.authenticate("jwt", { session: false }),
EditParking
)
router.delete("/parking/:id",
passport.authenticate("jwt",{session: false}),
DeleteParking
)
/* PLACE PARKING */
router.post("/placep", 
passport.authenticate("jwt", { session: false }),
AddPlaceParking);

router.get("/placeps", 
passport.authenticate("jwt", { session: false }),
FindAllPlaceParkings);

router.get("/placep/:id", 
passport.authenticate("jwt", { session: false }),
FindSinglePlaceParking
);
router.patch("/placep/:id", 
passport.authenticate("jwt", { session: false }),
EditPlaceParking
);
router.delete("/placep/:id",
passport.authenticate("jwt",{session: false}),
DeletePlaceParking
);
module.exports = router;