import { Request, Response } from "express";
import { ProductModel } from "../../models/product.model";
import { handleError } from "../../utils/errorHandler";

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
    handleError(res, error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
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
    handleError(res, error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;

  if (!productId) {
    return res.status(400).json({
      status: 400,
      data: null,
      success: false,
    });
  }

  try {
    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        status: 404,
        data: null,
        success: false,
        message: `Product with the id ${productId} doesnot exist`,
      });
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      req.body
    );

    res.status(200).json({
      status: 200,
      data: updatedProduct,
      success: true,
      message: "Updated the product successfully",
    });
  } catch (error: any) {
    handleError(res, error);
  }
};

export const getProductMutations = () => {
  return { addProduct, deleteProduct, updateProduct };
};
