import express from "express";
import { getUserMutations } from "../controllers/user/mutation";
import { getUserQueries } from "../controllers/user/query";

const userRouter = express.Router();

const { getAllUsers, logoutUser } = getUserQueries();
userRouter.get("/", getAllUsers);
userRouter.get("/logout", logoutUser);

const { registerUser, loginUser } = getUserMutations();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export { userRouter };
