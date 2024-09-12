import { Request, Response } from "express";
import { ProductModel } from "../models/product.model";
import { CategoryModel } from "../models/category.model";

const addProduct = async (req: Request, res: Response) => {
  const product = req.body;

  try {
    await ProductModel.create(product);

    res.status(201).json({
      status: 201,
      data: product,
      success: true,
      message: "Added the product successfully!",
    });
  } catch (error) {
    console.log("Error while adding product", error);

    res.status(500).json({
      status: 500,
      data: null,
      success: false,
      message: "Internal Server Error!",
    });
  }
};

const createCategory = async (req: Request, res: Response) => {
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
    console.log("Error while creating category ", error);

    return res.status(500).json({
      status: 500,
      data: null,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const getProductMutations = () => {
  return { addProduct, createCategory };
};
