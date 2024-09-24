import express from "express";
import { getUserMutations } from "../controllers/user/mutation";

const userRouter = express.Router();

const { registerUser } = getUserMutations();
userRouter.post("/register", registerUser);

export { userRouter };
