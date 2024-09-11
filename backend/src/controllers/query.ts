import { Request, Response } from "express";
import ProductModel from "../models/product.model";

const getAllProducts = async (req: Request, res: Response) => {
  const product = await ProductModel.find();

  res.status(200).json({
    status: 200,
    data: product,
    success: true,
    message: "Fetched all the products successfully",
  });
};

export const getProductQueries = () => {
  return { getAllProducts };
};
