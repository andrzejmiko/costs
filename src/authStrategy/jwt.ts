import * as passportJwt from "passport-jwt";
import * as bcrypt from "bcrypt";
import * as passport from "passport";
import { userDao } from '../dao/user';

const dao = new userDao();
passport.use(new passportJwt.Strategy(
  {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  }, async function (jwtToken, done) {
    const user = await dao.findByUsername(jwtToken.username);
    if(user) {
      return done(undefined, user , jwtToken);
    }
    return done(undefined, false);
  }));
