import express from "express";
import { getProductMutations } from "../controllers/mutation";
import { getProductQueries } from "../controllers/query";

const productRouter = express.Router();

const { addProduct } = getProductMutations();
productRouter.post("/add", addProduct);

const { getAllProducts } = getProductQueries();
productRouter.get("/", getAllProducts);

export default productRouter;
