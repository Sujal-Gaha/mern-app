import { Request, Response } from "express";
import { ProductModel } from "../../models/product.model";

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

export const getProductQueries = () => {
  return { getAllProducts, getProductByProductId };
};
