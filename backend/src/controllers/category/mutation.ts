import { Request, Response } from "express";
import { CategoryModel } from "../../models/category.model";
import { handleError } from "../../utils/errorHandler";

const addCategory = async (req: Request, res: Response) => {
  const category = req.body;

  try {
    if (!category.name) {
      return res.status(400).json({
        status: 400,
        data: null,
        success: false,
        message: "Please fill in all the required fields",
      });
    }

    await CategoryModel.create(category);

    return res.status(201).json({
      status: 201,
      data: category,
      success: true,
      message: "Created the category successfully!",
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  if (!categoryId) {
    return res.status(400).json({
      status: 400,
      data: null,
      success: false,
      message: "Please provide the categoryId",
    });
  }

  try {
    const category = await CategoryModel.findByIdAndDelete(categoryId);

    if (!category) {
      return res.status(404).json({
        status: 404,
        data: null,
        success: false,
        message: `Category with the id ${categoryId} doesnot exist`,
      });
    }

    res.status(200).json({
      status: 200,
      data: category,
      success: true,
      message: `Deleted the category with id ${categoryId} successfully`,
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

const updatedCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  if (!categoryId) {
    return res.status(400).json({
      status: 400,
      data: null,
      success: false,
      message: `Bad Request`,
    });
  }

  const category = await CategoryModel.findById(categoryId);

  if (!category) {
    return res.status(404).json({
      status: 404,
      data: null,
      success: false,
      message: `Category with the id ${categoryId} doesnot exist`,
    });
  }

  try {
    await CategoryModel.findByIdAndUpdate(categoryId, req.body);

    res.status(200).json({
      status: 200,
      data: category,
      success: true,
      message: `Updated the category successfully!`,
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

export const getCategoryMutations = () => {
  return { addCategory, deleteCategory, updatedCategory };
};
