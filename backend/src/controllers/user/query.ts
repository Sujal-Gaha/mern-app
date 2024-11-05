import { Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler";
import { UserModel } from "../../models/user.model";

const logoutUser = asyncHandler((req: Request, res: Response) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "Logged Out Successfully!",
  });
});

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
  return { getAllUsers, logoutUser };
};
