import { Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler";
import { UserModel } from "../../models/user.model";

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      status: 400,
      data: null,
      success: false,
      message: "Please fill in all the required fields",
    });
  }

  const user = await UserModel.create({ username, email, password });

  res.status(201).json({
    status: 201,
    data: user,
    success: true,
    message: "Registered Successfully!",
  });
});

export const getUserMutations = () => {
  return { registerUser };
};
