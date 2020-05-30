import { Router } from "express";
import {registerUser, getTokenByUsernameAndPassword} from "../service/user"

const router = Router();

router.post("/register", registerUser);
router.post("/login", getTokenByUsernameAndPassword);

export = router;