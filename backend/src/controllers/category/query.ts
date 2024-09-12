import { Request, Response } from "express";
import { CategoryModel } from "../../models/category.model";

const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find({});

    res.status(200).json({
      status: 200,
      data: categories,
      success: true,
      message: "Fetched all the categories successfully",
    });
  } catch (error: any) {
    console.log("Error while fetching all category", error);

    res.status(500).json({
      status: 500,
      data: null,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const getCategoryQueries = () => {
  return { getAllCategory };
};
