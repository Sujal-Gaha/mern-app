import { Request, Response } from "express";
import { CategoryModel } from "../../models/category.model";
import { asyncHandler } from "../../utils/async-handler";

const getAllCategory = asyncHandler(async (req: Request, res: Response) => {
  const categories = await CategoryModel.find({});

  res.status(200).json({
    status: 200,
    data: categories,
    success: true,
    message: "Fetched all the categories successfully",
  });
});

export const getCategoryQueries = () => {
  return { getAllCategory };
};
