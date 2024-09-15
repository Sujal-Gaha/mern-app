import { Request, Response } from "express";
import { ProductModel } from "../../models/product.model";
import { CategoryModel } from "../../models/category.model";

const getAllProducts = async (req: Request, res: Response) => {
  const product = await ProductModel.find();

  res.status(200).json({
    status: 200,
    data: product,
    success: true,
    message: "Fetched all the products successfully",
  });
};

const getProductByProductId = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const productById = await ProductModel.findById(productId);

    if (!productById) {
      return res.status(404).json({
        status: 404,
        data: null,
        success: false,
        message: `Product with the id: ${productId} doesnot exist!`,
      });
    }

    res.status(200).json({
      status: 200,
      data: productById,
      success: true,
      message: `Successfully fetched the product with id ${productId}`,
    });
  } catch (error) {
    console.log("Error while getting product by id", error);

    res.status(500).json({
      status: 500,
      data: null,
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    if (!categoryId) {
      return res.status(400).json({
        status: 400,
        data: null,
        success: false,
        message: "Please provide the category id",
      });
    }

    const categoryExist = await CategoryModel.findById(categoryId);

    if (!categoryExist) {
      return res.status(400).json({
        status: 400,
        data: null,
        success: false,
        message: `Category with the id ${categoryId} doesnot exist!`,
      });
    }

    const product = await ProductModel.find({ category: categoryId });

    if (!product) {
      return res.status(404).json({
        status: 404,
        data: null,
        success: false,
        message: "There are no product with this category id",
      });
    }

    res.status(200).json({
      status: 200,
      data: product,
      success: true,
      message: "Successfully fetched the product by category",
    });
  } catch (error: any) {
    console.log("Error while fetching product by category ", error);

    res.status(500).json({
      status: 500,
      data: null,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const getProductQueries = () => {
  return { getAllProducts, getProductByProductId, getProductsByCategory };
};
