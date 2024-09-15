import { Request, Response } from "express";
import { ProductModel } from "../../models/product.model";
import { CategoryModel } from "../../models/category.model";
import {
  TGetAllProducts,
  TGetProductByProductId,
} from "../../types/product/TProductResponse";
import { handleError } from "../../utils/errorHandler";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.find();

    const productResponse: TGetAllProducts = {
      status: 200,
      data: product,
      success: true,
      message: "Fetched all the products successfully",
    };

    res.status(200).json(productResponse);
  } catch (error: any) {
    handleError(res, error);
  }
};

const getProductByProductId = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(400).json({
        status: 400,
        data: null,
        success: false,
        message: "Please provide the product id",
      });
    }

    const productById = await ProductModel.findById(productId);

    if (!productById) {
      return res.status(404).json({
        status: 404,
        data: null,
        success: false,
        message: `Product with the id: ${productId} doesnot exist!`,
      });
    }

    const productByIdResponse: TGetProductByProductId = {
      status: 200,
      data: productById,
      success: true,
      message: `Successfully fetched the product with id ${productId}`,
    };

    res.status(200).json(productByIdResponse);
  } catch (error: any) {
    handleError(res, error);
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
    handleError(res, error);
  }
};

const getProductsWithDiscount = async (req: Request, res: Response) => {
  try {
    const productsWithDiscount = await ProductModel.find({
      discountRate: {
        $gt: 0,
      },
    });

    res.status(200).json({
      status: 200,
      data: productsWithDiscount,
      success: true,
      message: "Fetched all the products with discount successfully",
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

export const getProductQueries = () => {
  return {
    getAllProducts,
    getProductByProductId,
    getProductsByCategory,
    getProductsWithDiscount,
  };
};
