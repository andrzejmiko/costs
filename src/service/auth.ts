import { NextFunction, Request, Response } from "express";
import * as passport from "passport";
import { Account } from "../model/account";

const authorize = (permissions:string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("jwt", function (err, user: Account, info) {
      if (err) {
        console.log(err);
        return res.status(401).json({ status: "error", code: "401" });
      }
      if (!user) {
        return res.status(401).json({ status: "error", code: "401" });
      } 
      else {
        const userPermissions = user.permissions.split(',');
        const overlapingPermissions = userPermissions.filter(value => permissions.includes(value));
        if (overlapingPermissions.length === permissions.length) {
          return next();
        }
        else {
          return res.status(403).json({ status: "error", code: "403" });
        }

        
      }
    })(req, res, next);
  }
}

export {
  authorize
}