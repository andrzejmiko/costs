import { NextFunction, Request, Response } from "express";
import { userDao } from '../dao/user';


const data = (req:Request, res:Response) => {
    console.log("blabla");
    res.send("Hello World1sdfsdfsdfdfss2df");
}

const dataSecured = (req:Request, res:Response) => {
    console.log("blabla");
    res.send("securedWithToken");
}


const dataAdmin = (req:Request, res:Response) => {
    console.log("blabla");
    res.send("securedWithTokenForAdmin");
}

export {
    data,
    dataSecured,
    dataAdmin
};