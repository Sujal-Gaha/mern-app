import { Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler";
import { UserModel } from "../../models/user.model";

const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await UserModel.find({});

  res.status(200).json({
    status: 200,
    data: users,
    success: true,
    message: "Fetched all the users successfully",
  });
});

export const getUserQueries = () => {
  return { getAllUsers };
};
