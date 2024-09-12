import express from "express";
import { getProductMutations } from "../controllers/mutation";
import { getProductQueries } from "../controllers/query";

const productRouter = express.Router();

const { addProduct } = getProductMutations();
productRouter.post("/add", addProduct);

const { getAllProducts, getProductByProductId } = getProductQueries();
productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getProductByProductId);

export default productRouter;
