import express from "express";
import { getUserMutations } from "../controllers/user/mutation";
import { getUserQueries } from "../controllers/user/query";

const userRouter = express.Router();

const { getAllUsers } = getUserQueries();
userRouter.get("/", getAllUsers);

const { registerUser } = getUserMutations();
userRouter.post("/register", registerUser);

export { userRouter };
