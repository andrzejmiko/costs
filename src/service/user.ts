import * as bcrypt from "bcrypt";
import { userDao } from '../dao/user';
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as passport from "passport";

const saltRounds = 10;
const dao = new userDao();
const defaultPermissions = 'read,write'

const registerUser = async (req: Request, res: Response): Promise<void> => {
    const pass = req.body.password;
    const permissions: string = req.body.permissions || defaultPermissions;
    const hashedPassword = await bcrypt.hash(pass, saltRounds)
  
    await dao.saveUser({
      username: req.body.username,
      password: hashedPassword,
      permissions
    });
  
    res.status(200).send();
  }

  const getTokenByUsernameAndPassword =  (req: Request, res: Response, next: NextFunction) =>  {
    passport.authenticate("local", function (err, user, info) {
      if (err) return next(err);
      if (!user) {
        res.status(401).json({ status: "error", code: "unauthorized" });
      } else {
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '9h' });
        res.status(200).send({ token: token });
      }
    })(req, res, next);
  }

export {
  registerUser,
  getTokenByUsernameAndPassword
};