const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/model.user'); 

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: '2115345' // Clé secrète pour signer et vérifier le JWT
};
module.exports = (passport) => {
passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    UserModel.find( {_id: jwt_payload.id}, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));
}
