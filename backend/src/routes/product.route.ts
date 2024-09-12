import express from "express";
import { getProductMutations } from "../controllers/product/mutation";
import { getProductQueries } from "../controllers/product/query";
import { getCategoryMutations } from "../controllers/category/mutation";
import { getCategoryQueries } from "../controllers/category/query";

const router = express.Router();

const { addProduct } = getProductMutations();
router.post("/add", addProduct);

const { getAllProducts, getProductByProductId } = getProductQueries();
router.get("/", getAllProducts);
router.get("/getProductById/:productId", getProductByProductId);

const { createCategory } = getCategoryMutations();
router.post("/category/create", createCategory);

const { getAllCategory } = getCategoryQueries();
router.get("/category", getAllCategory);

export { router };
