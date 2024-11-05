import express from "express";
import { getUserMutations } from "../controllers/user/mutation";
import { getUserQueries } from "../controllers/user/query";

const userRouter = express.Router();

const { getAllUsers } = getUserQueries();
userRouter.get("/", getAllUsers);

const { registerUser, loginUser } = getUserMutations();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export { userRouter };
