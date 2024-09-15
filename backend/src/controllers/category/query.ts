import { Request, Response } from "express";
import { CategoryModel } from "../../models/category.model";
import { handleError } from "../../utils/errorHandler";

const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find({});

    res.status(200).json({
      status: 200,
      data: categories,
      success: true,
      message: "Fetched all the categories successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

export const getCategoryQueries = () => {
  return { getAllCategory };
};
