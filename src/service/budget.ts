import { NextFunction, Request, Response } from "express";
import { userDao } from '../dao/user';


const data = (req:Request, res:Response) => {
    
    res.send("Hello World1sdfsdfsdfdfss2df");
}

const simpleMockForFrontend = (req:Request, res:Response) => {
    res.status(201).send({
        prop1:1,
        prop2: 'prop2',
        prop3: {
            prop1: 1,
            prop2: {}
        }
    });
}

const dataSecured = (req:Request, res:Response) => {
    res.send("securedWithToken");
}


const dataAdmin = (req:Request, res:Response) => {
    res.send("securedWithTokenForAdmin");
}

export {
    data,
    dataSecured,
    dataAdmin,
    simpleMockForFrontend
};