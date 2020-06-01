import { Router } from "express";
import {data, dataSecured, dataAdmin, simpleMockForFrontend} from "../service/budget"
import {authorize} from '../service/auth'

const router = Router();

// request sent to /data executes data function
router.get("/data", data);

// simple function returns object
router.get("/simplemock", simpleMockForFrontend);

// request with path dataSecured at first executes function authorize, witch checks if user is logged and has enought permissions, then secured function is executed 
router.get("/dataSecured", authorize(['read', 'write']), dataSecured);
// yet another function with other required permissions
router.get("/dataSecuredAdmin", authorize(['read', 'write', 'admin']), dataAdmin);

export = router;