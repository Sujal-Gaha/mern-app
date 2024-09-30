import express from "express";
import { getWishlistQueries } from "../controllers/wishlist/query";
import { getWishlistMutations } from "../controllers/wishlist/mutation";

const wishlistRouter = express.Router();

const { getAllWislistProducts } = getWishlistQueries();
wishlistRouter.get("/", getAllWislistProducts);

const { toggleProductInWishlist } = getWishlistMutations();
wishlistRouter.post("/add", toggleProductInWishlist);

export { wishlistRouter };
