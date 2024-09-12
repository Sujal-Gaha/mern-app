import { Request, Response } from "express";
import { ProductModel } from "../models/product.model";

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

export const getProductMutations = () => {
  return { addProduct };
};
