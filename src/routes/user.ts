import { Router } from "express";
import {registerUser, getTokenByUsernameAndPassword} from "../service/user"

const router = Router();

// function registers new user
router.post("/register", registerUser);
// function check username and password and then returns token
router.post("/login", getTokenByUsernameAndPassword);

export = router;