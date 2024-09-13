import { Request, Response } from "express";
import { ProductModel } from "../../models/product.model";

const addProduct = async (req: Request, res: Response) => {
  const product = req.body;

  try {
    if (
      !product.name ||
      !product.price ||
      !product.stock ||
      !product.description ||
      !product.image ||
      !product.category ||
      !product.stock
    ) {
      return res.status(400).json({
        status: 400,
        data: null,
        success: false,
        message: "Please fill in all the required fields",
      });
    }

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

const deleteProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;

  if (!productId) {
    return res.status(400).json({
      status: 400,
      data: null,
      success: false,
      message: "Please provide the productId",
    });
  }

  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        status: 404,
        data: null,
        success: false,
        message: `Product with the id ${productId} doesnot exist`,
      });
    }

    res.status(200).json({
      status: 200,
      data: deletedProduct,
      success: true,
      message: `Deleted the product with id ${productId} successfully`,
    });
  } catch (error: any) {
    console.log("Error ", error);

    res.status(500).json({
      status: 500,
      data: null,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const getProductMutations = () => {
  return { addProduct, deleteProductById };
};
