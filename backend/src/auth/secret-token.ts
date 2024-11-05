import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

dotenv.config();

const TOKEN_KEY = process.env.TOKEN_KEY || "";

export const createSecretToken = (id: mongoose.Types.ObjectId) => {
  return jwt.sign({ id }, TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
