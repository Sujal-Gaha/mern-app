import { Request, Response } from "express";
import { CategoryModel } from "../../models/category.model";
import { asyncHandler } from "../../utils/async-handler";

const addCategory = asyncHandler(async (req: Request, res: Response) => {
  const category = req.body;

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
});

const deleteCategory = asyncHandler(async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  if (!categoryId) {
    return res.status(400).json({
      status: 400,
      data: null,
      success: false,
      message: "Please provide the categoryId",
    });
  }

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
});

const updatedCategory = asyncHandler(async (req: Request, res: Response) => {
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

  await CategoryModel.findByIdAndUpdate(categoryId, req.body);

  res.status(200).json({
    status: 200,
    data: category,
    success: true,
    message: `Updated the category successfully!`,
  });
});

export const getCategoryMutations = () => {
  return { addCategory, deleteCategory, updatedCategory };
};
