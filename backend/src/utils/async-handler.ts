import { Request, Response } from "express";
import { handleError } from "./error-handler";

export const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((error) =>
      handleError(res, error)
    );
  };
