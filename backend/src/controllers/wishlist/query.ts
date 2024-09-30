import { Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler";
import { WishlistModel } from "../../models/wishlist.model";

const getAllWislistProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const wishlist = await WishlistModel.find({});

    res.status(200).json({
      status: 200,
      data: wishlist,
      success: true,
      message: "Fetched all the wishlist products",
    });
  }
);

export const getWishlistQueries = () => {
  return { getAllWislistProducts };
};
