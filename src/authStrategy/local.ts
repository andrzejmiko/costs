import * as passportLocal from "passport-local";
import * as bcrypt from "bcrypt";
import { userDao } from '../dao/user';
import * as passport from "passport";

const dao = new userDao();

//configuration of starategy to auth user by username and password
passport.use(new passportLocal.Strategy({ usernameField: "username" },
  async (username, password, done) => {
        const user = await dao.findByUsername(username);
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return done(undefined, user);
            }
        }
        return done(undefined, false, { message: "Invalid username or password." });
    }))
