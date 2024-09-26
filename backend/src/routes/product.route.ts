import express from "express";
import { getProductMutations } from "../controllers/product/mutation";
import { getProductQueries } from "../controllers/product/query";

const productRouter = express.Router();

const {
  getAllProducts,
  getProductByProductId,
  getProductsByCategory,
  getProductsWithDiscount,
} = getProductQueries();

productRouter.get("/", getAllProducts);
productRouter.get("/getProductById/:productId", getProductByProductId);
productRouter.get("/getProductsByCategory/:categoryId", getProductsByCategory);
productRouter.get("/getProductsWithDiscount", getProductsWithDiscount);

const { addProduct, deleteProduct, updateProduct } = getProductMutations();

productRouter.post("/add", addProduct);
productRouter.delete("/delete/:productId", deleteProduct);
productRouter.put("/update/:productId", updateProduct);

export { productRouter };
