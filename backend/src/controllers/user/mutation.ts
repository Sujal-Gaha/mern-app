import { Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler";
import { UserModel } from "../../models/user.model";
import bcrypt from "bcrypt";
import { createSecretToken } from "../../auth/secret-token";
import dotenv from "dotenv";

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      status: 400,
      data: null,
      success: false,
      message: "Please fill in all the required fields",
    });
  }

  const oldUser = await UserModel.findOne({ email });

  if (oldUser) {
    return res.status(409).json({
      status: 409,
      data: null,
      success: false,
      message: "User with the email already exists!",
    });
  }

  const isUsernameTaken = await UserModel.findOne({ username });

  if (isUsernameTaken) {
    return res.status(409).json({
      status: 409,
      data: null,
      success: false,
      message: "Username is already taken",
    });
  }

  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await UserModel.create({
    username: username,
    email: email,
    password: hashedPassword,
    ...(role ? { role: role } : null),
  });

  const token = createSecretToken(user._id);

  res.cookie("token", token, {
    path: "/", // Cookie is accessible from all paths
    expires: new Date(Date.now() + 86400000), // Cookie expires in 1 day
    secure: true, // Cookie will only be sent over HTTPS
    httpOnly: true, // Cookie cannot be accessed via client-side scripts
    sameSite: "none",
  });

  return res.status(201).json({
    status: 201,
    data: user,
    success: true,
    message: "Your account has been created successfully!",
  });
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({
      status: 400,
      data: null,
      success: false,
      message: "All fields are required",
    });
  }

  const user = await UserModel.findOne({ email });

  if (!(user && (await bcrypt.compare(password, user.password)))) {
    return res.status(404).json({
      status: 404,
      data: null,
      success: false,
      message: "Invalid Credential",
    });
  }

  const token = createSecretToken(user._id);

  res.cookie("token", token, {
    domain: FRONTEND_URL,
    path: "/",
    expires: new Date(Date.now() + 86400000),
    secure: true,
    httpOnly: true,
    sameSite: "none",
  });

  return res.status(200).json({
    status: 200,
    data: user,
    success: true,
    message: "Logged In Successfully",
  });
});

export const getUserMutations = () => {
  return { registerUser, loginUser };
};
