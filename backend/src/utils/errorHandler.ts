import { Response } from "express";
import { TErrorResponse } from "../types/TErrorResponse";

export const handleError = (
  res: Response,
  error: any,
  customMessage?: string
) => {
  console.error("Error:", error);

  const errorResponse: TErrorResponse = {
    status: 500,
    data: null,
    success: false,
    message: customMessage || error.message || "Internal Server Error",
  };

  res.status(500).json(errorResponse);
};
