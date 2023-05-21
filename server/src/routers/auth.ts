import express from "express";
import signupHandler from "../handlers/signup";
import signinHandler from "../handlers/signin";

const authRouter = express.Router();

authRouter.post("/signup", signupHandler);
authRouter.post("/signin", signinHandler);

export default authRouter;
