const passport = require("passport");

const { FIXED_VALUES } = require("../../../index");

const JWTStrategy = require("passport-jwt").Strategy;

const ExtractJWT = require("passport-jwt").ExtractJwt;

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: FIXED_VALUES.JWT_SECRET
};

passport.use("authenticate-user", new JWTStrategy(options, async function (jwtPayload, done) {
  if (jwtPayload.userId) return done(null, jwtPayload);
  return done(null, false);
}));
