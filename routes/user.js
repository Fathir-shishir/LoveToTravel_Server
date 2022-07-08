import express from "express";
const router = express.Router();

import { signup, signin, googleSignIn } from "../controllers/user.js";

router.post("/signup", signup);



export default router;
