import express from "express";
import { getCategoryQueries } from "../controllers/category/query";
import { getCategoryMutations } from "../controllers/category/mutation";

const categoryRouter = express.Router();

const { getAllCategory } = getCategoryQueries();
categoryRouter.get("/", getAllCategory);

const { addCategory, deleteCategory } = getCategoryMutations();
categoryRouter.post("/add", addCategory);
categoryRouter.post("/delete/:categoryId", deleteCategory);

export { categoryRouter };
