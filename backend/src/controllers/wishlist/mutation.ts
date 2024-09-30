import { Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler";
import { UserModel } from "../../models/user.model";
import { ProductModel } from "../../models/product.model";
import { WishlistModel } from "../../models/wishlist.model";

const toggleProductInWishlist = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({
        status: 400,
        data: null,
        success: false,
        message: "Please provide the productId and the userId",
      });
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        status: 404,
        data: null,
        success: false,
        message: "User not found.",
      });
    }

    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        status: 404,
        data: null,
        success: false,
        message: "User not found.",
      });
    }

    let wishlist = await WishlistModel.findOne({ user: userId });

    if (!wishlist) {
      wishlist = await WishlistModel.create({
        user: userId,
        product: [product],
      });
    } else {
      const productIndex = wishlist.product.indexOf(productId);

      if (productIndex > -1) {
        wishlist.product.splice(productIndex, 1);
      }
    }

    const addedWishlist = await WishlistModel.create({
      user: userId,
      product: [product],
    });

    return res.status(201).json({
      status: 201,
      data: addedWishlist,
      success: true,
      message: "Added product to wishlist successfully!",
    });
  }
);

export const getWishlistMutations = () => {
  return { toggleProductInWishlist };
};
