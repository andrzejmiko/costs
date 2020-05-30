import { Router } from "express";
import {data, dataSecured, dataAdmin} from "../service/budget"
import {authorize} from '../service/auth'

const router = Router();

router.get("/data", data);
router.get("/dataSecured", authorize(['read', 'write']), dataSecured);
router.get("/dataSecuredAdmin", authorize(['read', 'write', 'admin']), dataAdmin);

export = router;