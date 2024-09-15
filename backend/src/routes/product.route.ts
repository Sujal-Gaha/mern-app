import express from "express";
import { getProductMutations } from "../controllers/product/mutation";
import { getProductQueries } from "../controllers/product/query";

const productRouter = express.Router();

const { getAllProducts, getProductByProductId, getProductsByCategory } =
  getProductQueries();
productRouter.get("/", getAllProducts);
productRouter.get("/getProductById/:productId", getProductByProductId);
productRouter.get("/getProductsByCategory/:categoryId", getProductsByCategory);

const { addProduct, deleteProduct, updateProduct } = getProductMutations();
productRouter.post("/add", addProduct);
productRouter.post("/delete/:productId", deleteProduct);
productRouter.put("/update/:productId", updateProduct);

export { productRouter };
